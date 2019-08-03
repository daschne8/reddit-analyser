import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';


class Analysis extends Component{
  render(){
    return(
      <div className="analysis-holder">
        <header>ANALYSIS</header>
        <p>Analyzing ...</p>
        {this.props.comments.keywords ? <TextAnalysis comments={this.props.comments}/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchComments: (user) => dispatch(fetchComments(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(Analysis)
