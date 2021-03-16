import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, onPostChange } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addNewPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     onPostChange: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps, {addNewPost, onPostChange})(MyPosts);

export default MyPostsContainer;