import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import NewMessageForm from './NewMessage/NewMessage';


const Dialogs = (props) => {


  let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} key={el.id} linkId={el.id} ava={el.ava} />);
  let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} key={el.id} />);
  
  let onSubmit = (values)=> {  
    props.addMessage(values.newMessageBody);
   }
 

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={style.messages}>
        {messagesElements}
        <NewMessageForm onSubmit={onSubmit}/>
      </div>
      
    </div>
  )
}

export default Dialogs;