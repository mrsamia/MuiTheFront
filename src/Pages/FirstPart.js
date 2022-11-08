
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Buton from '../Components/Buton';
import Styles from '../CSS/Styles';
function FirstPart(props) {
    const classes = Styles();
    return (
        <div className='firstPartWrapper vh-100'>
            <Container>
                <div className='row d-flex align-items-center'>
                    <div className='col-6 '>
                        <div>
                            <Typography variant='h3'>Turn your ideas into success.</Typography>
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
                </div>
            </Container>
        </div>
    );
}

export default FirstPart;