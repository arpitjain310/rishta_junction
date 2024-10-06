from fastapi import APIRouter, Depends, HTTPException
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

@router.get("/profiles/", response_model=list[ProfileOut])
def get_all_profiles(db: Session = Depends(db.get_db)):
    db_profiles = db.query(models.profile.Profile).all()
    return db_profiles

@router.get("/profiles/filter/", response_model=list[ProfileOut])
def get_filtered_profiles(
    age_min: int = None,
    age_max: int = None,
    gender: str = None,
    location: str = None,
    db: Session = Depends(db.get_db)
):
    query = db.query(models.profile.Profile)
    
    if age_min:
        query = query.filter(models.profile.Profile.age >= age_min)
    if age_max:
        query = query.filter(models.profile.Profile.age <= age_max)
    if gender:
        query = query.filter(models.profile.Profile.gender == gender)
    if location:
        query = query.filter(models.profile.Profile.location == location)
    
    filtered_profiles = query.all()
    return filtered_profiles
