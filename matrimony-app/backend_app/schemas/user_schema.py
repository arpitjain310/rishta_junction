from pydantic import BaseModel, EmailStr
from datetime import date, datetime
from typing import Optional, List

class UserCreate(BaseModel):
    name: str
    password: str
    gender: str
    looking_for: str
    mobile_number: str

class UserOut(BaseModel):
    user_id: int
    name: str
    email: str
    gender: str
    looking_for: str
    date_of_birth: date
    mobile_number: str
    is_verified: bool
    created_at: datetime

    class Config:
        orm_mode = True

class OTPVerificationRequest(BaseModel):
    mobile_number: str
    otp: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class LoginOTPRequest(BaseModel):
    mobile_number: str

class LoginOTPVerify(BaseModel):
    mobile_number: str
    otp: str

class UserUpdate(BaseModel):
    name: Optional[str]
    email: Optional[EmailStr]
    gender: Optional[str]
    looking_for: Optional[str]
    date_of_birth: Optional[date]
    mobile_number: Optional[str]

class UserSearch(BaseModel):
    age_min: Optional[int]
    age_max: Optional[int]
    gender: Optional[str]
    looking_for: Optional[str]

class UserSearchResult(BaseModel):
    users: List[UserOut]
    total_count: int

class ForgotPasswordRequest(BaseModel):
    email: str

class ResetPasswordRequest(BaseModel):
    email: str
    otp: str
    new_password: str
