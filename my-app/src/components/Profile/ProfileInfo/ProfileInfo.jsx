import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatus from './ProfileStatus';
import FollowUnfollowButton from '../../common/Button/FollowUnfollowButton';
import UserPhoto from '../../common/UserPhoto/UserPhoto';
import ProfileData from './ProfileData';
import ProfileFormData from './ProfileFormData';


const ProfileInfo = ({ profile, isAuth, status, updateUserStatus, pathUserId, authorizedUserId,
  isFollowed, unfollow, follow, followingInProgress, isOwner, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />
  }
  const onManePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  const onSubmit = (formData) => {  
    saveProfile(formData).then(()=>{
      setEditMode(false);
    })
    
  }

  return (
    <div className={style.tape}>
      <div className={style.descriptionBloc}>
        <div>
          <UserPhoto userPhoto={profile.photos.large} />
          <div className={style.status}>
            <ProfileStatus isAuth={isAuth} status={status}
              updateUserStatus={updateUserStatus} pathUserId={pathUserId}
              authorizedUserId={authorizedUserId} />
          </div>
          <div className={style.followButton}>
            {isOwner
              ? <div className={style.photoUploadBlock}>
                <input className={style.inputFile} id='inputFile' type={'file'} onChange={onManePhotoSelected} />
                <label htmlFor='inputFile' className={style.photoUploadButton}>Upload photo</label>
              </div>
              : <FollowUnfollowButton isAuth={isAuth} isFollowed={isFollowed}
                userId={profile.userId} followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
              />
            }
          </div>
        </div>
        {editMode
        ? <ProfileFormData initialValues={profile} profile={profile} onSubmit={onSubmit} />
        :<ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>setEditMode(true)} />
        }
       
        
      </div>
    </div>

  )
}

export default ProfileInfo;