import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  const length = data.length
  return data.reduce((numOne, numTwo) => {
    return ((numOne + numTwo) / length);
  })
}

export default class Chart extends Component {
  render() {
    return (
      <Sparklines height = {120} width = {180} data = {this.props.data} margin = {6}>
        <SparklinesLine color={ this.props.color} />
        <SparklinesSpots style={{ fill: "#56b45d" }} />
        <SparklinesReferenceLine type="avg" />
        <div>Average: {average(this.props.data).toFixed(2)} - {this.props.unit}</div>
      </Sparklines>
    )
  }
}
