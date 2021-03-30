import React from 'react';
import { Field, reduxForm } from 'redux-form';


const MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMyPost' placeholder={'Write your post'} />
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </form>
  )
}


export default reduxForm({form: 'profilePostForm'})(MyPostsForm);