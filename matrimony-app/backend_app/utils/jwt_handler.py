from datetime import datetime, timedelta
from jose import JWTError, jwt,ExpiredSignatureError
from config import settings


SECRET_KEY = "your_secret_key"  # Replace with a secure random secret key
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


def create_refresh_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(days=30) 
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str):
    try:
        
        return jwt.decode(token, settings.SECRET_KEY, algorithms=settings.ALGORITHM)
    except ExpiredSignatureError:
        raise Exception("Token has expired. Please refresh your token.")
    except JWTError:
        raise Exception("Invalid token")
