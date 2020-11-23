import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
    return <nav className={c.nav}>
    <div className={c.item}>
      <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
    </div>
    <div className={`${c.item}`}>
      <NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink>
    </div>
    <div className={c.item}>
      <NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;