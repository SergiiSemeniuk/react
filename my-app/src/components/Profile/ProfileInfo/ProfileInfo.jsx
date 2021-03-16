import React from 'react';
import style from './ProfileInfo.module.css';
import profileImg from '../../../assets/images/profile-cycle.png'
import Preloader from '../../common/preloader';
import userPhoto from '../../../assets/images/user-icon.png';



const ProfileInfo = (props) => {


  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={style.tape}>
      <div >
        <img className={style.img} src={profileImg} />
      </div>
      <div className={style.descriptionBloc}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
          className={style.userPhoto} />
        <div className={style.userInfo}>
          <div className={style.userName}>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.lookingForAJob ?
            <div>
              <div>looking for a job </div>
              <img src='https://image.flaticon.com/icons/png/128/2890/2890347.png' />
              <div>{props.profile.lookingForAJobDescription}</div>
            </div> : null}
          </div>
        </div>

        <div> Contacts:
          <div>
            {props.profile.contacts.facebook}
          </div>
          <div>
            {props.profile.contacts.website}
          </div>
          <div>
            {props.profile.contacts.vk}
          </div>
          <div>
            {props.profile.contacts.twitter}
          </div>
          <div>
            {props.profile.contacts.instagram}
          </div>
          <div>
            {props.profile.contacts.youtube}
          </div>
          <div>
            {props.profile.contacts.github}
          </div>
          <div>
            {props.profile.contacts.mainLink}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;