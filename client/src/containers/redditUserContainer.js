import React,{Component} from 'react';
import CommentsList from '../components/commentsList';
import RedditUserInput from '../components/redditUserInput';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/redditActions';




class RedditUserContainer extends Component{
  render(){
    return(
      <div>
        <RedditUserInput fetchComments={user => this.props.fetchComments(user)}/>
        <CommentsList comments={this.props.comments}/>
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
