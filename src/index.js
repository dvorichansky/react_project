import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 10 },
  { id: 2, message: 'It is my first post', likesCount: 20 }
];

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Leha' },
  { id: 3, name: 'lesya' },
  { id: 3, name: 'Bogdan' }
];

let messagesData = [
  { id: 1, message: 'helo' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yoyyoyooy' }
];

ReactDOM.render(<App
  postsData={postsData}
  dialogsData={dialogsData}
  messagesData={messagesData}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
