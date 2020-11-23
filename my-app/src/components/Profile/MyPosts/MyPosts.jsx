import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} />)

  return (
    <div className={c.postsBloc}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new post</button>
        </div>
      </div>
      <div className={c.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;