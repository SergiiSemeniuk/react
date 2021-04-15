import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus, getIsFollowedUser } from '../../redux/profileReducer';
import { compose } from 'redux';
import { getIsAuth } from '../../redux/auth-selectors';
import { follow, unfollow} from '../../redux/usersReducer';
import { getFollowingInProgress, getUsers } from '../../redux/users-selectors';


class ProfileContainer extends React.Component {

  componentDidMount() {

    if (this.props.match.params.userId == 'null' && this.props.authorizedUserId == null) {
      this.props.history.push('/login');

    } else {
      let userId = this.props.match.params.userId || this.props.authorizedUserId;
      this.props.getIsFollowedUser(userId);
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
      

    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let userId = this.props.match.params.userId || this.props.authorizedUserId;
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
      this.props.getIsFollowedUser(userId);
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
  isAuth: getIsAuth(state),
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  isFollowed: state.profilePage.isFollowed

});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, getIsFollowedUser, follow, unfollow }),
  withRouter
)(ProfileContainer)