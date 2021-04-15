import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = (props) => {
    return <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to={`/profile/${props.usersId}`} activeClassName={style.activeLink}>Profile</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/users' activeClassName={style.activeLink}>Find Friends</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/friends' activeClassName={style.activeLink}>My Friends</NavLink>
    </div>
  
  </nav>
}


let mapStateToProps = (state) => {
  return {
      usersId: state.auth.usersId
  }
}


export default connect(mapStateToProps, {}) (Navbar);