import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyTrustMe from '../components/home/WhyTrustMe';
import ProcessTimeline from '../components/home/ProcessTimeline';
import PortfolioPreview from '../components/home/PortfolioPreview';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <div>
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
