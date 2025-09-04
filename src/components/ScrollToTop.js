// components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { Fab, Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: '20px', md: '30px' },
                right: { xs: '20px', md: '30px' },
                zIndex: 1000,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out',
                }
            }}
        >
            <Fab
                color="primary"
                size="medium"
                aria-label="scroll back to top"
                onClick={scrollToTop}
            >
                <KeyboardArrowUp />
            </Fab>
        </Box>
    );
};

export default ScrollToTop;