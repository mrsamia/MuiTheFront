import { Container, Typography } from '@mui/material';
import React from 'react';
import Styles from '../CSS/Styles'; 

function ThirdPart(props) {
    const classes=Styles();
    return (
      <Container className={classes.PartWrapper}>
        <Typography variant='h4' gutterBottom className={classes.MT}>Build tools and full documention</Typography>
        <Typography gutterBottom className={classes.cssDhnteq}>
            Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.
        </Typography>
        <img src={require('../images/Ss.png')} className="pt-4"/>
      </Container>
    );
}

export default ThirdPart;