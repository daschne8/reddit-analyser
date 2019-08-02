import React, {Component} from 'react';
import TextAnalysis from '../containers/textAnalysis'

const Analysis = () => {
  return(
    <div className="analysis-holder">
      <header>ANALYSIS</header>
      <p>Analyzing ...</p>
      <TextAnalysis />
    </div>
  )
}
export default Analysis
