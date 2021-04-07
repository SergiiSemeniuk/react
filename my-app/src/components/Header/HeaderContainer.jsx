import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logOutUser } from './../../redux/authReducer';



class HeaderContainer extends React.Component {
  componentDidMount() {
    
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
    profile: state.auth.profile,
    usersId: state.auth.usersId
  }
}

export default connect(mapStateToProps, {logOutUser })(HeaderContainer);