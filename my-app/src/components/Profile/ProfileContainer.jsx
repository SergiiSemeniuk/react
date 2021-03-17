import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile, getUserProfile } from '../../redux/profileReducer';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
  }

  render() {
    return (
      <div >
        <Profile {...this.props} profile={this.props.profile} />

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUsersProfile, getUserProfile })(withRouter(ProfileContainer));