import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import userPhoto from '../../../assets/images/user-icon.png';
import ProfileStatus from './ProfileStatus';
import Contacts from './Contacts';
import FollowUnfollowButton from '../../common/Button/FollowUnfollowButton';
import UserPhoto from '../../common/UserPhoto/UserPhoto';


const ProfileInfo = ({ profile, isAuth, status, updateUserStatus, pathUserId, authorizedUserId,
  isFollowed, unfollow, follow, followingInProgress }) => {


  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={style.tape}>
      <div className={style.descriptionBloc}>
        <div>
          <UserPhoto userPhoto={profile.photos.large} />
          <div className={style.followButton}>
            {pathUserId == authorizedUserId || isAuth && authorizedUserId && !pathUserId
              ? <div></div>
              : <FollowUnfollowButton isAuth={isAuth} isFollowed={isFollowed}
                userId={profile.userId} followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
                pathUserId={pathUserId}
                authorizedUserId={authorizedUserId} />
            }
          </div>
        </div>
        <div className={style.userInfo}>
          <div className={style.userName}>{profile.fullName}</div>
          <div className={style.status}><ProfileStatus isAuth={isAuth} status={status}
            updateUserStatus={updateUserStatus} pathUserId={pathUserId}
            authorizedUserId={authorizedUserId}
          />
          </div>
          <div>{profile.aboutMe}</div>
          <div>{profile.lookingForAJob ?
            <div className={style.lookingJobBloc}>
              <div>{profile.lookingForAJobDescription}</div>
              <img src='https://image.flaticon.com/icons/png/128/2890/2890347.png' />
            </div> : null}
          </div>
        </div>
        <div>
          <Contacts contacts={profile.contacts} />
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo;


