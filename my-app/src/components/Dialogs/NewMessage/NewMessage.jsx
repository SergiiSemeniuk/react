import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLength, required } from '../../../utils/validator';
import { FormControl } from '../../common/FormsControls/FormsControls';
import style from './NewMessage.module.css';

const maxLength30 = maxLength(30);

const NewMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.messageArea}>
        <Field component={FormControl}  name='newMessageBody' placeholder='Enter your message' fieldType='textarea'
        validate={[required, maxLength30]} />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>

    

  )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('dialogAddMessageForm'));

export default reduxForm({ form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit })(NewMessageForm);