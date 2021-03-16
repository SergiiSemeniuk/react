import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setAuthUserPhoto } from './../../redux/authReducer';
import { setUsersProfile } from '../../redux/profileReducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);

        usersAPI.getProfile(id).then(data => {
          this.props.setAuthUserPhoto(data.photos.small);
          this.props.setUsersProfile(data);

        })
      }
    })

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
    usersPhoto: state.auth.usersPhoto
  }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserPhoto, setUsersProfile })(HeaderContainer);