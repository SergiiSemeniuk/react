import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css'
import userPhoto from '../../acces/images/user-icon.png'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setUsers(response.data.items);
    });
  }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)/100;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        return (
        
            <div> 
                <div>
                    {pages.map(page => {
                         return <span className={this.props.currentPage === page && style.selectedPage} 
                         onClick={(e) => {this.onPageChanged(page)}}>
                             {page}
                             </span>})}
                </div>               
                {
                    this.props.users.map(u => <div key={u.id} className={style.usersPage} >
                        <div className={style.userProfile} >
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.usersAvatar} />
                            </div>
                            <div className={style.followButton} >
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }} >UnFollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
    
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
}



export default Users;