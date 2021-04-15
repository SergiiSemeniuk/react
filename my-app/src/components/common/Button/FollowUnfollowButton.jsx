import React from 'react';
import style from './FollowUnfollowButton.module.css'



let FollowUnfollowButton = ({user, isAuth, followingInProgress, unfollow, follow, isFollowed, userId }) => {
  
    if (!user) {
        user = {
            followed: isFollowed,
            id: userId
        }
    }

    return (
        <div className={style.followButton} >
            {isAuth
                ? <div >
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }} >UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }} >Follow</button>
                    }
                </div>
                : <div></div>}
        </div>
    )
}

export default FollowUnfollowButton;