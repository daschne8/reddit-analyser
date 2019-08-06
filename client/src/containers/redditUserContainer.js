import React,{Component} from 'react';
import RedditUserInput from '../components/redditUserInput';
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';
import {Redirect} from 'react-router'
import FlashMessage from 'react-flash-message'

import TextAnalysis from './textAnalysis'

class RedditUserContainer extends Component{
  render(){
    return(
      <div className="user-subreddit">
        {this.props.error ? <div className='flash' ><FlashMessage duration={5000}><strong>Invalid Query</strong></FlashMessage></div> : null}
        <RedditUserInput fetchComments={user => this.props.fetchComments(user)}/>
        {this.props.comments.keywords ? <Redirect to="/analysis" /> : null}
      </div>
    )
  }
}


const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  error: reddit.error,
  errorMessage: reddit.errorMessage
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (user) => dispatch(fetchComments(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(RedditUserContainer);
