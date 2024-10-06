from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class Profile(Base):
    __tablename__ = 'profiles'
    
    profile_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String, nullable=False)
    bio = Column(String, nullable=True)

    owner = relationship("User", back_populates="profiles")
    photos = relationship("Photo", back_populates="profile")
