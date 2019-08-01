import React, {Component} from 'react';

export default class TextAnalysis extends Component{
  render(){
    console.log('props',this.props);
    let analysis = ''
    if (this.props.comments.keywords) {
    analysis = this.props.comments.keywords.map(word =>
    <div className="keyword">
    <h3>{word.text}</h3>
    <h4>sentiment: {word.sentiment.label}</h4>
    <h4>{word.sentiment.score}</h4>
    <table className="emotion-table">
      <tr><th>anger:</th><td>{word.emotion.anger}</td></tr>
      <tr><th>disgust:</th><td>{word.emotion.disgust}</td></tr>
      <tr><th>fear:</th><td>{word.emotion.fear}</td></tr>
      <tr><th>joy:</th><td>{word.emotion.joy}</td></tr>
      <tr><th>sadness:</th><td>{word.emotion.sadness}</td></tr>
    </table>
    </div>)
    }


    return(
      <div className='text-analysis'>
        {analysis}
      </div>
    )
  }
}
