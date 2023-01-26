import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const obj = {
    a: 1,
    b: 2,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {obj.a} and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener  oreferrer noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
