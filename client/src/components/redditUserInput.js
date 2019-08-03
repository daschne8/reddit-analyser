import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

class RedditUserInput extends Component{
  state = {
    user: ''
  }

  handleOnChange = event => {
    this.setState({
      user: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.fetchComments(this.state.user)
    this.setState({user: ''})
    this.props.history.push('/analysis')
  }
  render(){
    return(
      <div className="user-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.user} onChange={event => this.handleOnChange(event)}/>
          <input type='submit' value='Analyze' />
        </form>
      </div>
    )
  }
}

export default withRouter(RedditUserInput);
