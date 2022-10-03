import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function HeaderText() {
    return (
        <Typography variant="h5" component="div" sx={{'display': 'inline', 'fontSize': '2rem', color: '#595C69'}}>
          Dashboard
        </Typography>
  );
}