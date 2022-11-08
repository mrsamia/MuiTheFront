
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Styles from '../CSS/Styles';
function FirstPart(props) {
    const classes = Styles();
    return (
        <div className='firstPartWrapper vh-100'>
            <Container>
                <div className='row d-flex align-items-center'>
                    <div className='col-6 '>
                        <div>
                            <Typography variant='h3' className={classes.headerText}>Turn your ideas<br></br> into success.</Typography>
                        </div>
                        <div>
                            <Typography className={classes.cssDhnteq}>theFront will make your product look modern and professional while saving you precious time.</Typography>
                        </div>
                        <Grid container spacing={2} className={classes.MT} gutterBottom>
                            <Grid item>
                                <Button variant='contained' gutterBottom className={classes.btn}>View Pages</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.btn}>Documentation</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='col-6'>
                        <img src={require('../images/img1.png')}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FirstPart;