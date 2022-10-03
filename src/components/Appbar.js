import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Appbar.css'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position = "static" className="NavBar" sx={{"background-color": "white", 'boxShadow': '0 .15rem 1.75rem 0 rgba(58,59,69,.15)'}}>
        <Toolbar>
          <div className="search-container">
            <div className="search-input">
              <InputBase
              placeholder="Search for..."
              inputProps={{ 'aria-label': 'search for...' }}
              sx={{width: '20em;', height:"100%", paddingLeft: '1.5em', "background-color": '#F8F9FC', color: 'black', borderTopLeftRadius:'0.5em', borderBottomLeftRadius:'0.5em'}}/>
            </div>
            <div className="search-icon">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display:'block', margin: 'auto'}}>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              edge="end"
            >
              <Badge badgeContent={`17+`} color="error">
                <NotificationsIcon className='icon-color'/>
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" edge="end">
              <Badge badgeContent={4} color="error">
                <MailIcon className='icon-color'/>
              </Badge>
            </IconButton>
            
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

