import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const keyframes =
`@keyframes circle-chart-fill {
 to { stroke-dasharray: 0 100; }
}

@keyframes circle-chart-appear {
 to {
   opacity: 1;
   transform: translateY(0);
 }
}`;
const PercentageChart = (props) => {
  const val = props.percent ? `${props.percent},100` : '0,100'

  return (
    <div>
      <style>{keyframes}</style>
     <svg 
       viewBox='0 0 33.83098862 33.83098862'
       width={props.size}
       height={props.size}
       xmlns='http://www.w3.org/2000/svg'>
      <circle 
         stroke='#efefef'
         strokeWidth={props.strokeWidth}
         fill="none" 
         cx='16.91549431'
         cy='16.91549431'
         r='15.91549431' />
      <circle 
        style={{
          animation: 'circle-chart-fill 2s reverse',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center'
        }}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeDasharray={val}
        strokeLinecap='round'
        fill='none'
        cx='16.91549431'
        cy='16.91549431'
        r='15.91549431' />
      <g style={{
        animation: 'circle-chart-appear 2s forwards',
        opacity: 0,
        transform: 'translateY(0.3em)'}}>
        <text 
           x='16.91549431'
           y='15.5' 
           alignmentBaseline='central' 
           textAnchor='middle'
           fontSize='8'>{props.percent}%</text>
       { props.subTitle && <text 
         x='16.91549431'
         y='20.5'
         alignmentBaseline='central'
         textAnchor='middle'
         fontSize='2'>{props.subTitle}</text>
       }
      </g>
    </svg> 
    </div>
  )
}

PercentageChart.propTypes = {
  percent: PropTypes.number,
  subTitle: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string
}
PercentageChart.defaultProps = {
  percent: 0,
  size: 200,
  strokeWidth: 1,
  color: '#00acc1'
}

export default PercentageChart