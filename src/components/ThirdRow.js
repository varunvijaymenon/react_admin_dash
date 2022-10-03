import React from 'react'
import CustomAreaChart from './CustomAreaChart';
import Container from './Container.js';
import CustomPieChart from './CustomPieChart.js'
import './ThirdRow.css';

export default function ThirdRow() {
  return (
    <div className="ThirdRowContainer">
        <div className="AreaChart">
          <Container ContainerTitle='Earnings Overview'>
            <CustomAreaChart/>
          </Container>
        </div>
        <div className="PieChart">
          <Container ContainerTitle='Revenue Sources'>
            <CustomPieChart/>
          </Container>
        </div>
    </div>
  )
}
