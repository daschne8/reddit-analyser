import React,{Component} from 'react';

class RedditUserInput extends Component{
  state = {
    query: '',
  }

  handleOnChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleOnClick = event => {
    event.preventDefault()
    let query = this.state.query
    if (event.target.value === 'subreddit') {
      query = "(r)" + query
    }
    this.props.fetchComments(query, 'a')
    this.setState({query: ''})
  }
  render(){
    return(
      <div className="user-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.query} onChange={event => this.handleOnChange(event)}/>
          <br></br>
          <button value='user' onClick={event => this.handleOnClick(event)}>User</button>
          <button value='subreddit' onClick={event => this.handleOnClick(event)}>Subreddit</button>
        </form>
      </div>
    )
  }
}

export default (RedditUserInput);
