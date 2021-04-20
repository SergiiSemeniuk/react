import React from 'react';
import UserPhoto from '../../../common/UserPhoto/UserPhoto';
import style from './Post.module.css';
import reactLike from '../../../../assets/images/react-logo.png'

const Post = (props) => {

  const upLike = () => {
    return props.setUserPostLike(props.id);
  }
  
  return (
    <div key={props.id}>
      <div className={style.item}>
        <UserPhoto />
        {props.message}
      </div>
      <div className={style.likeBloc}>
        <div className={style.like} >Like {props.likeCount}</div>
        <img src={reactLike} className={style.likeIcon} onClick={() => upLike()} />
      </div>
    </div>
  )
}

export default Post;