import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/ColourComponent/ColourComponent';
import ColourComponent from './components/ColourComponent/ColourComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ColourComponent hexCode="#000000" name="Black" background="#000000"/>
    </div>
  );
}

export default App;
