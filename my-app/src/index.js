
import state, { subscribe } from './redux/state';

import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, onTextChange, changeNewMessageText, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addMessage={addMessage} onTextChange={onTextChange} changeNewMessageText={changeNewMessageText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);


reportWebVitals();