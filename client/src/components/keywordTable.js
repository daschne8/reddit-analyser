import React,{Component} from 'react'

export default class KeywordTable extends Component{
  render(){
    return(
      <table className="emotion-table">
      <tbody>
        <tr><th colSpan="2"><span style={{size: 40, color: 'blue'}}>{this.props.word.text}</span></th></tr>
        <tr><th>Sentiment:</th><td>{this.props.word.sentiment.score}</td></tr>
        <tr><th>Anger:</th><td>{this.props.word.emotion.anger}</td></tr>
        <tr><th>Disgust:</th><td>{this.props.word.emotion.disgust}</td></tr>
        <tr><th>Fear:</th><td>{this.props.word.emotion.fear}</td></tr>
        <tr><th>Joy:</th><td>{this.props.word.emotion.joy}</td></tr>
        <tr><th>Sadness:</th><td>{this.props.word.emotion.sadness}</td></tr>
      </tbody>
      </table>
    )
  }
}
