// components/Hero.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { ArrowForward, Security, Phone, Star } from '@mui/icons-material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    const handleClickServices = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <Box
            id="home"
            sx={{
                background: 'linear-gradient(135deg, rgba(14, 46, 113, 0.9) 0%, rgba(25, 65, 155, 0.9) 50%, rgba(14, 46, 113, 0.9) 100%)',
                color: 'white',
                padding: { xs: '30px 0', sm: '30px 0', md: '40px 0' },
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 152, 0, 0.15) 2px, transparent 2px)',
                    backgroundSize: '40px 40px',
                    zIndex: 0
                }}
            />

            {/* Main background with your PNG image */}
            <LazyLoadComponent>
                <Box
                    sx={{
                        backgroundImage: 'url(security-camera.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: { xs: 1, md: -1 },
                        opacity: 0.1
                    }}
                />
            </LazyLoadComponent>

            {/* Floating security elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '5%',
                    width: '120px',
                    height: '120px',
                    backgroundImage: 'url(fingerprint.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    animation: 'float 6s infinite ease-in-out',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' },
                    },
                    display: { xs: 'none', md: 'block' }
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '100px',
                    height: '100px',
                    backgroundImage: 'url(surveillance-security-camera.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    animation: 'float 7s infinite ease-in-out 1s',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-15px)' },
                    },
                    display: { xs: 'none', lg: 'block' }
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Row className="align-items-center">
                    <Col md={7}>
                        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Security sx={{ fontSize: { xs: 40, md: 50 }, color: '#ff9800' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    display: 'inline'
                                }}
                            >
                                VD ELECTRONIC SECURITY SERVICES
                            </Typography>
                        </Box>

                        <Typography
                            variant="h1"
                            component="h1"
                            gutterBottom
                            fontWeight="bold"
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                                mb: 3,
                                background: 'linear-gradient(45deg, #ffffff, #e0f7fa)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                lineHeight: 1.2
                            }}
                        >
                            Secure Your World with Advanced Protection
                        </Typography>

                        <Typography
                            variant="h5"
                            component="p"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                                mb: 4,
                                opacity: 0.9,
                                lineHeight: 1.6
                            }}
                        >
                            Professional CCTV, biometric systems, and access control solutions for your home, office, and business
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
                            <Button
                                variant="contained"
                                size="large"
                                href="https://wa.me/919619243384?text=Hello%20VD%20Security%20Team%2C%20I%20have%20a%20query%20regarding%20your%20services."
                                target="_blank"
                                endIcon={<ArrowForward />}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 600,
                                    backgroundColor: '#ff9800',
                                    borderRadius: '50px',
                                    '&:hover': {
                                        backgroundColor: '#f57c00',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 10px 30px rgba(255, 152, 0, 0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                    fontSize: { xs: '13px', md: '1.1rem' }
                                }}
                            >
                                Free Consultation
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    borderWidth: '2px',
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 600,
                                    borderRadius: '50px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        borderColor: '#ff9800',
                                        color: '#ff9800',
                                        transform: 'translateY(-3px)',
                                    },
                                    transition: 'all 0.3s ease',
                                    fontSize: { xs: '13px', md: '1.1rem' }
                                }}
                                onClick={() => handleClickServices('#services')}
                            >
                                View Services
                            </Button>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            flexWrap: 'wrap',
                            justifyContent: { md: 'left', xs: 'center' }
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                px: 3,
                                py: 1.5,
                                borderRadius: '50px',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <Phone sx={{ color: '#ff9800', fontSize: '1.2rem' }} />
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    9619243384 / 9769536571
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} sx={{ color: '#ffb74d', fontSize: '1.2rem' }} />
                                ))}
                                <Typography variant="body2" sx={{ opacity: 0.9, ml: 1 }}>
                                    500+ Happy Clients
                                </Typography>
                            </Box>
                        </Box>
                    </Col>

                    <Col md={5} className="d-none d-md-block">
                        <Box sx={{
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    backgroundImage: 'url(security-camera.png)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    animation: 'float 8s infinite ease-in-out',
                                    '@keyframes float': {
                                        '0%, 100%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-15px)' },
                                    }
                                }}
                            />

                            {/* Floating badges */}
                            <Box sx={{
                                position: 'absolute',
                                top: '10%',
                                right: '0',
                                backgroundColor: 'rgba(255, 152, 0, 0.9)',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '10px 15px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                animation: 'pulse 2s infinite',
                                '@keyframes pulse': {
                                    '0%, 100%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.05)' },
                                }
                            }}>
                                24/7 Support
                            </Box>

                            <Box sx={{
                                position: 'absolute',
                                bottom: '20%',
                                left: '0',
                                backgroundColor: 'rgba(33, 150, 243, 0.9)',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '10px 15px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                animation: 'pulse 2s infinite 1s',
                            }}>
                                Free Installation
                            </Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Box >
    );
};

export default Hero;