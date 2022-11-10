import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import React from 'react';
import Styles from '../CSS/Styles';

function FifthPart(props) {
    const classes = Styles();
    return (
        <Container className={classes.fourthPartWrapper}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <AlarmOnIcon className={classes.icon} />
                            <Typography variant='h5' gutterBottom>Themeable</Typography>
                            <Typography>Customize any part of our components to match your design needs.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <AlarmOnIcon className={classes.icon} />
                            <Typography variant='h5' gutterBottom>Themeable</Typography>
                            <Typography>Customize any part of our components to match your design needs.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <AlarmOnIcon className={classes.icon} />
                            <Typography variant='h5' gutterBottom>Themeable</Typography>
                            <Typography>Customize any part of our components to match your design needs.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FifthPart;