from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Optional

from db import Base

class Profile(Base):
    __tablename__ = 'profiles'
    
    profile_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    
    # New fields
    age = Column(Integer, nullable=True)
    gender = Column(String, nullable=True)  # dropdown
    height = Column(Float, nullable=True)  # text field
    complexion = Column(String, nullable=True)  # text field
    body_type = Column(String, nullable=True)  # text field
    marital_status = Column(String, nullable=True)  # dropdown
    have_children = Column(Boolean, nullable=True)  # radio button (yes/no)
    diet = Column(String, nullable=True)  # veg/non-veg (dropdown)
    drink = Column(Boolean, nullable=True)  # radio button (yes/no)
    smoke = Column(String, nullable=True)  # dropdown
    blood_group = Column(String, nullable=True)  # dropdown
    specially_abled = Column(Boolean, nullable=True)  # yes/no (radio button)
    
    education = Column(String, nullable=True)  # dropdown
    profession = Column(String, nullable=True)  # dropdown
    religion = Column(String, nullable=True)  # dropdown
    caste = Column(String, nullable=True)  # dropdown
    
    location_residence = Column(String, nullable=True)  # text field
    place_of_birth = Column(String, nullable=True)  # text field
    date_of_birth = Column(DateTime, nullable=True)  # calendar
    manglik = Column(Boolean, nullable=True)  # yes/no (radio button)
    
    owner = relationship("User", back_populates="profiles")
    photos = relationship("Photo", back_populates="profile")
