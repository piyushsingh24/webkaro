import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import TopCompany from "./components/layout/TopCompany";
import FloatingButtons from "./components/layout/FloatingButtons";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";
import CustomCursor from "./components/layout/CustomCursor";
import GeminiChatBot from "./components/layout/GeminiChatBot";
import ScrollProgress from "./components/ui/ScrollProgress";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import LegalPrivacy from "./pages/LegalPrivacy";
import Terms from "./pages/Terms";

function App() {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen  flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <TopCompany />
      <CustomCursor />
      <GeminiChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <FloatingButtons onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <ScrollProgress />
      <main className="flex-grow">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<CaseStudy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/privacy" element={<LegalPrivacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}

export default App;
