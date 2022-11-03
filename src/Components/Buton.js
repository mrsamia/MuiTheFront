import { Button } from '@mui/material';
import React from 'react';

function Buton(props) {
    return (
        <div>
            <Button variant={props.variant}>{props.name}</Button>
        </div>
    );
}

export default Buton;