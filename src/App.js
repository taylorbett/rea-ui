import React from 'react';
import './App.css';

import Results from './modules/Results';
import SavedProperties from './modules/SavedProperties';

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REA UI Dev Test</h1>
        </header>
        <div className="main">
          <div className="columns">
            <div className="column">
              <Results />
            </div>
            <div className="column">
              <SavedProperties />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
