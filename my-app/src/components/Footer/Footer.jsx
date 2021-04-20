import React from 'react';
import Clock from './Clock';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}> 
    <div className={style.clock}>     
      <Clock />
      </div>
      <div className={style.author}>
       <div> © by SEM 2021</div>
        </div>      
    </footer>
  )
}

export default Footer;