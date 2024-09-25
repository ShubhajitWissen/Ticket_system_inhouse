"""Router to Users data"""

from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session
from sqlalchemy import select
from app import schemas, utils
from app.database import get_db
import app.db_model as models
import uuid

router = APIRouter(
    prefix="/api", tags=["users"], responses={404: {"description": "Not found"}}
)


@router.post(
    "/users/",
    status_code=status.HTTP_201_CREATED,
    response_model=schemas.UserOut,
)
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """create a new user"""
    hashed_pwd = utils.hash_pwd(user.password)
    user.password = hashed_pwd
    new_user = models.User(**user.model_dump())

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@router.get("/users/", response_model=list[schemas.UserOut])
async def read_users(db: Session = Depends(get_db)):
    """Get all users, NOTE: ADMIN only"""
    users = db.execute(select(models.User)).scalars().all()
    return users


# TODO: add method to get current user data
# @router.get("/users/me")
# async def read_current_user():
#     """Get current logged in user"""
#     return {"myuid": "my fakeuid"}


# TODO: add method to update user data
# @router.put("/users/{id}")
# asycdef update_user_w_id():
# '''update the user with put method'''

@router.get("/users/{uid}", response_model=schemas.UserOut)
async def read_user(uid: str, db: Session = Depends(get_db)):
    id = uuid.UUID(uid)
    user = db.execute(select(models.User).filter_by(uid=id)).scalar_one()
    return user
