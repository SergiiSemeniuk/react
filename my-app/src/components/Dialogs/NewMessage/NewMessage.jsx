import React from 'react';
import c from './NewMessage.module.css';



const NewMessage = (props) => {


  let onAddMessage = () => {
    props.addMessage();
  }; 

  let onChangeNewMessageText = (e) => {
    let text = e.target.value;
    props.changeNewMessageText(text);
  }

  return (
    <div className={c.messageArea}>
      <textarea onChange={onChangeNewMessageText} value={props.newMessageText} ></textarea>
      <div>
        <button onClick={onAddMessage}>Send message</button>
      </div>
    </div>


  )
}

export default NewMessage;