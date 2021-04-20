import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { logOutUser } from './../../redux/authReducer'
import style from './Settings.module.css';

const Settings = (props) => {

  return (
    <div className={style.settingBloc}>     
      <h2>Settings</h2> 
      <div>
        Change photo
      </div>
      <div className={style.exitBloc}>
        Exit -- 
        <button onClick={() => props.logOutUser()}>Logout</button>
      </div>
    </div>

  )
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { logOutUser })( withAuthRedirect(Settings));