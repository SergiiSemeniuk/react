import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} />);

  let newPostElement = React.createRef();

  let addNewPost = () => {    
    props.addPost();   
  };
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onTextChange(text);
  };


  return (
    <div className={c.postsBloc}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add new post</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;