// components/ImageGallery.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageGallery = () => {
    const galleryImages = [
        {
            id: 1,
            title: 'CCTV Installation',
            description: 'Professional CCTV installation services with high-quality equipment',
            imageUrl: 'security-camera.png',
            alt: 'CCTV Installation Services'
        },
        {
            id: 2,
            title: 'Biometric Systems',
            description: 'Advanced biometric attendance and access control systems',
            imageUrl: 'fingerprint-machine.png',
            alt: 'Biometric Systems'
        },
        {
            id: 3,
            title: 'Access Control',
            description: 'Secure door access solutions for businesses and homes',
            imageUrl: 'cyber-security.png',
            alt: 'Access Control Systems'
        },
        {
            id: 4,
            title: 'AMC Services',
            description: 'Comprehensive Annual Maintenance Contracts for security systems',
            imageUrl: 'support-service.png',
            alt: 'AMC Services'
        }
    ];

    return (
        <Container id="gallery" sx={{ py: { xs: 6, md: 8 } }}>
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
                    Our Services in Action
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
                    Explore our professional security solutions through our project gallery
                </Typography>
            </Box>

            <Row className="justify-content-center">
                {galleryImages.map((item) => (
                    <Col xs={12} sm={6} md={3} key={item.id} className="mb-4">
                        <Box
                            sx={{
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                    mb: 2,
                                    backgroundColor: '#f5f7fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px'
                                }}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.alt}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1ZjdmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjODg4Ij5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="h6"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    mb: 1
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    lineHeight: 1.5,
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ImageGallery;