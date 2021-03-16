import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile } from '../../redux/profileReducer';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;

    usersAPI.getProfile(userId).then(data => {
      this.props.setUsersProfile(data);
    });
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

export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer));