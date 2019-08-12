import React,{Component} from 'react';
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
      {emotion: 'Sentiment', value: dif1[0] - dif2[0]},
      {emotion: 'Anger', value: dif1[1] - dif2[1]},
      {emotion: 'Disgust', value: dif1[2] - dif2[2]},
      {emotion: 'Fear', value: dif1[3] - dif2[3]},
      {emotion: 'Joy', value: dif1[4] - dif2[4]},
      {emotion: 'Sadness', value: dif1[5] - dif2[5]}
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
