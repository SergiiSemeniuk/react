import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import c from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} />);

 

  let onAddNewPost = () => {    
    props.addNewPost();   
  };
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };


  return (
    <div className={c.postsBloc}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddNewPost}>Add new post</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;