import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setTotalUsersCount, requestUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader.jsx';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount,
        getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/users-selectors';
import { getIsAuth } from './../../redux/auth-selectors';
    


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {       
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}



export default compose(
    connect(mapStateToProps, { follow, unfollow, setTotalUsersCount, requestUsers })
    )(UsersContainer);

