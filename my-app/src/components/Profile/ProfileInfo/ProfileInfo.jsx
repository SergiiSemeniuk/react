import React from 'react';

import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={c.tape}>
      <div >
        <img className={c.img} src='https://media.djnetworks.net/media/static/dj-includes/images/brand/2018/02/bb-reason.jpg'></img>
      </div>
      <div className={c.descriptionBloc}>
        Ava + description
      </div>  
    </div>
  )
}

export default ProfileInfo;