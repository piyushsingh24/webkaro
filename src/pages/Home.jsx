import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyTrustMe from '../components/home/WhyTrustMe';
import ProcessTimeline from '../components/home/ProcessTimeline';
import PortfolioPreview from '../components/home/PortfolioPreview';
import FinalCTA from '../components/home/FinalCTA';
import SEO from '../components/SEO';

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <SEO
        title="Premium Web Design & Digital Growth"
        description="Webkaro is a premier digital agency specializing in high-converting websites, branding, and digital marketing strategies to help your business scale."
        keywords="digital agency, web design, web development, branding, digital marketing, SEO, Webkaro"
        canonical="/"
        location={location.pathname}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Webkaro",
          "url": "https://webkaro.in",
          "logo": "https://webkaro.in/logo.png",
          "description": "Webkaro is a premium digital agency offering web development and design services.",
          "telephone": "+91 88511 51976",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "India",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.linkedin.com/company/webkaro"
          ]
        }}
      />
      <Hero />
      <ServicesPreview />
      <WhyTrustMe />
      <ProcessTimeline />
      <PortfolioPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;
