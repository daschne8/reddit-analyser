import React, {Component} from 'react';
import KeywordTable from '../components/keywordTable'
import EmotionGraph from '../components/emotionGraph'

export default class TextAnalysis extends Component{
  render(){
    let analysis = ''
    if (this.props.comments.keywords) {
    analysis = this.props.comments.keywords.map(word =>
      <KeywordTable word={word} />)
    }


    return(
      <div className="text-analysis">
        <div className='tables-holder'>
          {analysis}
        </div>
        {this.props.comments.keywords ? <EmotionGraph keywords={this.props.comments.keywords}/> : null}
      </div>
    )
  }
}
