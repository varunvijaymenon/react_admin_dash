import React from 'react'
import Container from './Container'
import ProgressBar from './ProgressBar'
import Box from '@mui/material/Box';
import IllustrationImage from './dashboardUndraw.svg';
import './FourthRow.css'

export default function FourthRow() {
  return (
    <div className="FourthRowContainer" style={{display: 'flex', justifyContent: 'space-between', columnGap: '1.5em'}}>
        <div className="ProjectsArea" style={{flex:1}}>
            <Container ContainerTitle='Projects'>
                <div className="Project-Bars" style={{width: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '20em'}}>
                    <ProgressBar BarTitle='Server Migration' ProgressValue='20'        ProgressColor='#E74A3A'/>
                    <ProgressBar BarTitle='Sales Tracking'   ProgressValue='40'        ProgressColor='#F6C23D'/>
                    <ProgressBar BarTitle='Customer Databse' ProgressValue='60'        ProgressColor='#4E73DF'/>
                    <ProgressBar BarTitle='Payout Details'   ProgressValue='80'        ProgressColor='#37B8CC'/>
                    <ProgressBar BarTitle='Account Setup'    ProgressValue='100'       ProgressColor='#1BC88A'/>
                </div>
            </Container>
        </div>
        <div className='IllustrationsArea' style={{flex:1}}>
            <Container ContainerTitle='Illustrations'>
                <Box
                    component="img"
                    sx={{
                        height: 250,
                        width: 350,
                        }}
                    alt="Image cannot load"
                    src={IllustrationImage}
                />
                <div className="text-content" style={{ textAlign: 'left', paddingLeft: '1em', paddingRight: '1em' }}>
                    <p className='IllustrationsText' style={{color: '#848796'}}>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                    <p style={{color:'#5175E0', margin:'0'}}><a href="https://undraw.co/">Browse illustrations on unDraw →</a></p>
                </div>
            </Container>
        </div>
    </div>
  )
}
