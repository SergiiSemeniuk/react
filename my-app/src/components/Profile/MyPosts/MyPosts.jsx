import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { connect } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';
import MyPostsForm from './MyPostsForm';



const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id} />);

 

  let onAddNewPost = (values) => { 
     
    props.addNewPost(values.newMyPost);   
  };
  
  
  return (
    <div className={c.postsBloc}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <MyPostsForm onSubmit={onAddNewPost} />        
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


export default connect(mapStateToProps, {addNewPost})(MyPosts);