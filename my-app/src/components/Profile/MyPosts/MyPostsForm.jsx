import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLength, required } from '../../../utils/validator';
import { FormControl } from '../../common/FormsControls/FormsControls';

const maxLength30 = maxLength(30);
const MyPostsForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={FormControl} name='newMyPost' placeholder={'Write your post'} fieldType='textarea'
        validate={[required, maxLength30]} />
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </form>
  )
}
const afterSubmit = (result, dispatch) =>
  dispatch(reset('profilePostForm'));

export default reduxForm({form: 'profilePostForm', onSubmitSuccess: afterSubmit})(MyPostsForm);