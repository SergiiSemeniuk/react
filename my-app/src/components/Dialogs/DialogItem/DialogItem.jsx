import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={c.dialog}>
      <NavLink to={`/dialogs/${props.linkId}`} activeClassName={c.active}>
        <div className={c.item}>
          <img src={props.ava} alt="ava" />
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}


export default DialogItem;