import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hi There</h2>
        <p>and Welcome.</p>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}

export default App;
