import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import c from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} linkId={el.id} />);
  let messagesElements = props.messages.map(el => <Message message={el.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={c.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;