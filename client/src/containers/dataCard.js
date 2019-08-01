import React, {Component} from 'react';

export default class DataCard extends Component{
  render(){
    return(
      <div nameClass="title">
        <h1>{this.props.title}</h1>
      </div>
      
    )
  }
}
