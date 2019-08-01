import React, {Component} from 'react'
import DataCloud from '../dataCloud'

export default class CommentsList extends Component{
  render(){
    //console.log(this.props.comments);
    return(
      <div>
        <DataCloud keywords={this.props.comments.keywords} />
      </div>
    )
  }
}
