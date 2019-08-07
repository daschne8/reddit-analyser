import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';
import {Redirect} from 'react-router'
import TextAnalysis from './textAnalysis'
import CompareGraph from '../components/compareGraph'


class Comparison extends Component{
  render(){
    return(
      <div>
        <div className="comparison">
          {!this.props.prevComments.keywords ? <Redirect to="/" /> : null }
          {!this.props.comments.keywords  ? <Redirect to="/" /> : null }
          <TextAnalysis comments={this.props.comments} />
          <TextAnalysis comments={this.props.prevComments} />
        </div>
        <CompareGraph first={this.props.comments.keywords} second={this.props.prevComments.keywords} />
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  prevComments: reddit.prevComments,
  error: reddit.error
})


export default connect(mapStateToProps)(Comparison)
