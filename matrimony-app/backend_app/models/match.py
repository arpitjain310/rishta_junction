from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class Match(Base):
    __tablename__ = 'matches'

    match_id = Column(Integer, primary_key=True, index=True)
    matcher_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    matched_user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)

    # Explicitly define the foreign keys in the relationships
    matcher = relationship("User", foreign_keys=[matcher_id], back_populates="matches")
    
    matched_user = relationship("User",foreign_keys=[matched_user_id])