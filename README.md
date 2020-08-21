# percentage-chart

> circular percentage chart

 simple circular percentage chart
 
 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

[here](http://sj5000-percentage-chart.s3-website-us-east-1.amazonaws.com/)

## Usage

```jsx
import React, { Component } from 'react'

import PercentageChart from 'percentage-chart'

class Example extends Component {
  render() {
    return <PercentageChart
    percent={70}
    size={200}
    color='#00acc1'
    strokeWidth={1}
    subTilte='some subtitle'
    />
  }
}
```

