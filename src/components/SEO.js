// components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url, imageUrl }) => {
    const schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        name: 'VD Electronic Security Services',
        description: description,
        url: url,
        telephone: '+91-9619243384',
        email: 'vrindadey2023@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'Mumbai, Maharashtra',
        },
        serviceType: 'CCTV Installation, Biometric Systems, Security Solutions',
        areaServed: 'Mumbai',
        openingHours: 'Mo-Sa 09:00-18:00',
        priceRange: '₹₹',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Security Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'CCTV Installation'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Biometric Attendance Systems'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Door Access Control'
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="CCTV installation, biometric attendance system, door access control, security services, CCTV maintenance, Mumbai security, electronic security, surveillance systems" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="VD Electronic Security Services" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content="VD Electronic Security Services" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:site" content="@vdelectronicsecurity" />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#0e2e71" />
            <meta name="msapplication-TileColor" content="#0e2e71" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="VD Security" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
        </Helmet>
    );
};

export default SEO;