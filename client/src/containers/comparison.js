import React, {Component} from 'react';
import {connect} from 'react-redux'
import CompareGraph from '../components/compareGraph'
import {fetchNames,fetchComments} from '../actions/redditActions';
import CompareContainer from './compareContainer'



class Comparison extends Component{

  componentWillMount(){
    this.props.fetchNames()
  }

  render(){
    return(
      <div>
        <div className="comparison">
        <CompareContainer names={this.props.names} which='b'/>
        <CompareContainer names={this.props.names} which='c'/>
        </div>
        {!!this.props.comments['b'].keywords && !!this.props.comments['c'].keywords ? <CompareGraph first={this.props.comments['b'].keywords} second={this.props.comments['c'].keywords}/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  names: reddit.names
})

const mapDispatchToProps = dispatch => ({
  fetchNames: () => dispatch(fetchNames())
})


export default connect(mapStateToProps,mapDispatchToProps)(Comparison)
