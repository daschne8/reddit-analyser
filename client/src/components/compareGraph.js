import React,{Component} from 'react';
import ReactDom from 'react-dom'
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory'

export default class CompareGraph extends Component{

  getData = (keywords) =>{
    const ksize = keywords.length

    let differences = [
      keywords.reduce((total,next)=> total + next.sentiment.score,0)/ksize,
      keywords.reduce((total,next)=> total + next.emotion.anger,0)/ksize,
      keywords.reduce((total,next)=> total + next.emotion.disgust,0)/ksize,
      keywords.reduce((total,next)=> total + next.emotion.fear,0)/ksize,
      keywords.reduce((total,next)=>total + next.emotion.joy,0)/ksize,
      keywords.reduce((total,next)=> total + next.emotion.sadness,0)/ksize
    ]
    return differences
  }

  getDifferences = () => {
    const dif1 = this.getData(this.props.first)
    const dif2 = this.getData(this.props.second)
    const data = [
      {emotion: 'Sentiment', value: dif2[0] - dif1[0]},
      {emotion: 'Anger', value: dif2[1] - dif1[1]},
      {emotion: 'Disgust', value: dif2[2] - dif1[2]},
      {emotion: 'Fear', value: dif2[3] - dif1[3]},
      {emotion: 'Joy', value: dif2[4] - dif1[4]},
      {emotion: 'Sadness', value: dif2[5] - dif1[5]}
    ]
    return data
  }


  render(){

    const data = this.getDifferences()
      return(
      <div className='compare-emotion-graph'>
      <header className="graph-title">Difference in overall emotions between first and second queries.</header>
        <VictoryChart domainPadding={20}>
          <VictoryAxis dependentAxis tickFormat={[-.5,.5]}/>
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
