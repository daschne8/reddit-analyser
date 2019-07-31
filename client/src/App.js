import React from 'react';
import './App.css';

import RedditUserContainer from './containers/redditUserContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RedditUserContainer fetchComments={user => this.props.fetchComments(user)} />
    </div>
  );
}

export default App;
