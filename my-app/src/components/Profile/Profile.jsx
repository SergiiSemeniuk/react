import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


  return (
    <div className={style.tape}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPosts/>
    </div>
  )
}

export default Profile;