import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
// import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import React from 'react';
import Styles from '../CSS/Styles';
import Data from '../Components/FifthPartData';
import FifthPartCard from '../Components/FifthPartCard';

function FifthPart(props) {
    const classes = Styles();
    return Data.map((e) => {
        return (
            <Container className={classes.fourthPartWrapper}>

                <Grid container spacing={2}>
                    <Grid item  xs={4}>
                    {
                    <FifthPartCard
                        title={e.title}
                        content={e.content}
                    />
                }
                    </Grid>
                </Grid>
              
            </Container>
        )
    })

}

export default FifthPart;