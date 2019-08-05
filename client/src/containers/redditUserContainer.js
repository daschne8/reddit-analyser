import React,{Component} from 'react';
import RedditUserInput from '../components/redditUserInput';
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';

import TextAnalysis from './textAnalysis'

class RedditUserContainer extends Component{
  render(){
    return(
      <div className="user-subreddit">
        <RedditUserInput fetchComments={user => this.props.fetchComments(user)}/>
      </div>
    )
  }
}


const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (user) => dispatch(fetchComments(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(RedditUserContainer);
//export default RedditUserContainer
