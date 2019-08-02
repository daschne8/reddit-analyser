import React, {Component} from 'react';
import RedditUserContainer from '../containers/redditUserContainer'


const Home = () => {
  return(
    <div className="home-body" >
    <header>Home</header>
    <p>this is home</p>
      <RedditUserContainer  />
    </div>
  )
}
export default Home
