// components/Custom404.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Custom404 = () => {
    return (
        <Container sx={{ py: 15, textAlign: 'center' }}>
            <Typography variant="h1" component="h1" gutterBottom color="primary">
                404
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                The page you are looking for doesn't exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                component={Link}
                to="/"
            >
                Go Back Home
            </Button>
        </Container>
    );
};

export default Custom404;