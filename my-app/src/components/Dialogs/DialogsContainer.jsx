import React from 'react';
import Dialogs from './Dialogs';
import { addMessage, changeNewMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(addMessageActionCreator());
//     },
//     changeNewMessageText: (text) => {
//       dispatch(changeNewMessageTextActionCreator(text));
//     }
//   }
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, changeNewMessageText})(Dialogs);

export default DialogsContainer;