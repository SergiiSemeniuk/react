import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData } from './../../redux/authReducer';



class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    usersPhoto: state.auth.usersPhoto,
    usersId: state.auth.usersId
  }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);