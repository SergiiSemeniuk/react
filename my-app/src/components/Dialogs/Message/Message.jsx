import React from 'react';
import c from './Message.module.css';



const Message =   (props) => {
 

  return (
    <div className={c.message} >
      <img src='https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' alt="ava"/>
      {props.message}
    </div>
  )
}




export default Message;