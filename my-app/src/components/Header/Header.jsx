import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <img src='https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'></img>
      <div className={c.logoName}>
        ReaSoN
    </div>
    </header>
  )
}

export default Header;