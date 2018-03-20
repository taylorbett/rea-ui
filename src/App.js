import React, { Component } from 'react';
import './App.css';

import Listing from './core/Listing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REA UI Dev Test</h1>
        </header>
        <div className="main">
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    );
  }
}

export default App;
