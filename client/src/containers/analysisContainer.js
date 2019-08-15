import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'


class AnalysisContainer extends Component{
  render(){
    return(
      <div className="analysis-holder">
        {!this.props.comments.keywords ? <Redirect to="/" /> : null}
        {this.props.comments.keywords ? <TextAnalysis comments={this.props.comments}/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments.a,
})


export default connect(mapStateToProps)(AnalysisContainer)
