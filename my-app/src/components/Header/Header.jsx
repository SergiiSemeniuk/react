import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import userPhoto from '../../assets/images/user-icon.png';

const Header = (props) => {
 
  return (
    <header className={style.header}>
      <img src='https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png' alt='logo'></img>
      <div className={style.logoName}>
        ReaSoN
    </div>
      <div className={style.loginBlock}>
        {props.isAuth ?
          <div className={style.loginUserBlock}>
            <NavLink to={`/profile/${props.usersId}`} >{props.login}</NavLink>
           
            <img src={props.usersPhoto != null ? props.usersPhoto : userPhoto} alt='userPhoto'></img>
          </div>
          : <NavLink to={'/login'} >Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;