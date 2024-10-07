from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import db
from utils.hashing import get_password_hash, verify_password
from utils.jwt_handler import create_access_token, decode_token
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from schemas.user_schema import UserOut, UserCreate
from models.users import User
from datetime import timedelta


router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

@router.post("/register/", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(db.get_db)):
    print("user", user)
    # Check if the user already exists
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash the password before saving
    hashed_password = get_password_hash(user.password)
    
    # Create new user instance
    db_user = User(
        username=user.username, 
        email=user.email, 
        hashed_password=hashed_password
    )
    
    print("user", db_user)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(db.get_db)):
    # Check if user exists
    user = db.query(User).filter(User.email == form_data.username).first()
    
    # Verify password
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    # Create JWT token
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/token/refresh")
def refresh_token(refresh_token: str, db: Session = Depends(db.get_db)):

    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    # Decode the refresh token
    try:
        payload = decode_token(refresh_token)  # Implement this function in your utils
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except Exception:
        raise credentials_exception
    
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception

    # Create a new access token
    access_token = create_access_token(data={"sub": user.email}, expires_delta=timedelta(minutes=15))
    return {"access_token": access_token, "token_type": "bearer"}


# Current User 
@router.post("/current_user")
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(db.get_db)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = decode_token(token)
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except Exception as e:
        raise credentials_exception
    
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    
    return user


@router.get("/profile")
def read_profile(current_user: User = Depends(get_current_user)):
    return {"message": f"Hello, {current_user.name}"}

