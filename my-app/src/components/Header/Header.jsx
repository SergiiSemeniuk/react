import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import userPhoto from '../../assets/images/user-icon.png';
import Preloader from '../common/preloader';

const Header = (props) => {

  return (
    <header className={style.header}>
      <img src='https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png' alt='logo'></img>
      <div className={style.logoName}>
        ReaSoN
    </div>
      <div className={style.loginBlock}>
        {props.isAuth && props.profile
          ? <div className={style.loginUserBlock}>
            <div>
            <NavLink to={`/profile/${props.usersId}`} > {props.profile.fullName} </NavLink>
            <button  onClick={() => props.logOutUser()}>Logout</button></div>
            
            <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt='userPhoto'></img>
            </div>
          : <NavLink to={'/login'} >Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;