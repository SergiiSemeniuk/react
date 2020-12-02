import React from 'react';
import c from './Friend.module.css';

const Friend = (props) => {

      return (
    <div className={c.friends}>
      <img src={props.ava} alt="ava"/>
      <div>{props.name}</div>
    </div>
    )
}

export default Friend;