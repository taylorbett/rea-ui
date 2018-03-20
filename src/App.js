import React, { Component } from 'react';
import './App.css';

import Panel from './core/Panel';
import Listing from './core/Listing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REA UI Dev Test</h1>
        </header>
        <div className="main">
          <div className="columns">
            <div className="column">
              <Panel title={"Results"}>
                <Listing />
                <Listing />
                <Listing />
              </Panel>
            </div>
            <div className="column">
              <Panel title={"Saved Properties"}>
                <Listing />
              </Panel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
