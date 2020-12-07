import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


  return (
    <div className={c.tape}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;