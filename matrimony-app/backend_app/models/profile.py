from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Date
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Optional
from db import Base

class Profile(Base):
    __tablename__ = 'profiles'
    
    profile_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    
    # Person for whom profile is created
    name = Column(String, nullable=True)
    gender = Column(String, nullable=False)
    email = Column(String, nullable=True)
    
    # Personal Details
    age = Column(Integer, nullable=True)
    height = Column(Float, nullable=True)
    complexion = Column(String, nullable=True)
    body_type = Column(String, nullable=True)
    marital_status = Column(String, nullable=True)
    have_children = Column(Boolean, nullable=True)
    diet = Column(String, nullable=True)
    drink = Column(Boolean, nullable=True)
    smoke = Column(String, nullable=True)
    blood_group = Column(String, nullable=True)
    specially_abled = Column(Boolean, nullable=True)
    
    # Family Details
    father_name = Column(String, nullable=True)
    father_occupation = Column(String, nullable=True)
    mother_name = Column(String, nullable=True)
    mother_occupation = Column(String, nullable=True)
    
    # Sibling Details
    sibling_count = Column(Integer, nullable=True)
    sibling_married = Column(String, nullable=True)
    sibling_details = Column(String, nullable=True)
    
    # Professional & Financial Information
    education = Column(String, nullable=True)
    profession = Column(String, nullable=True)
    income = Column(String, nullable=True)
    
    # Additional Details
    religion = Column(String, nullable=True)
    caste = Column(String, nullable=True)
    location_residence = Column(String, nullable=True)
    place_of_birth = Column(String, nullable=True)
    date_of_birth = Column(Date, nullable=True)
    manglik = Column(Boolean, nullable=True)
    
    owner = relationship("User", back_populates="profiles")
    photos = relationship("Photo", back_populates="profile")
