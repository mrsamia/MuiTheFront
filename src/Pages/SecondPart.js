import { Container, Grid, Typography } from '@mui/material';
import SyncDisabledIcon from '@mui/icons-material/SyncDisabled';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TungstenIcon from '@mui/icons-material/Tungsten';
import React from 'react';
import Styles from '../CSS/Styles';

function SecondPart(props) {
    const classes = Styles();
    return (
        <Container className={classes.SecondPartWrapper}>
            <Typography variant='h4'gutterBottom>Build accessible React apps with speed</Typography>
            <Typography gutterBottom className={classes.cssDhnteq}>Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.</Typography>

            <Grid container justifyContent="center" spacing={3} display="flex" className={classes.MT} >
                <Grid item xs={4}>
                    <TungstenIcon className={classes.icon}/>
                    <Typography variant='h6' justifyContent="center">Built for developers</Typography>
                    <Typography className={classes.cssskldni} >theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                </Grid>
                <Grid item xs={4}>
                <SyncDisabledIcon className={classes.icon}/>
                    <Typography variant='h6'>Designed to be modern</Typography>
                    <Typography className={classes.cssskldni}>theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                </Grid>
                <Grid item xs={4}>
                <TaskAltIcon className={classes.icon}/>
                    <Typography variant='h6' >Documentation for everything</Typography>
                    <Typography className={classes.cssskldni}>theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                </Grid>
            
            </Grid>
        </Container>

    );
}

export default SecondPart;