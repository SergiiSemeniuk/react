import React from 'react';

import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={c.tape}>
      <div >
        <img className={c.img} src='/img/profile-cycle.png'></img>
      </div>
      <div className={c.descriptionBloc}>
        Ava + description
      </div>  
    </div>
  )
}

export default ProfileInfo;