import React, {Component} from 'react';
import DataCloud from './dataCloud';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchComments} from '../actions/redditActions';


class Cloud extends Component{
  render(){
    return(
      <div className="cloud-holder">
        <header>Cloud</header>
        <p>We're in the cloud</p>
        {this.props.comments.keywords ? <DataCloud keywords={this.props.comments.keywords}/> : null}
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


export default connect(mapStateToProps,mapDispatchToProps)(Cloud)
