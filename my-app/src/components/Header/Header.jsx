import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import userPhoto from '../../assets/images/user-icon.png';
import reasonLogo from '../../assets/images/react-logo.png';
import UserPhoto from '../common/UserPhoto/UserPhoto';

const Header = (props) => {

  return (
    <header className={style.header}>
      <img className={style.headLogo} src={reasonLogo} alt='logo'></img>
      <div className={style.logoName}>
        ReaSoN
    </div>
      <div className={style.loginBlock}>
        {props.isAuth && props.profile
          ? <div className={style.loginUserBlock}>
            <div>
              <NavLink to={`/profile/${props.usersId}`} > {props.profile.fullName} </NavLink>
              <button onClick={() => props.logOutUser()}>Logout</button></div>
            <div className={style.userPhoto}>
              <UserPhoto className={style.userPhoto} userPhoto={props.profile.photos.small} />
            </div>           
          </div>
          : <NavLink to={'/login'} >Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;