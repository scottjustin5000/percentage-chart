import React from 'react'
 import PercentageChart from './percentage-chart'

export const ExampleComponent = () => {
  return (<div style={{display:'flex', padding:'20px', justifyContent:'center', width:'100%'}}>
  <PercentageChart
  percent={70}
  subTitle='sub-title here'
  /> 
  </div>)
}
