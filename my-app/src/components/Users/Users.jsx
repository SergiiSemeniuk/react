import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user-icon.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 100;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && style.selectedPage}
                        onClick={(e) => { props.onPageChanged(page) }}>
                        {page}
                    </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={style.usersPage} >
                    <div className={style.userProfile} >
                        <div>
                            <NavLink to={`/profile/${u.id}`} >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.usersAvatar} />
                            </NavLink>
                        </div>
                        <div className={style.followButton} >
                            {u.followed
                                ? <button onClick={() => {                                   
                                    usersAPI.unfollowUser(u.id) .then(data => {
                                            if (data.resultCode === 0) { 
                                                                                            
                                                props.unfollow(u.id);
                                            }
                                        });                                   

                                }} >UnFollow</button>
                                : <button onClick={() => {                                                                      
                                      usersAPI.followUser(u.id) .then(data => { 
                                                                                  
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });                                  

                                }} >Follow</button>}

                        </div>
                    </div>
                    <div className={style.userInfo} >
                        <div>
                            <div className={style.userName} > {u.name} </div>
                            <div className={style.userStatus} > {u.status} </div>
                        </div>
                        <div>
                            <div> {"u.location.country"} </div>
                            <div> {"u.location.city"} </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users;