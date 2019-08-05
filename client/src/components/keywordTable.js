import React,{Component} from 'react'

export default class KeywordTable extends Component{
  render(){
    return(
      <div className="emotion-table">
      <header className="emotion-table-header">{this.props.word.text}</header>
      <table>
      <tbody>
        <tr><th>Sentiment:</th><td>{this.props.word.sentiment.score}</td></tr>
        <tr><th>Anger:</th><td>{this.props.word.emotion.anger}</td></tr>
        <tr><th>Disgust:</th><td>{this.props.word.emotion.disgust}</td></tr>
        <tr><th>Fear:</th><td>{this.props.word.emotion.fear}</td></tr>
        <tr><th>Joy:</th><td>{this.props.word.emotion.joy}</td></tr>
        <tr><th>Sadness:</th><td>{this.props.word.emotion.sadness}</td></tr>
      </tbody>
      </table>
      </div>
    )
  }
}
