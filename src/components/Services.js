// components/Services.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from '@mui/material';
import { Videocam, Fingerprint, Lock, SupportAgent, Shield, Alarm } from '@mui/icons-material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Services = () => {
    const services = [
        {
            icon: <Videocam sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'CCTV Installation & Maintenance',
            description: 'Professional CCTV installation with high-quality cameras and reliable maintenance services.',
            features: ['HD Quality Cameras', 'Night Vision Capability', 'Remote Monitoring', 'Regular Maintenance'],
            color: '#2196f3'
        },
        {
            icon: <Fingerprint sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Biometric Attendance Systems',
            description: 'Advanced biometric solutions for accurate attendance tracking and payroll management.',
            features: ['Fingerprint & Facial Recognition', 'Real-time Reporting', 'Cloud Data Backup', 'Multi-user Support'],
            color: '#4caf50'
        },
        {
            icon: <Lock sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Biometric Door Access Solutions',
            description: 'Secure access control systems that restrict entry to authorized personnel only.',
            features: ['Access Level Management', 'Entry Log Reports', 'Tamper Proof Design', 'Emergency Override'],
            color: '#ff9800'
        },
        {
            icon: <SupportAgent sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'CCTV AMC Services',
            description: 'Comprehensive Annual Maintenance Contracts for optimal system performance.',
            features: ['Regular System Checkups', 'Quick Repairs', 'Part Replacement', '24/7 Technical Support'],
            badge: 'Minimum Charges Guaranteed!',
            color: '#9c27b0'
        },
        {
            icon: <Shield sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Security Consultation',
            description: 'Customized security assessments tailored to your specific property and requirements.',
            features: ['Site Evaluation', 'Custom Security Plans', 'Technology Recommendations', 'Budget Planning'],
            color: '#f44336'
        },
        {
            icon: <Alarm sx={{ fontSize: { xs: 40, md: 50 } }} />,
            title: 'Intrusion Alarm Systems',
            description: 'Advanced alarm systems that detect unauthorized entry and alert immediately.',
            features: ['Motion Sensors', 'Loud Sirens', 'Mobile Alerts', 'Remote Activation'],
            color: '#795548'
        }
    ];

    return (
        <Container id="services" sx={{ py: { xs: 6, md: 8 } }}>
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
                    Our Specialized Services
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
                    Comprehensive security solutions for your home and business
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <LazyLoadComponent>
                            <Card sx={{
                                height: '100%',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(0,0,0,0.08)',
                                '&:hover': { 
                                    transform: 'translateY(-8px)', 
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                                    borderColor: service.color
                                }
                            }}>
                                <CardContent sx={{ 
                                    textAlign: 'center', 
                                    p: { xs: 3, md: 4 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Box sx={{ 
                                        color: service.color, 
                                        mb: 3,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {service.icon}
                                    </Box>
                                    
                                    <Typography 
                                        variant="h5" 
                                        component="h3" 
                                        gutterBottom
                                        sx={{ 
                                            fontWeight: 600,
                                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                                            mb: 2
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    
                                    <Typography 
                                        variant="body1" 
                                        color="textSecondary" 
                                        gutterBottom
                                        sx={{ 
                                            mb: 3,
                                            flexGrow: 1,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                    
                                    <Box sx={{ textAlign: 'left' }}>
                                        {service.features.map((feature, i) => (
                                            <Box 
                                                key={i} 
                                                sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center',
                                                    mb: 1.5,
                                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                                }}
                                            >
                                                <Box sx={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    backgroundColor: service.color,
                                                    mr: 2,
                                                    flexShrink: 0
                                                }} />
                                                {feature}
                                            </Box>
                                        ))}
                                    </Box>
                                    
                                    {service.badge && (
                                        <Chip
                                            label={service.badge}
                                            sx={{
                                                mt: 3,
                                                backgroundColor: '#ff9800',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.8rem',
                                                '& .MuiChip-label': {
                                                    px: 2
                                                }
                                            }}
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </LazyLoadComponent>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Services;