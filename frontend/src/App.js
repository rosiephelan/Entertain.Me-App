import React from 'react';

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Containers
import HomePage from './Containers/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <HomePage />
          </Router>
      </div>
    );
  }
}

export default App;
