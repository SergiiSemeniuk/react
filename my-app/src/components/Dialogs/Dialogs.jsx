import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import c from './Dialogs.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} linkId={el.id} ava={el.ava} />);
  let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={c.messages}>
        {messagesElements}
        <NewMessage 
        newMessageText={props.dialogsPage.newMessageText} 
        addMessage={props.addMessage} changeNewMessageText={props.changeNewMessageText} />
      </div>
      
    </div>
  )
}

export default Dialogs;