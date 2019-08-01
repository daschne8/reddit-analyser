import React, {Component} from 'react'
import WordCloud from 'react-d3-cloud'

export default class DataCloud extends Component{

  render(){
    let keywordList = []
    console.log('keywords',this.props.keywords);
    if (this.props.keywords) {
      keywordList = this.props.keywords.map(k => ({text: k.text, value: Math.abs(k.sentiment.score) * 1000}))
      }

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const roatate = word => word.value % 360;

    return(
      <WordCloud
      data={keywordList}
      fontSizeMapper={fontSizeMapper}
      roatate={roatate}/>
    )
  }
}
