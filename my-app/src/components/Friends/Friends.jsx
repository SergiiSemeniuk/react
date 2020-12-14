import React from 'react';
import Friend from './Frend/Friend';
import c from './Friends.module.css';

const Friends = (props) => {
  let friendsElements = props.friends.map(el => <Friend name={el.name} ava={el.ava} />);

  return (
    <div className={c.friendsBloc}>
      <div>Friends</div> 
      <div className={c.friendBloc}>{friendsElements}</div>
    </div>
  )
}

export default Friends;