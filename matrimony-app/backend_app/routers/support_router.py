from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from db import get_db
from models.support_request import SupportRequest
from schemas.support_schema import SupportRequestCreate, SupportRequestOut

router = APIRouter()

@router.post("/support-request/", response_model=SupportRequestOut)
def create_support_request(request: SupportRequestCreate, db: Session = Depends(get_db)):
    new_request = SupportRequest(**request.dict())
    db.add(new_request)
    db.commit()
    db.refresh(new_request)
    return new_request

@router.get("/support-requests/", response_model=List[SupportRequestOut])
def get_all_support_requests(db: Session = Depends(get_db)):
    return db.query(SupportRequest).all()

@router.get("/support-request/{request_id}", response_model=SupportRequestOut)
def get_support_request(request_id: int, db: Session = Depends(get_db)):
    request = db.query(SupportRequest).filter(SupportRequest.request_id == request_id).first()
    if not request:
        raise HTTPException(status_code=404, detail="Support request not found")
    return request
