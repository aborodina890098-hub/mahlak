import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import MerchantModal from './components/MerchantModal';
import ContactWidget from './components/ContactWidget';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/portfolio" element={<PortfolioPage onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/privacy" element={<LegalPage title={t.privacy.title} content={t.privacy.content} />} />
            <Route path="/terms" element={<LegalPage title={t.terms.title} content={t.terms.content} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactWidget />
        <MerchantModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
