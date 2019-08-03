import React,{Component} from 'react';

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
    console.log('user props log',this.props);
    this.setState({user: ''})
  }
  render(){
    return(
      <div className="user-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.user} onChange={event => this.handleOnChange(event)}/>
          <input type='submit' value='Analyze User' />
        </form>
      </div>
    )
  }
}

export default RedditUserInput;
