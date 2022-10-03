import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)((props) => ({
    height: 17.5,
    borderRadius: 5,
    marginTop: '0.50em',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#E9ECF4'
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: props.BarColor
    },

  }));


export default function ProgressBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <div className="BarData" style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p className="BarTitle" style={{margin : 0, color: '#848796', fontWeight: 'bold', fontSize: '0.85em'}}>{props.BarTitle}</p>
            <p className="BarValue" style={{margin : 0, color: '#848796', fontWeight: 'bold', fontSize: '0.85em'}}>{props.ProgressValue <100 ? props.ProgressValue + '%' : 'Completed!'}</p>
        </div>
        <BorderLinearProgress variant="determinate" value={props.ProgressValue} BarColor={props.ProgressColor}/>
    </Box>
  )
}
