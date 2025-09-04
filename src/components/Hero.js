// components/Hero.js
import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { ArrowForward, Security, Phone } from '@mui/icons-material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Hero = () => {
    return (
        <Box
            id="home"
            sx={{
                background: 'linear-gradient(rgba(14, 46, 113, 0.85), rgba(14, 46, 113, 0.95))',
                color: 'white',
                padding: { xs: '60px 0', sm: '80px 0', md: '120px 0' },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <LazyLoadComponent>
                <Box
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        filter: 'blur(1px)',
                    }}
                />
            </LazyLoadComponent>

            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 152, 0, 0.1)',
                    animation: 'pulse 3s infinite',
                    '@keyframes pulse': {
                        '0%': { transform: 'scale(1)', opacity: 0.5 },
                        '50%': { transform: 'scale(1.2)', opacity: 0.8 },
                        '100%': { transform: 'scale(1)', opacity: 0.5 },
                    }
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 152, 0, 0.1)',
                    animation: 'pulse 4s infinite 1s',
                }}
            />

            <Container maxWidth="lg">
                <Box sx={{ mb: 4 }}>
                    <Security sx={{ fontSize: { xs: 60, md: 80 }, mb: 2, color: '#ff9800' }} />
                </Box>
                
                <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    fontWeight="bold" 
                    sx={{ 
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                        mb: 3,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Secure Today | Safe Tomorrow
                </Typography>
                
                <Typography 
                    variant="h5" 
                    component="p" 
                    gutterBottom 
                    sx={{ 
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                        mb: 4,
                        maxWidth: '800px',
                        mx: 'auto',
                        opacity: 0.95,
                        lineHeight: 1.4
                    }}
                >
                    Protect your Office, Home & Shop with our professional security solutions
                </Typography>
                
                <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
                    <Grid item>
                        <Button 
                            variant="contained" 
                            size="large" 
                            endIcon={<ArrowForward />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                backgroundColor: '#ff9800',
                                '&:hover': {
                                    backgroundColor: '#f57c00',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Get Free Consultation
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="outlined" 
                            size="large" 
                            sx={{ 
                                color: 'white', 
                                borderColor: 'white',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: 'white',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Our Services
                        </Button>
                    </Grid>
                </Grid>
                
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 2,
                    flexWrap: 'wrap'
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Phone sx={{ color: '#ff9800' }} />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            9619243384
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        24/7 Emergency Support Available
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;