from fastapi import APIRouter, Depends, HTTPException
from typing import List,Dict, Any
from sqlalchemy.orm import Session
import models, schemas, db
from schemas.profile_schema import ProfileCreate, ProfileOut
from fastapi.security import OAuth2PasswordBearer
from models.users import User

router = APIRouter()

@router.post("/create_profile/", response_model=ProfileOut)
def create_profile(profile: ProfileCreate, db: Session = Depends(db.get_db)):
    db_profile = models.profile.Profile(user_id=profile.user_id)
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

@router.get("/get_all_profiles/", response_model=List[ProfileOut])
def get_all_profiles(db: Session = Depends(db.get_db)):
    db_profiles = db.query(models.profile.Profile).all()
    return db_profiles

@router.get("/get_profile/{user_id}")
def get_profile(user_id: int, db: Session = Depends(db.get_db)):
    profile = db.query(models.profile.Profile).filter(models.profile.Profile.user_id == user_id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@router.put("/update_profile/{profile_id}", response_model=ProfileOut)
def update_profile(profile_id: int, profile_data: Dict[str, Any], db: Session = Depends(db.get_db)):
    db_profile = db.query(models.profile.Profile).filter(models.profile.Profile.profile_id == profile_id).first()
    if not db_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    for key, value in profile_data.items():
        setattr(db_profile, key, value)
    
    db.commit()
    db.refresh(db_profile)
    return db_profile

@router.get("/profiles/filter/", response_model=List[ProfileOut])
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

@router.delete("/delete_profile/{profile_id}", response_model=ProfileOut)
def delete_profile(profile_id: int, db: Session = Depends(db.get_db)):
    profile = db.query(models.profile.Profile).filter(models.profile.Profile.profile_id == profile_id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    db.delete(profile)
    db.commit()
    return profile