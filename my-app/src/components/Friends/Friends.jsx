import React from 'react';
import { connect } from 'react-redux';
import Friend from './Frend/Friend';
import style from './Friends.module.css';

const Friends = (props) => {
  // let friendsElements = props.friends.map(el => <Friend name={el.name} ava={el.ava} />);

  return (
    <div className={style.friendsBloc}>
      <div>Friends</div> 
      <div className={style.friendBloc}></div>
    </div>
  )
}


let mapStateToProps = (state) => {
  return {
    friends: state.siteBar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Friends);