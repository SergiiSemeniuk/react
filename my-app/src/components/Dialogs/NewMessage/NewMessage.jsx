import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './NewMessage.module.css';



const NewMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.messageArea}>
        <Field component='textarea'  name='newMessageBody' placeholder='Enter your message' />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>

    

  )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(NewMessageForm);