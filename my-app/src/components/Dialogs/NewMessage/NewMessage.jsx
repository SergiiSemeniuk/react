import { addMessageActionCreator, changeNewMessageTextActionCreator } from '../../../redux/dialogsReducer';
import React from 'react';
import c from './NewMessage.module.css';



const NewMessage = (props) => {


  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }; 

  let changeNewMessageText = (e) => {
    let text = e.target.value;
    props.dispatch(changeNewMessageTextActionCreator(text));
  }

  return (
    <div className={c.messageArea}>
      <textarea onChange={changeNewMessageText} value={props.newMessageText} ></textarea>
      <div>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>


  )
}

export default NewMessage;