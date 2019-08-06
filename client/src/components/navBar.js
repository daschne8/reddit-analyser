import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'



class NavBar extends Component{

  handleOnClick = event => {
    this.props.clearComments()
  }

  render(){
    return(
      <div className="nav-bar">
        <NavLink to="/" onClick={event => this.handleOnClick(event)}>Home</NavLink>
        <NavLink to="/analysis">Analysis</NavLink>
        <NavLink to="/cloud">Cloud</NavLink>
      </div>
    )
  }
}

const mapStateToProps = ({reddit}) => ({
  comments: reddit.comments,
  prevComments: reddit.prevComments
})

const mapDispatchToProps = dispatch => {
  return {
    clearComments: () => dispatch({type: 'CLEAR_COMMENTS'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
