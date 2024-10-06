from pydantic import BaseModel

class MatchOut(BaseModel):
    matcher_id: int
    matched_user_id: int

    class Config:
        orm_mode = True
