from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class Photo(Base):
    __tablename__ = 'photos'

    photo_id = Column(Integer, primary_key=True, index=True)
    profile_id = Column(Integer, ForeignKey('profiles.profile_id', ondelete='CASCADE'), nullable=False)
    image_path = Column(String, nullable=False)

    profile = relationship("Profile", back_populates="photos")
