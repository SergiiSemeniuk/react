import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/authReducer';
import LoginForm from './LoginForm';


const Login = (props) => {

  let onSubmit = (formData) => {  
    props.login(formData);
  }
  if (props.isAuth) return <Redirect to='/profile' />
  return (
    <div>
      <h2>Login</h2>
      <LoginForm isFetching={props.isFetching} onSubmit={onSubmit} captcha={props.captcha} isCaptcha={props.isCaptcha} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
  isCaptcha: state.auth.isCaptcha,
  isFetching: state.auth.isFetching
});


export default connect(mapStateToProps, { login })(Login);

