import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./TopRow.css"

export default function TopRow() {
    return (
        <div className="top-row-container">
                <Typography variant="h5" component="div" sx={{'display': 'inline', 'fontSize': '1.75rem', color: '#595C69'}}>
                    Dashboard
                </Typography>
                <Button variant="contained" startIcon={<FileDownloadIcon sx={{opacity: 0.5}}/>} sx={{'fontSize' : '0.7em', 'fontWeight': 'bold','fontFamily' : 'sans-serif','padding' : '0.25rem 0.5rem', 'background-color': '#4E73DF'}}>Generate Report</Button>
        </div>
  );
}