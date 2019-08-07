import React, {Component} from 'react';
import KeywordTable from '../components/keywordTable'
import EmotionGraph from '../components/emotionGraph'

export default class TextAnalysis extends Component{
  render(){
    let analysis = ''
    if (this.props.comments) {
    analysis = this.props.comments.keywords.map((word,idx) =>
      <KeywordTable key={idx} word={word} />)
    }
    let name = this.props.comments.name

    return(
      <div className="text-analysis">
        <header className="page">{name}</header>
        <div className='tables-holder'>
          {analysis}
        </div>
        {this.props.comments ? <EmotionGraph keywords={this.props.comments.keywords}/> : null}
      </div>
    )
  }
}
