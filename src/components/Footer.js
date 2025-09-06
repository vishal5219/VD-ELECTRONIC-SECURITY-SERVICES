// components/Footer.js
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Mail, Call, WhatsApp } from '@mui/icons-material';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Why Choose Us', href: '#why-choose-us' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'CCTV Installation', href: '#services' },
        { name: 'Biometric Systems', href: '#services' },
        { name: 'Access Control', href: '#services' },
        { name: 'AMC Services', href: '#services' }
    ];

    const handleScrollTo = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box component="footer" sx={{
            backgroundColor: '#1f2937',
            color: 'white',
            py: { xs: 4, md: 6 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px)',
                backgroundSize: '30px 30px',
                zIndex: 0
            }} />

            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Row>
                    <Col xs={12} md={4} className="mb-4">
                        <Box sx={{ mb: 3 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    mb: 2
                                }}
                            >
                                VD ELECTRONIC SECURITY SERVICES
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.6,
                                    opacity: 0.9,
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                }}
                            >
                                Your trusted partner for all security solutions. Protecting what matters most to you with professional, reliable, and affordable security services.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Mail />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Call />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                        </Box>
                    </Col>

                    <Col xs={12} md={4} className="mb-4">
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                mb: 2
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {quickLinks.map((link, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    sx={{
                                        cursor: 'pointer',
                                        opacity: 0.8,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            opacity: 1,
                                            color: '#ff9800',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                    onClick={() => handleScrollTo(link.href)}
                                >
                                    {link.name}
                                </Typography>
                            ))}
                        </Box>
                    </Col>

                    <Col xs={12} md={4} className="mb-4">
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                mb: 2
                            }}
                        >
                            Our Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {services.map((service, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    sx={{
                                        cursor: 'pointer',
                                        opacity: 0.8,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            opacity: 1,
                                            color: '#ff9800',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                    onClick={() => handleScrollTo(service.href)}
                                >
                                    {service.name}
                                </Typography>
                            ))}
                        </Box>

                        <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                Emergency Contact
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                24/7 Support Available
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#ff9800', fontWeight: 600 }}>
                                9619243384
                            </Typography>
                        </Box>
                    </Col>
                </Row>

                <Box sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    mt: 4,
                    pt: 3,
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        &copy; {currentYear} VD Electronic Security Services. All Rights Reserved.
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', mt: 1 }}>
                        Professional Security Solutions | CCTV | Biometric Systems | Access Control
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;