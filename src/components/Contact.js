// components/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Card, CardContent, Snackbar, Alert } from '@mui/material';
import { Phone, Email, Schedule, LocationOn, Send } from '@mui/icons-material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setOpenSnackbar(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const contactInfo = [
        {
            icon: <Phone sx={{ color: 'primary.main', fontSize: 28 }} />,
            title: 'Phone Numbers',
            details: ['9619243384', '9769536571'],
            color: '#2196f3'
        },
        {
            icon: <Email sx={{ color: 'primary.main', fontSize: 28 }} />,
            title: 'Email Address',
            details: ['vrindadey2023@gmail.com'],
            color: '#4caf50'
        },
        {
            icon: <Schedule sx={{ color: 'primary.main', fontSize: 28 }} />,
            title: 'Business Hours',
            details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Emergency services available 24/7'],
            color: '#ff9800'
        },
        {
            icon: <LocationOn sx={{ color: 'primary.main', fontSize: 28 }} />,
            title: 'Service Area',
            details: ['We serve residential and commercial clients throughout the region'],
            color: '#9c27b0'
        }
    ];

    return (
        <Container id="contact" sx={{ py: { xs: 6, md: 8 } }}>
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
                    Contact Us
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
                    Get in touch with us for a free consultation and quote
                </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} lg={7}>
                    <Card sx={{ 
                        height: '100%',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: 3
                    }}>
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Typography 
                                variant="h5" 
                                component="h3" 
                                gutterBottom
                                sx={{ 
                                    fontWeight: 600,
                                    mb: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Send sx={{ color: 'primary.main' }} />
                                Get In Touch
                            </Typography>

                            <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'primary.main',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Your Email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'primary.main',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'primary.main',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            select
                                            label="Select Service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'primary.main',
                                                    },
                                                },
                                            }}
                                        >
                                            <option value=""></option>
                                            <option value="cctv">CCTV Installation</option>
                                            <option value="biometric">Biometric Attendance System</option>
                                            <option value="access">Door Access Solution</option>
                                            <option value="amc">CCTV AMC Service</option>
                                            <option value="other">Other</option>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            variant="outlined"
                                            placeholder="Tell us about your security requirements..."
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'primary.main',
                                                    },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button 
                                            type="submit" 
                                            variant="contained" 
                                            size="large" 
                                            fullWidth
                                            endIcon={<Send />}
                                            sx={{
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
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {contactInfo.map((info, index) => (
                            <Card 
                                key={index}
                                sx={{ 
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                        borderColor: info.color
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start', 
                                        gap: 2,
                                        mb: 2
                                    }}>
                                        <Box sx={{
                                            p: 1,
                                            borderRadius: 2,
                                            backgroundColor: `${info.color}15`,
                                            border: `1px solid ${info.color}30`
                                        }}>
                                            {info.icon}
                                        </Box>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography 
                                                variant="h6" 
                                                gutterBottom
                                                sx={{ 
                                                    fontWeight: 600,
                                                    fontSize: { xs: '1rem', md: '1.1rem' }
                                                }}
                                            >
                                                {info.title}
                                            </Typography>
                                            {info.details.map((detail, i) => (
                                                <Typography 
                                                    key={i}
                                                    variant="body1" 
                                                    color="textSecondary"
                                                    sx={{ 
                                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                                        mb: i < info.details.length - 1 ? 0.5 : 0
                                                    }}
                                                >
                                                    {detail}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity="success" 
                    sx={{ 
                        width: '100%',
                        '& .MuiAlert-icon': {
                            color: '#4caf50'
                        }
                    }}
                >
                    Thank you for your message! We will contact you shortly.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;