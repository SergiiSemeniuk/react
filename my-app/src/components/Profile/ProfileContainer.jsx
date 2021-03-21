import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
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

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)