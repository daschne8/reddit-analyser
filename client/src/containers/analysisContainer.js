import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';
import {Redirect} from 'react-router'


class AnalysisContainer extends Component{
  render(){
    let analysis = ''
    return(
      <div className="analysis-holder">
        {!this.props.comments.keywords ? <Redirect to="/" /> : null}
        {this.props.comments.keywords ? <TextAnalysis comments={this.props.comments}/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  error: reddit.error,
})


export default connect(mapStateToProps)(AnalysisContainer)
