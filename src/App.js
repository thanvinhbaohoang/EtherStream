import './App.css';
import NavBar from './components/Navbar/NavBar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import { LogIn } from './components/LogIn';
import { MusicPlayer } from './components/MusicPlayer';
import UnauthorizedPage from './components/UnauthorizedPage';
import StreamAuth from './components/StreamAuth';
import React, { useEffect } from 'react';
import { Component } from 'react';


class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { 
      isStreamAuthenticated: false,
    };
  }



  componentDidMount() {
    this.timerID = setInterval(
      () => {
          console.log('App.js: AUTH INTERVAL: ', window.isStreamAuthenticated)
          this.setState({ isStreamAuthenticated: window.isStreamAuthenticated })
      }, 1000
    );
  }

  render(){
  return (
    <div className="App">

        <BrowserRouter>
          <NavBar/>
          <Routes>
            {/* <Route exact path="/" element={<Home />}></Route> */}
            {/* <Route exact path="/login" element={<LogIn />}></Route>
            <Route exact path="/unauthorizedpage" element={<UnauthorizedPage />}></Route> */}
          </Routes>
          <MusicPlayer/>
        </BrowserRouter>    
        {this.state.isStreamAuthenticated ? <Home/> : <UnauthorizedPage/>}   
    </div>
  );
          }   
}

export default App;
