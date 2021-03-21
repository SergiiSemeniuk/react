import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} key={el.id} linkId={el.id} ava={el.ava} />);
  let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} key={el.id} />);

 

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={style.messages}>
        {messagesElements}
        <NewMessage 
        newMessageText={props.dialogsPage.newMessageText} 
        addMessage={props.addMessage} changeNewMessageText={props.changeNewMessageText} />
      </div>
      
    </div>
  )
}

export default Dialogs;