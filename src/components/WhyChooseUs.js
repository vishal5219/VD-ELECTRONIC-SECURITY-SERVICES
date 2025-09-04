// components/WhyChooseUs.js
import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { VerifiedUser, Savings, Engineering, Star } from '@mui/icons-material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <VerifiedUser sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Trusted & Reliable',
            description: 'With years of experience in the security industry, we\'ve built a reputation for reliability and trustworthiness.',
            color: '#4caf50',
            stats: '500+ Happy Clients'
        },
        {
            icon: <Savings sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Affordable Solutions',
            description: 'We offer competitive pricing without compromising on quality, making security accessible for everyone.',
            color: '#ff9800',
            stats: 'Best Price Guarantee'
        },
        {
            icon: <Engineering sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Expert Technicians',
            description: 'Our team consists of certified professionals with extensive training in security system installation and maintenance.',
            color: '#2196f3',
            stats: 'Certified Engineers'
        }
    ];

    return (
        <Box id="why-choose-us" sx={{ 
            backgroundColor: 'background.default', 
            py: { xs: 6, md: 8 },
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
                opacity: 0.03,
                backgroundImage: 'radial-gradient(circle at 25% 25%, #0e2e71 2px, transparent 2px)',
                backgroundSize: '50px 50px',
                zIndex: 0
            }} />
            
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                    <Typography 
                        variant="h3" 
                        component="h2" 
                        gutterBottom 
                        className="section-title"
                        sx={{ 
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            mb: 2
                        }}
                    >
                        Why Choose Us
                    </Typography>
                    <Typography 
                        variant="h6" 
                        component="p" 
                        color="textSecondary"
                        sx={{ 
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        We deliver excellence in every project with our proven track record
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <LazyLoadComponent>
                                <Paper 
                                    elevation={0} 
                                    sx={{ 
                                        p: { xs: 3, md: 4 }, 
                                        textAlign: 'center', 
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        borderRadius: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                            borderColor: feature.color
                                        }
                                    }}
                                >
                                    <Box sx={{ 
                                        color: feature.color, 
                                        mb: 3,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {feature.icon}
                                    </Box>
                                    
                                    <Typography 
                                        variant="h5" 
                                        component="h3" 
                                        gutterBottom
                                        sx={{ 
                                            fontWeight: 600,
                                            fontSize: { xs: '1.2rem', md: '1.4rem' },
                                            mb: 2
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    
                                    <Typography 
                                        variant="body1" 
                                        color="textSecondary"
                                        sx={{ 
                                            mb: 3,
                                            lineHeight: 1.6,
                                            fontSize: { xs: '0.95rem', md: '1rem' }
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                    
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 1,
                                        backgroundColor: `${feature.color}15`,
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                        border: `1px solid ${feature.color}30`
                                    }}>
                                        <Star sx={{ fontSize: 16, color: feature.color }} />
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                fontWeight: 600,
                                                color: feature.color,
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            {feature.stats}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </LazyLoadComponent>
                        </Grid>
                    ))}
                </Grid>
                
                {/* Additional Stats */}
                <Box sx={{ 
                    mt: { xs: 4, md: 6 },
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    backgroundColor: 'primary.main',
                    borderRadius: 3,
                    color: 'white'
                }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        Our Success Numbers
                    </Typography>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800' }}>
                                500+
                            </Typography>
                            <Typography variant="body1">Happy Clients</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800' }}>
                                1000+
                            </Typography>
                            <Typography variant="body1">Installations</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800' }}>
                                5+
                            </Typography>
                            <Typography variant="body1">Years Experience</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800' }}>
                                24/7
                            </Typography>
                            <Typography variant="body1">Support</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;