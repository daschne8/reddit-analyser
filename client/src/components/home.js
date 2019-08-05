import React, {Component} from 'react';
import RedditUserContainer from '../containers/redditUserContainer'
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';



class Home extends Component {
  render(){
    return(
      <div className="home-body" >
      <header>Reddit Analyser</header>
      <p>Enter reddit user name or subbreddit</p>
        <RedditUserContainer  />
      </div>
    )
  }
}
export default (Home)
