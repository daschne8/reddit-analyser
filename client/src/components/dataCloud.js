import React, {Component} from 'react'
import WordCloud from 'react-d3-cloud'

export default class DataCloud extends Component{

  generateKeywords = () =>{
    let keywordList = []
    console.log('keywords',this.props.keywords);
    if (this.props.keywords) {
      keywordList = this.props.keywords.map(k => ({text: 'test', value: 1000}))
      }
      console.log('keyword list',keywordList);
      return keywordList
    }

  render(){
    let keywordList = []
    console.log('keywords',this.props.keywords);
    if (this.props.keywords) {
      keywordList = this.props.keywords.map(k => ({text: k.text, value: Math.abs(k.sentiment.score) * 1000}))
      }
      console.log('keyword list',keywordList);


    const data = [
      {text: 'the', value: 1000},
      {text: 'word', value: 200},
      {text: 'cloud', value: 700},
      {text: 'KARTOSHKA', value: 1500},
      {text: 'YABLOKI', value: 1750},
    ];
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
