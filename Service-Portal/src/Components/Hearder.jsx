import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';


const Hearder = () => {
  return (
    <>
    <AppBar position="static" sx={{marginBottom:'20px'}}>
        <Toolbar>
            <Typography>Navigation Bar</Typography>
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default Hearder
