import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail, ShoppingBag, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
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
        navigate(`/#${targetId}`);
        return;
      }
    }
  };

  return (
    <footer className="bg-brand-surface/40 border-t border-brand-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center glow-primary">
                <ShoppingBag className="text-brand-bg w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display text-brand-text">
                {lang === 'AR' ? 'محلك' : 'Mahalk'}
              </span>
            </Link>
            <p className="text-brand-muted leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61588600580615" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/mhlk2118/" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4 text-brand-muted">
              <li>
                <button 
                  onClick={() => handleNavClick('/')} 
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/about')} 
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-primary transition-colors">
                  {t.nav.caseStudy}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/faq')} 
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">{t.footer.support}</h3>
            <ul className="space-y-4 text-brand-muted">
              <li><Link to="/privacy" className="hover:text-brand-primary transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-brand-primary transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4 text-brand-muted">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary" />
                <a href="mailto:contact@mahalk.com" className="hover:text-brand-primary transition-colors">contact@mahalk.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-brand-primary mt-1 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gerga,Sohag,Egypt" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-brand-primary transition-all flex flex-col"
                >
                  <span>{lang === 'AR' ? 'جرجا، سوهاج، مصر' : 'Gerga, Sohag, Egypt'}</span>
                  <span className="text-xs text-brand-primary font-bold mt-1 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'AR' ? 'عرض على الخريطة ←' : 'View on map ←'}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
          <p>© {currentYear} {lang === 'AR' ? 'محلك. جميع الحقوق محفوظة.' : 'Mahalk. All rights reserved.'}</p>
          <p>{lang === 'AR' ? 'صنع بكل حب في سوهاج ❤️' : 'Made with love in Sohag ❤️'}</p>
        </div>
      </div>
    </footer>
  );
}
