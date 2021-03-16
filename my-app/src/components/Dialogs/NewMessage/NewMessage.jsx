import React from 'react';
import style from './NewMessage.module.css';



const NewMessage = (props) => {


  let onAddMessage = () => {
    props.addMessage();
  }; 

  let onChangeNewMessageText = (e) => {
    let text = e.target.value;
    props.changeNewMessageText(text);
  }

  return (
    <div className={style.messageArea}>
      <textarea onChange={onChangeNewMessageText} value={props.newMessageText} ></textarea>
      <div>
        <button onClick={onAddMessage}>Send message</button>
      </div>
    </div>


  )
}

export default NewMessage;