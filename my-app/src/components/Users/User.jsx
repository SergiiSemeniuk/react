import React from 'react';
import style from './Users.module.css';
import UserPhoto from '../common/UserPhoto/UserPhoto';
import { NavLink } from 'react-router-dom';
import FollowUnfollowButton from '../common/Button/FollowUnfollowButton';


let User = ({ user, isAuth, followingInProgress, unfollow, follow }) => {
debugger
    return (
        <div className={style.usersPage} >
            <div className={style.userProfile} >
                <div className={style.usersAvatar}>
                
                    <NavLink to={`/profile/${user.id}`} >
                    <UserPhoto userPhoto={user.photos.small} />                       
                    </NavLink>
                </div>
                <div className={style.followButton}>
                <FollowUnfollowButton 
                    isAuth={isAuth}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                    user={user}
                />
                </div>
            </div>
            <div className={style.userInfo} >
                <div>
                    <div className={style.userName} > {user.name} </div>
                    <div className={style.userStatus} > {user.status} </div>
                </div>
                <div>
                    <div> {"user.location.country"} </div>
                    <div> {"user.location.city"} </div>
                </div>
            </div>
        </div>
    )
}

export default User;