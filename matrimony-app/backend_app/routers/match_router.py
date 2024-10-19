from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, db
from schemas.match_schema import MatchOut
from typing import List

router = APIRouter()

@router.post("/create_match/", response_model=MatchOut)
def create_match(match: MatchOut, db: Session = Depends(db.get_db)):
    db_match = models.match.Match(matcher_id=match.matcher_id, matched_user_id=match.matched_user_id)
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match

@router.get("/get_matches/", response_model=List[MatchOut])
def fetch_all_matches(db: Session = Depends(db.get_db)):
    matches = db.query(models.match.Match).all()
    return matches

@router.delete("/delete_match/{match_id}", response_model=MatchOut)
def delete_match(match_id: int, db: Session = Depends(db.get_db)):
    match = db.query(models.match.Match).filter(models.match.Match.match_id == match_id).first()
    if not match:
        raise HTTPException(status_code=404, detail="Match not found")
    db.delete(match)
    db.commit()
    return match