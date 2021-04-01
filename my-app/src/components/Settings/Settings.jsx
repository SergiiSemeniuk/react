import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { logOutUser } from './../../redux/authReducer'
import c from './Settings.module.css';

const Settings = (props) => {

  return (
    <div>     
      <h2>Settings</h2> 
      <div>
        <button onClick={() => props.logOutUser()}>Logout</button>
      </div>
    </div>

  )
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { logOutUser })( withAuthRedirect(Settings));