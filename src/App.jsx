import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { Hero } from './sections/Hero';
import { Materials } from './sections/Materials';
import { Delivery } from './sections/Delivery';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { HowItWorks } from './sections/HowItWorks';
import { Fleet } from './sections/Fleet';
import { About } from './sections/About';
import { GovtProjects } from './sections/GovtProjects';
import { ServiceArea } from './sections/ServiceArea';
import { Contact } from './sections/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentView]);

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        doScroll(id);
      }, 100);
      return;
    }
    doScroll(id);
  };

  const doScroll = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleGetQuote = (materialId = '') => {
    setSelectedMaterial(materialId);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <Header onNavigate={scrollToSection} />
      
      {currentView === 'home' && (
        <main className="w-full pt-[calc(5rem+env(safe-area-inset-top))]">
          <Hero onGetQuote={() => handleGetQuote()} />
          <Materials onRequestQuote={handleGetQuote} />
          <Delivery onRequestQuote={() => handleGetQuote()} />
          <WhyChooseUs />
          <HowItWorks />
          <Fleet />
          <About />
          <GovtProjects />
          <ServiceArea onGetQuote={() => handleGetQuote()} />
          <Contact selectedMaterial={selectedMaterial} />
        </main>
      )}

      {currentView === 'privacy' && <PrivacyPolicy />}
      {currentView === 'terms' && <TermsOfService />}

      <Footer onNavigateTo={scrollToSection} onViewChange={setCurrentView} />
      <MobileActionBar onQuoteClick={() => handleGetQuote()} />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
