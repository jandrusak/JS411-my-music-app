import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import React from 'react';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <NavBar/>
      {loggedIn ? <Dashboard/>:<Login setLoggedIn={setLoggedIn}/>}
    </div>
  );
}

export default App;
