import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'
import {connect} from 'react-redux'
import {fetchComments} from '../actions/redditActions';
import CompareGraph from '../components/compareGraph'


class CompareContainer extends Component{

  handleOnChange = event =>{
    console.log('value',event.target.value);
    if (event.target.value === '') {
      console.log('no value');
    }else {
      this.props.fetchComments(event.target.value, this.props.which)
    }
  }

  render(){
    let which = this.props.which
    return(
      <div>
      <select onChange={event => this.handleOnChange(event)}>
        <option value=''></option>
        {this.props.names.map((name,idx) => <option key={idx} value={name} >{name}</option>)}
      </select>
      {!!this.props.comments[which].keywords ? <TextAnalysis comments={this.props.comments[which]}/> : null }
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (user,which) => dispatch(fetchComments(user,which))
})



export default connect(mapStateToProps,mapDispatchToProps)(CompareContainer)
