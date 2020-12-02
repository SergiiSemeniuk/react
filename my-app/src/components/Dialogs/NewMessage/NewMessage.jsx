import React from 'react';
import c from './NewMessage.module.css';


const NewMessage = (props) => {

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }; 

  let changeNewMessageText = () => {
    let text = newMessageElement.current.value;
    props.changeNewMessageText (text);
  }

  return (
    <div className={c.messageArea}>
      <textarea ref={newMessageElement} onChange={changeNewMessageText} value={props.newMessageText} ></textarea>
      <div>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>


  )
}

export default NewMessage;