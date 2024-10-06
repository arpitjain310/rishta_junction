from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models, schemas, db
from schemas.match_schema import MatchOut

router = APIRouter()

@router.post("/matches/", response_model=MatchOut)
def create_match(match: MatchOut, db: Session = Depends(db.get_db)):
    db_match = models.match.Match(matcher_id=match.matcher_id, matched_user_id=match.matched_user_id)
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match
