import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory'

export default class EmotionGraph extends Component{
  render(){
    const keywords = this.props.keywords
    const ksize = keywords.length

    const data = [
      {emotion: 'Sentiment', value: keywords.reduce((total,next)=> total + next.sentiment.score,0)/ksize},
      {emotion: 'Anger', value: keywords.reduce((total,next)=> total + next.emotion.anger,0)/ksize},
      {emotion: 'Disgust', value: keywords.reduce((total,next)=> total + next.emotion.disgust,0)/ksize},
      {emotion: 'Fear', value: keywords.reduce((total,next)=> total + next.emotion.fear,0)/ksize},
      {emotion: 'Joy', value: keywords.reduce((total,next)=>total + next.emotion.joy,0)/ksize},
      {emotion: 'Sadness', value: keywords.reduce((total,next)=> total + next.emotion.sadness,0)/ksize}
    ]
      return(
      <div>
        <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={data.map(d => d.emotion)} tickFormat={data.map(d => d.emotion)}/>
        <VictoryAxis dependentAxis tickFormat={[-1,1]}/>
          <VictoryBar
            data={data}
            x="emotion"
            y="value" />
        </VictoryChart>
      </div>
    )
  }
}
