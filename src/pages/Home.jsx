import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyTrustMe from '../components/home/WhyTrustMe';
import ProcessTimeline from '../components/home/ProcessTimeline';
import PortfolioPreview from '../components/home/PortfolioPreview';
import FinalCTA from '../components/home/FinalCTA';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO
        title="Premium Web Design & Digital Growth"
        description="Webkaro is a premier digital agency specializing in high-converting websites, branding, and digital marketing strategies to help your business scale."
        keywords="digital agency, web design, web development, branding, digital marketing, SEO, Webkaro"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Webkaro",
          "image": "https://webkaro.in/logo.png",
          "@id": "https://webkaro.in",
          "url": "https://webkaro.in",
          "telephone": "+91 88511 51976",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Remote",
            "addressLocality": "India",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6139,
            "longitude": 77.2090
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.linkedin.com/company/webkaro"
          ]
        })}
      </script>
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
