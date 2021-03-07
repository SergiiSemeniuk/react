import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {
 
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>      
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
      <Footer />
    </div>
  );
}


export default App;
