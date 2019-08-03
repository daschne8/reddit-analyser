import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';


class Analysis extends Component{
  render(){
    let analysis
    this.props.comments.keywords ? analysis =  this.props.comments.name :  analysis = "Analyzing";
    return(
      <div className="analysis-holder">
        <header>{analysis}</header>
        {this.props.comments.keywords ? <TextAnalysis comments={this.props.comments}/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments
})



export default connect(mapStateToProps)(Analysis)
