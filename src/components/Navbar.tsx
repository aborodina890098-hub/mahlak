import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Languages } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Mapping href to IDs
    const sectionIds: Record<string, string> = {
      '/': 'hero',
      '/about': 'about',
      '/faq': 'faq',
      '/features': 'features',
      '/pricing': 'pricing'
    };

    const targetId = sectionIds[href];

    if (targetId) {
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        // If not on home, navigate to home with hash
        navigate(`/#${targetId}`);
        return;
      }
    }
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.features, href: '/features' },
    { name: t.nav.faq, href: '/faq' },
    { name: t.nav.caseStudy, href: '/portfolio' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center glow-primary transition-transform group-hover:scale-110">
            <ShoppingBag className="text-brand-bg w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-display text-brand-text tracking-tight">
            {lang === 'AR' ? 'محلك' : 'Mahalk'}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.href.startsWith('/') && !link.href.includes('portfolio')) {
                  handleNavClick(link.href);
                } else {
                  navigate(link.href);
                }
              }}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary cursor-pointer',
                location.pathname === link.href ? 'text-brand-primary' : 'text-brand-muted'
              )}
            >
              {link.name}
            </button>
          ))}
          
          <div className={cn("flex items-center gap-4 border-brand-border pr-8 mr-4", lang === 'AR' ? "border-r" : "border-l pl-8 ml-4 pr-0 mr-0")}>
            <button 
              onClick={toggleLang}
              className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 text-sm font-medium"
              title={lang === 'AR' ? "تغيير اللغة" : "Change Language"}
            >
              <Languages size={18} />
              <span>{lang === 'AR' ? 'EN' : 'AR'}</span>
            </button>
            <button
              onClick={onOpenModal}
              className="bg-brand-primary text-brand-bg px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all glow-primary active:scale-95"
            >
              {t.nav.startSelling}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.href.startsWith('/') && !link.href.includes('portfolio')) {
                    handleNavClick(link.href);
                  } else {
                    navigate(link.href);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={cn(
                  'text-lg font-medium py-2 border-b border-brand-border last:border-0 text-right w-full',
                  location.pathname === link.href ? 'text-brand-primary' : 'text-brand-muted'
                )}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="bg-brand-primary text-brand-bg w-full py-4 rounded-xl font-bold text-lg mt-2"
            >
              {t.nav.startSelling}
            </button>
            <button 
              onClick={toggleLang}
              className="text-brand-muted hover:text-brand-primary transition-colors flex items-center justify-center gap-2 text-lg font-medium py-4 border-t border-brand-border mt-2"
            >
              <Languages size={20} />
              <span>{lang === 'AR' ? 'English' : 'العربية'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
