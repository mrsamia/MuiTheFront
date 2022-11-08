import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
function Nav(props) {
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;