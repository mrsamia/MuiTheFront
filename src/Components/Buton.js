import { Button } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: yellow[800],
        },
    },
});

function Buton(props) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant='contained'>Primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
        </ThemeProvider>
    );
}

export default Buton;