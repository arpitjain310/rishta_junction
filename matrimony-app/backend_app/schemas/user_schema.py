from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime



class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    
    # Profile fields
    age: int
    gender: str
    height: Optional[float]
    complexion: Optional[str]
    body_type: Optional[str]
    marital_status: str
    have_children: bool
    diet: str
    drink: bool
    smoke: str
    blood_group: Optional[str]
    specially_abled: bool
    education: str
    profession: str
    religion: Optional[str]
    caste: Optional[str]
    location_residence: Optional[str]
    place_of_birth: Optional[str]
    date_of_birth: Optional[datetime]
    manglik: bool

    class Config:
        orm_mode = True


class UserOut(BaseModel):
    user_id: int
    username: str
    email: str

    class Config:
        orm_mode = True  
