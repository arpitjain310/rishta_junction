from sqlalchemy import Column, Integer, String, DateTime, String
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Optional
from db import Base

class SupportRequest(Base):
    __tablename__ = 'support_requests'
    
    request_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    mobile_number = Column(String, nullable=False)
    request_text = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
