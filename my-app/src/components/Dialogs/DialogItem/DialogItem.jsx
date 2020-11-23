import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './DialogItem.module.css';

const DialogItem = (props) => {
  return(
    <div className={c.dialog}>
          <NavLink to={`/dialogs/${props.linkId}`} activeClassName={c.active}>{props.name}</NavLink> 
          </div>
  )
}


export default DialogItem;