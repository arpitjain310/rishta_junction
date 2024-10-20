from pydantic import BaseModel
from typing import Optional

class MatchOut(BaseModel):
    matcher_id: int
    matched_user_id: int
    matcher_name: Optional[str] = None
    matched_user_name: Optional[str] = None
    
    class Config:
        orm_mode = True
