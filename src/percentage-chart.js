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
  const val = props.percent ? `${val},100` : '70,100'
  const circleRef = useRef(null)
  const size = 200
  const strokeWidth = 1

  return (
    <div className="grid">
      <style>{keyframes}</style>
     <svg 
       viewBox="0 0 33.83098862 33.83098862" 
       width={size}
       height={size}
       xmlns="http://www.w3.org/2000/svg">
      <circle 
         stroke="#efefef" 
         strokeWidth={strokeWidth}
         fill="none" 
         cx="16.91549431" 
         cy="16.91549431" 
         r="15.91549431" />
      <circle 
        ref={circleRef}
        style={{
          animation: 'circle-chart-fill 2s reverse',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center'
        }}
        stroke="#00acc1" 
        strokeWidth={strokeWidth}
        strokeDasharray={val}
        strokeLinecap="round"
        fill="none" 
        cx="16.91549431" 
        cy="16.91549431" 
        r="15.91549431" />
      <g style={{
      animation: 'circle-chart-appear 2s forwards',
      opacity: 0,
      transform: 'translateY(0.3em)'}}>
        <text 
           x="16.91549431" 
           y="15.5" 
           alignmentBaseline="central" 
           textAnchor="middle" 
           fontSize="8">30%</text>
        <text 
         x="16.91549431" 
         y="20.5" 
         alignmentBaseline="central" 
         textAnchor="middle" 
         fontSize="2">Yay 30% progress!</text>
      </g>
    </svg> 
    </div>
  )
}

PercentageChart.propTypes = {
  percent: PropTypes.Number,
  subTitle: PropTypes.String,
  size: PropTypes.Number,
  strokeWidth: PropTypes.Number,
  color: PropTypes.String
}

export default PercentageChart