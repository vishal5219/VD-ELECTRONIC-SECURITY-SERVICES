// App.js - Updated for Vercel
import React, { lazy, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import Custom404 from './components/Custom404';
import SEO from './components/SEO';
import './App.css';

// Lazy load components for code splitting
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a56db',
      dark: '#0e2e71',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <SEO
            title="VD Electronic Security Services | CCTV & Biometric Solutions"
            description="Professional CCTV installation, biometric attendance systems, and door access solutions. Trusted, affordable security services for offices, homes, and shops."
            url={process.env.REACT_APP_URL || "https://vdelectronicscurity.vercel.app"}
            imageUrl={process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}/og-image.svg` : "https://vdelectronicscurity.vercel.app/og-image.svg"}
          />
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <WhyChooseUs />
                  <Contact />
                </>
              } />
              <Route path="*" element={<Custom404 />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;