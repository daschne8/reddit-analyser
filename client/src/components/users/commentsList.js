import React, {Component} from 'react';

export default class CommentsList extends Component{
  render(){
    console.log(this.props);
    const commentList = this.props.comments.map(com => <li>{com.data.body}</li>)
    return(
      <div>
        {commentList}
      </div>
    )
  }
}
