import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import c from './Dialogs.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} linkId={el.id} ava={el.ava} />);
  let messagesElements = props.state.messages.map(el => <Message message={el.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={c.messages}>
        {messagesElements}
        <NewMessage 
        newMessageText={props.state.newMessageText} 
        dispatch={props.dispatch}/>
      </div>
      
    </div>
  )
}

export default Dialogs;