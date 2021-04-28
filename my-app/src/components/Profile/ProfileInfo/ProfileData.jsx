import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Contacts from './Contacts';



const src='https://image.flaticon.com/icons/png/128/2890/2890347.png';

const ProfileData = ({ profile, isOwner, goToEditMode }) => {


  return (
    <div>
      <div className={style.userInfo}>
        <div className={style.userName}>{profile.fullName}</div>
        <div><b>about me: </b>{profile.aboutMe}</div>
        <div><b>looking for a job: </b>
          {profile.lookingForAJob
            ? <span>yes
                <div className={style.lookingJobBloc}>
                <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
                <img src={src} />
              </div>
            </span>
            : <span>no</span>}
        </div>
      </div>
      <div>
        <Contacts contacts={profile.contacts} />
      </div>
      <div>
        {isOwner &&
          <button onClick={goToEditMode}>edit</button>
        }
      </div>
    </div>


  )
}

export default ProfileData;


