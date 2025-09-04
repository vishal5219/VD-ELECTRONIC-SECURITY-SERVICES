// components/LoadingSpinner.js
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingSpinner;