import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Styles from '../CSS/Styles.js';

function FourthPart(props) {
    const classes = Styles();
    return (
        <Container>
            <Grid container spacing={4} className={classes.fourthPartWrapper}>
                <Grid item xs={6}>
                    <Typography variant='h4' gutterBottom>The powerful and flexible theme for all kinds of businesses</Typography>
                    <Typography gutterBottom className={classes.cssDhnteq}>Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users.</Typography>
                    <Grid container spacing={4} className={classes.MT}>
                        <Grid item xs={4}>
                            <Typography variant='h4'gutterBottom className={classes.BluefontColor}>300+</Typography>
                            <Typography className={classes.BaseFontColor}>300 + component compositions, which will help you to build any page easily.</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography variant='h4'gutterBottom className={classes.BluefontColor}>45+</Typography>
                            <Typography className={classes.BaseFontColor}>45 + landing and supported pages to Build a professional website.</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography variant='h4'gutterBottom className={classes.BluefontColor}>99%</Typography>
                            <Typography className={classes.BaseFontColor}>99% of our customers rated 5-star our themes over 5 years.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <img src={require('../images/S2.png')} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default FourthPart;