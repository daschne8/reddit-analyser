import React, {Component} from 'react';

export default class TextAnalysis extends Component{
  render(){
    console.log('props',this.props);
    let analysis = ''
    if (this.props.comments.keywords) {
    analysis = this.props.comments.keywords.map(word =>
    <div className="emotion-holder-div">
    <table className="emotion-table">
    <tbody>
      <tr><th colspan="2"><span style={{size: 40, color: 'blue'}}>{word.text}</span></th></tr>
      <tr><th>Sentiment:</th><td>{word.sentiment.score}</td></tr>
      <tr><th>Anger:</th><td>{word.emotion.anger}</td></tr>
      <tr><th>Disgust:</th><td>{word.emotion.disgust}</td></tr>
      <tr><th>Fear:</th><td>{word.emotion.fear}</td></tr>
      <tr><th>Joy:</th><td>{word.emotion.joy}</td></tr>
      <tr><th>Sadness:</th><td>{word.emotion.sadness}</td></tr>
    </tbody>
    </table>
    <br></br>
    </div>)
    }


    return(
      <div className='text-analysis'>
        {analysis}
      </div>
    )
  }
}
