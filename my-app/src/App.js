import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



function App(props) {
 
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.siteBar} />
      <div className='app-wrapper-content'>      
        <Route path='/dialogs' render={() =>
          <Dialogs
            state={props.state.dialogsPage}
            dispatch={props.dispatch}/>} />
        <Route path='/profile' render={() =>
          <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch}
            />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
      <Footer />
    </div>
  );
}


export default App;
