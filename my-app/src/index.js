import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how a You?', likesCount: 20 },
  { id: 2, message: 'It\'s my first post', likesCount: 3 }
] 

let dialogs = [
  { id: 1, name: 'Den' },
  { id: 2, name: 'Doc' },
  { id: 3, name: 'Archi' },
  { id: 4, name: 'Rus' },
  { id: 5, name: 'Vova' },
];

let messages = [
  { id: 1, message: 'Hi!!!' },
  { id: 2, message: 'How are You?' },
  { id: 3, message: 'Yoyoyo :)' },
  { id: 4, message: ';-)' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
