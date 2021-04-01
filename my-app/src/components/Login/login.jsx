import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getAuthUserId } from '../../redux/authReducer';
import LoginForm from './LoginForm';


const Login = (props) => {

  let onSubmit = (formData) => {
    props.getAuthUserId(formData);
  }
  if (props.isAuth) return <Redirect to='/profile' />
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, { getAuthUserId })(Login);

