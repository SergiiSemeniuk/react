import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, onPageChanged, totalUsersCount,
    pageSize, users, isAuth, followingInProgress, unfollow, follow }) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    users.map(u => <User key={u.id} user={u} isAuth={isAuth}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow} />)
                }
            </div>
        </div>
    )
}

export default Users;