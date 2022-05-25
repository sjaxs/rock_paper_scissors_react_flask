import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/sign_up'
import LogInForm from './components/login'
import LeaderBoard from './components/leaderboard'


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LogInForm />} />
      <Route path="sign_up" element={<SignUpForm />} />
      <Route path="leaderboard" element={<LeaderBoard />} />
    </Routes>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>The current time is {currentTime}.</p>
    //   </header>
    // </div>
  );
}

export default App;
