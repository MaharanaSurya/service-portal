import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <>
            <AppBar position="static" sx={{bgcolor:'black', marginTop:'20px'}}>
                <Toolbar>
                <Typography sx={{align:"center"}}>Footer</Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Footer
