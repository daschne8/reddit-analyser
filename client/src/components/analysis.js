import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';
import {Redirect} from 'react-router'


class Analysis extends Component{
  render(){
    let analysis = ''
    !this.props.error ? analysis =  this.props.comments.name :  analysis = "Analyzing";
    return(
      <div className="analysis-holder">
        <header className="page">{analysis}</header>
        {this.props.comments.keywords ? <TextAnalysis comments={this.props.comments}/> : null}
        {!this.props.comments.keywords ? <Redirect to="/" /> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  error: reddit.error
})



export default connect(mapStateToProps)(Analysis)
