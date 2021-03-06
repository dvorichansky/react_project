import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs
            dialogsData={props.dialogsData}
            messagesData={props.messagesData}
          />} />
          <Route path='/profile' render={() => <Profile
            postsData={props.postsData}
          />} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
