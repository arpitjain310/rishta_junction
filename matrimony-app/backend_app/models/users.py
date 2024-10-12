from sqlalchemy import Column, Integer,Date, String, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from db import Base

class User(Base):
    __tablename__ = 'users'
    
    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    mobile_number = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    looking_for = Column(String, nullable=False)
    date_of_birth = Column(Date, nullable=False)
    is_verified = Column(Boolean, default=False)
    otp = Column(String, nullable=True)
    otp_expires_at = Column(DateTime, nullable=True)    
    created_at = Column(DateTime, default=datetime.utcnow)
    
    profiles = relationship("Profile", back_populates="owner")
    
    matches = relationship("Match", back_populates="matcher", foreign_keys="Match.matcher_id")