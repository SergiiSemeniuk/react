import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserId } from '../../redux/authReducer';
import LoginForm from './LoginForm';


const Login = (props) => {
    
   let onSubmit = (formData)=> {
  
    props.getAuthUserId(formData);
   }
  
    return (
        <div>
        <h2>Login</h2>
        <LoginForm onSubmit={onSubmit} /> 
        </div>
    )
   }

   let mapStateToProps = (state) => ({
    
  });


export default connect(mapStateToProps, {getAuthUserId})(Login);

