import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


  return (
    <div className={style.tape}>
      <ProfileInfo {...props}  pathUserId={props.match.params.userId}
      />
      <MyPosts/>
    </div>
  )
}

export default Profile;