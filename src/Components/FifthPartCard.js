import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Styles from '../CSS/Styles';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import React from 'react';

function FifthPartCard(props) {
    const classes = Styles();
    return (
       <Container>
         <Grid container >
                <Grid item >
                    <Card item >
                        <CardContent>
                            <AlarmOnIcon className={classes.icon} />
                            <Typography variant='h5' gutterBottom>{props.title}</Typography>
                            <Typography>{props.content}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
       </Container>
    );
}

export default FifthPartCard;