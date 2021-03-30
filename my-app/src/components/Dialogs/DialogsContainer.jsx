import React from 'react';
import Dialogs from './Dialogs';
import { addMessage} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,

  }
}


export default compose(
  connect(mapStateToProps, { addMessage}),
  withAuthRedirect
)(Dialogs);
