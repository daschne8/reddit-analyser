import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/home'
import Cloud from './components/cloud'
import Analysis from './components/analysis'


const App = () => {
  return (
      <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <div className="app-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/cloud" component={Cloud} />
        </div>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
