from pydantic import BaseModel
from typing import Optional
from datetime import date

class ProfileCreate(BaseModel):
    user_id: int
    gender: str

class ProfileOut(BaseModel):
    profile_id: int
    user_id: int
    
    class Config:
        orm_mode = True

class ProfileFullOut(BaseModel):
    profile_id: int
    user_id: int
    name: Optional[str]
    gender: str
    email: Optional[str]
    age: Optional[int]
    height: Optional[float]
    complexion: Optional[str]
    body_type: Optional[str]
    marital_status: Optional[str]
    have_children: Optional[str]
    diet: Optional[str]
    drink: Optional[str]
    smoke: Optional[str]
    blood_group: Optional[str]
    specially_abled: Optional[str]
    father_name: Optional[str]
    father_occupation: Optional[str]
    mother_name: Optional[str]
    mother_occupation: Optional[str]
    sibling_count: Optional[int]
    sibling_married: Optional[str]
    sibling_details: Optional[str]
    education: Optional[str]
    profession: Optional[str]
    income: Optional[str]
    religion: Optional[str]
    caste: Optional[str]
    location_residence: Optional[str]
    place_of_birth: Optional[str]
    date_of_birth: Optional[date]
    manglik: Optional[str]

    class Config:
        orm_mode = True

class FilterProfileOut(BaseModel):
    profile_id: int
    user_id: int
    name: Optional[str]
    gender: str
    email: Optional[str]
    age: Optional[int]
    height: Optional[float]
    complexion: Optional[str]
    body_type: Optional[str]
    marital_status: Optional[str]
    have_children: Optional[bool]
    diet: Optional[str]
    drink: Optional[bool]
    smoke: Optional[str]
    blood_group: Optional[str]
    specially_abled: Optional[bool]
    father_name: Optional[str]
    father_occupation: Optional[str]
    mother_name: Optional[str]
    mother_occupation: Optional[str]
    sibling_count: Optional[int]
    sibling_married: Optional[str]
    sibling_details: Optional[str]
    education: Optional[str]
    profession: Optional[str]
    income: Optional[str]
    religion: Optional[str]
    caste: Optional[str]
    location_residence: Optional[str]
    place_of_birth: Optional[str]
    date_of_birth: Optional[date]
    manglik: Optional[bool]

    class Config:
        orm_mode = True