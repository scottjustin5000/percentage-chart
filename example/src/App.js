import React from 'react'

import { PercentageChart } from 'percentage-chart'
import 'percentage-chart/dist/index.css'

const App = () => {
  return ( <div style={{display:'flex', padding:'20px', justifyContent:'center'}} ><PercentageChart 
    size={200}
    percent={70}
    subTitle='Subtitle here'
    />
    </div>
  )
}

export default App
