import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
  <div>
    <div className={c.item}>
      <img alt='my ava' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTop3kx-V5ughLRERDUZNsZVhvbF2oxNDD6Q&usqp=CAU"></img>
      {props.message}
    </div>
    <div>
  <span className={c.like}>Like {props.likeCount}</span>
    </div>
  </div>
  )
}

export default Post;