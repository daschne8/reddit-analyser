import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/analysis">Analysis</Link>
        <Link to="/cloud">Cloud</Link>
      </div>
    )
  }
}
