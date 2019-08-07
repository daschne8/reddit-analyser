import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/home'
import Comparison from './containers/comparison'
import AnalysisContainer from './containers/analysisContainer'



const App = () => {
  return (
      <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <div className="app-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/analysis" component={AnalysisContainer} />
          <Route exact path="/comparison" component={Comparison} />
        </div>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
