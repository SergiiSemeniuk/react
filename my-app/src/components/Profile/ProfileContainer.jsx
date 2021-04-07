import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { compose } from 'redux';
import { getIsAuth } from '../../redux/auth-selectors';


class ProfileContainer extends React.Component {

  componentDidMount() {

    if (this.props.match.params.userId == 'null' && this.props.authorizedUserId == null) {
      this.props.history.push('/login');

    } else {
      let userId = this.props.match.params.userId || this.props.authorizedUserId;

      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.componentDidMount();
    }

  }

  render() {
    if (!this.props.match.params.userId && !this.props.isAuth) {

      return <Redirect to='login' />
    }
    return (
      <div >
        <Profile {...this.props} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.userStatus,
  authorizedUserId: state.auth.usersId,
  isAuth: getIsAuth(state)
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer)