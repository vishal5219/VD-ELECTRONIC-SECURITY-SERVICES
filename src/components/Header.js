// components/Header.js
import React, { useState, useEffect, useMemo } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Divider,
} from '@mui/material';
import {
    Phone,
    Menu as MenuIcon,
    Close as CloseIcon,
    Home,
    Security,
    Star,
    ContactMail
} from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Use useMemo to prevent recreation on every render
    const menuItems = useMemo(() => [
        { name: 'Home', target: 'home', icon: <Home /> },
        { name: 'Services', target: 'services', icon: <Security /> },
        { name: 'Why Choose Us', target: 'why-choose-us', icon: <Star /> },
        { name: 'Contact', target: 'contact', icon: <ContactMail /> },
    ], []); // Empty dependency array means this only gets created once

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.target);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuItems]); // Now menuItems is stable thanks to useMemo

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleNavClick = (target) => {
        setActiveSection(target);
        if (isMobile) {
            setDrawerOpen(false);
        }
    };

    const drawerContent = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ width: 280 }}
        >
            {/* Header */}
            <Box sx={{
                p: 2,
                backgroundColor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Menu
                </Typography>
                <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{ color: 'white' }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            {/* Menu Items */}
            <List sx={{ pt: 0 }}>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        key={item.name}
                        component={ScrollLink}
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleNavClick(item.target)}
                        sx={{
                            borderLeft: activeSection === item.target ? '4px solid #ff9800' : '4px solid transparent',
                            backgroundColor: activeSection === item.target ? 'rgba(255, 152, 0, 0.1)' : 'transparent',
                            '&:hover': {
                                backgroundColor: activeSection === item.target
                                    ? 'rgba(255, 152, 0, 0.15)'
                                    : 'rgba(0, 0, 0, 0.04)',
                            },
                            transition: 'all 0.3s ease',
                            py: 2,
                        }}
                    >
                        <ListItemIcon sx={{
                            color: activeSection === item.target ? '#ff9800' : 'inherit',
                            minWidth: 40
                        }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.name}
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontWeight: activeSection === item.target ? 600 : 400,
                                    color: activeSection === item.target ? '#ff9800' : 'inherit',
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>

            <Divider />

            {/* Contact Info */}
            <Box sx={{ p: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Contact Us
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Phone sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">
                        9619243384
                    </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    24/7 Emergency Support
                </Typography>
            </Box>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#0e2e71', py: 1 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' }
                }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/security-icon.svg`}
                        alt="Security"
                        style={{ marginRight: '10px', height: '30px', width: '30px' }}
                        loading="lazy"
                    />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        VD ELECTRONIC SECURITY SERVICES
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        VD SECURITY
                    </Box>
                </Typography>

                {!isMobile ? (
                    <>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {menuItems.map((item) => (
                                <Button
                                    color="inherit"
                                    key={item.name}
                                    component={ScrollLink}
                                    to={item.target}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => handleNavClick(item.target)}
                                    sx={{
                                        position: 'relative',
                                        fontWeight: activeSection === item.target ? 600 : 400,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: activeSection === item.target ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                                            width: '80%',
                                            height: '2px',
                                            backgroundColor: '#ff9800',
                                            transition: 'transform 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            transform: 'translateX(-50%) scaleX(1)',
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            color="inherit"
                            startIcon={<Phone />}
                            sx={{
                                ml: 2,
                                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            9619243384
                        </Button>
                    </>
                ) : (
                    <>
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    width: 280,
                                    backgroundColor: 'background.paper',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                }
                            }}
                        >
                            {drawerContent()}
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;