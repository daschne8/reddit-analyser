import React,{Component} from 'react';
import RedditUserInput from '../components/redditUserInput';
import {connect} from 'react-redux'
import {fetchComments} from '../actions/redditActions';
import {Redirect} from 'react-router'
import FlashMessage from 'react-flash-message'


class RedditUserContainer extends Component{
  render(){
    return(
      <div className="user-subreddit">
        {this.props.error ? <div className='flash' ><FlashMessage duration={5000}><strong>Invalid Query</strong></FlashMessage></div> : null}
        <RedditUserInput fetchComments={(user,which) => this.props.fetchComments(user,which)}/>
        {this.props.comments.keywords ? <Redirect to="/analysis" /> : null}
      </div>
    )
  }
}


const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments.a,
  error: reddit.error,
  errorMessage: reddit.errorMessage
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (user,which) => dispatch(fetchComments(user,which))
})


export default connect(mapStateToProps,mapDispatchToProps)(RedditUserContainer);
