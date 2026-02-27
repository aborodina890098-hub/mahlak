import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

type Language = 'AR' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.AR;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('AR');

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.documentElement.dir = newLang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang === 'AR' ? 'ar' : 'en';
    localStorage.setItem('mahalk_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'AR' ? 'EN' : 'AR');
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('mahalk_lang') as Language;
    if (savedLang) {
      setLang(savedLang);
    } else {
      setLang('AR');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
