import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Login from './login';


class LoginContainer extends React.Component {

    componentDidUpdate(prevProps){

    }
   render(){
       debugger
    return <Login /> 
   }
   
}

let mapStateToProps = (state) => {
    return {
       
    }
}

export default connect(mapStateToProps, {})(withRouter(LoginContainer));