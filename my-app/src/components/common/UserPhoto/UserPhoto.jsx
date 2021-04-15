import React from 'react';
import userDefaultPhoto from './../../../assets/images/user-icon.png';

const UserPhoto = ({ userPhoto }) => {
    return(
        <div>
        <img src={userPhoto != null ? userPhoto : userDefaultPhoto} />
        </div>
    )
}

export default UserPhoto;