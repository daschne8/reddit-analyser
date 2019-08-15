import React,{Component} from 'react'

export default class KeywordTable extends Component{
  render(){
    return(
      <div className="emotion-table">
      <header className="emotion-table-header">{this.props.word.name}</header>
      <table>
      <tbody>
        <tr><th>Sentiment:</th><td>{this.props.word.sentiment}</td></tr>
        <tr><th>Anger:</th><td>{this.props.word.anger}</td></tr>
        <tr><th>Disgust:</th><td>{this.props.word.disgust}</td></tr>
        <tr><th>Fear:</th><td>{this.props.word.fear}</td></tr>
        <tr><th>Joy:</th><td>{this.props.word.joy}</td></tr>
        <tr><th>Sadness:</th><td>{this.props.word.sadness}</td></tr>
      </tbody>
      </table>
      </div>
    )
  }
}
