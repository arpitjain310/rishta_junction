from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models, schemas, db
from schemas.profile_schema import ProfileCreate, ProfileOut


router = APIRouter()

@router.post("/profiles/", response_model=ProfileOut)
def create_profile(profile: ProfileCreate, db: Session = Depends(db.get_db)):
    db_profile = models.profile.Profile(**profile.dict())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile
