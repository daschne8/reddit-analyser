import React, {Component} from 'react'
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory'

export default class EmotionGraph extends Component{
  render(){
    const keywords = this.props.keywords
    const ksize = keywords.length

    const data = [
      {emotion: 'Sentiment', value: keywords.reduce((total,next)=> total + next.sentiment,0)/ksize},
      {emotion: 'Anger', value: keywords.reduce((total,next)=> total + next.anger,0)/ksize},
      {emotion: 'Disgust', value: keywords.reduce((total,next)=> total + next.disgust,0)/ksize},
      {emotion: 'Fear', value: keywords.reduce((total,next)=> total + next.fear,0)/ksize},
      {emotion: 'Joy', value: keywords.reduce((total,next)=>total + next.joy,0)/ksize},
      {emotion: 'Sadness', value: keywords.reduce((total,next)=> total + next.sadness,0)/ksize}
    ]
      return(
      <div className='emotion-graph'>
        <VictoryChart domainPadding={20}>
          <VictoryAxis dependentAxis tickFormat={[-1,1]}/>
          <VictoryAxis tickValues={data.map(d => d.emotion)} tickFormat={data.map(d => d.emotion)}/>
          <VictoryBar
            data={data}
            x="emotion"
            y="value" />
        </VictoryChart>
      </div>
    )
  }
}
