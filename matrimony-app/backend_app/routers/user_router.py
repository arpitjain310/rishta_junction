from fastapi import APIRouter, Depends, HTTPException,status,Request
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from datetime import timedelta
from db import get_db
from utils.fast2sms import send_otp
from utils.hashing import get_password_hash, verify_password
from utils.jwt_handler import create_access_token, decode_token
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from schemas.user_schema import *
from models.users import User
from models.profile import Profile
import random
from datetime import datetime
from .profile_router import create_profile
from schemas.profile_schema import ProfileCreate

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Email address is already registered"}
        )
    
    existing_mobile = db.query(User).filter(User.mobile_number == user.mobile_number).first()
    if existing_mobile:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Mobile number is already registered"}
        )
    
    otp = str(random.randint(100000, 999999))
    otp_expires_at = datetime.utcnow() + timedelta(minutes=10)

    hashed_password = get_password_hash(user.password)
    
    # Mobile number validation
    if not user.mobile_number.isdigit() or len(user.mobile_number) != 10:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Invalid mobile number format"}
        )
    
    db_user = User(
        name=user.name,
        email=user.email,
        mobile_number=user.mobile_number,
        hashed_password=hashed_password,
        gender=user.gender,
        looking_for=user.looking_for,
        date_of_birth=user.date_of_birth,
        is_verified=False,
        otp=otp,
        otp_expires_at=otp_expires_at
    )
    
    db.add(db_user)
    db.commit()
    
    # Send OTP via SMS here
    # send_otp(otp,user.mobile_number)
    
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"success": True, "message": "OTP sent successfully","otp":otp}
    )

@router.post("/verify_otp_and_register")
def verify_otp_and_register(request: OTPVerificationRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.mobile_number == request.mobile_number).first()
    
    if not user or user.otp != request.otp:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Invalid OTP"}
        )
    

    if user.otp_expires_at < datetime.utcnow():
         return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "OTP is expired. Please register again"}
        )
        
    user.is_verified = True
    user.otp = None
    user.otp_expires_at = None
    db.commit()
    db.refresh(user)
    
    # Create a profile for the verified user
    profile_data = ProfileCreate(user_id=user.user_id)
    create_profile(profile_data, db)

    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content={"success": True, "message": "User registered successfully", }
    )

@router.post("/login")
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == login_data.email).first()
    
    if not user or not verify_password(login_data.password, user.hashed_password):
         return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Invalid credentials"}
        )

    if not user.is_verified:
         return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "User verification incomplete.Please contact support"}
        )

    access_token = create_access_token(data={"sub": user.email})

    return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={"success": True, 
                     "access_token": access_token, "token_type": "bearer",
                     "message": "Login successful"}
        )


@router.post("/login_send_otp")
def send_login_otp(mobile_number:str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.mobile_number == mobile_number).first()
    if not user:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "User not found"}
        )
    
    otp = str(random.randint(100000, 999999))
    user.otp = otp
    user.otp_expires_at = datetime.utcnow() + timedelta(minutes=10)
    db.commit()
    
    # Send OTP via SMS here
    # send_otp(otp,user.mobile_number)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"success": True, "message": "OTP sent successfully"}
    )

@router.post("/login/verify_otp")
def login_with_otp(mobile_number: str, otp: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.mobile_number == mobile_number).first()
    
    if not user or user.otp != otp:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Invalid OTP"}
        )
    
    if user.otp_expires_at < datetime.utcnow():
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "OTP has expired"}
        )
    
    if not user.is_verified:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"success": False, "message": "Registration not done. Please contact support."}
        )
    
    # Clear the OTP after successful login
    user.otp = None
    user.otp_expires_at = None
    db.commit()
    
    access_token = create_access_token(data={"sub": user.email})
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"success": True, "access_token": access_token, "token_type": "bearer"}
    )

@router.post("/logout")
def logout(token: str, db: Session = Depends(get_db)):
    try:
        payload = decode_token(token)
        email = payload.get("sub")
        user = db.query(User).filter(User.email == email).first()
        if user:
            user.access_token = None
            db.commit()
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={"success": True, "message": "Logged out successfully"}
            )
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid token")