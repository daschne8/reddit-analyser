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
      <header className="page">Reddit Analyser</header>
      <p>Enter reddit user name or subbreddit</p>
      <RedditUserContainer  />
      <p className="left">This app takes either a snapshot of comments from a
      subreddit or a users most recent comments and sends them to the IBM tone
      analyser. This Generates a list of keywords/phrases and the emotions
      associated with them.</p>
      </div>
    )
  }
}
export default (Home)
