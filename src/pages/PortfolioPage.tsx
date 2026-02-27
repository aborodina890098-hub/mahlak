import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Rocket, 
  Target, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight,
  ArrowLeft,
  Truck,
  LayoutDashboard
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PortfolioPage({ onOpenModal }: { onOpenModal: () => void }) {
  const { t, lang } = useLanguage();
  
  const techStack = [
    { name: 'Next.js', icon: <Globe className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" /> },
    { name: 'Three.js', icon: <Database className="w-6 h-6" /> },
    { name: 'Framer Motion', icon: <Rocket className="w-6 h-6" /> },
  ];

  const techFeatures = t.portfolio.techFeatures.items.map((item, i) => {
    const icons = [<Smartphone />, <Database />, <Truck />];
    return { ...item, icon: icons[i] };
  });

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black font-display mb-6">{t.portfolio.title}</h1>
          <p className="text-2xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className={lang === 'AR' ? "text-right" : "text-left"}>
            <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
              <Target className="text-brand-primary" />
              {t.portfolio.overview.title}
            </h2>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>{t.portfolio.overview.p1}</p>
              <p>{t.portfolio.overview.p2}</p>
            </div>
          </div>
          <div className="glass p-8 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black font-display text-brand-primary mb-2">٢٠٢٥</div>
                <div className="text-sm text-brand-muted">{t.portfolio.stats.year}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black font-display text-brand-primary mb-2">{lang === 'AR' ? 'جرجا' : 'Gerga'}</div>
                <div className="text-sm text-brand-muted">{t.portfolio.stats.location}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black font-display text-brand-primary mb-2">+٥٠٠</div>
                <div className="text-sm text-brand-muted">{t.portfolio.stats.stores}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black font-display text-brand-primary mb-2">١٠٠٪</div>
                <div className="text-sm text-brand-muted">{t.portfolio.stats.support}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features (Visual) */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">{t.portfolio.techFeatures.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((f, i) => (
              <div key={i} className="glass p-10 rounded-[32px] text-center border-t-4 border-t-brand-primary">
                <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-brand-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey (SVG) */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">{t.portfolio.userJourney.title}</h2>
          <div className="glass p-12 rounded-[48px] overflow-hidden">
            <svg viewBox="0 0 800 200" className="w-full h-auto text-brand-primary">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
              </defs>
              <g className="font-sans text-sm font-bold">
                <rect x="50" y="75" width="150" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="125" y="105" textAnchor="middle" fill="white">{t.portfolio.userJourney.step1}</text>
                
                <line x1="200" y1="100" x2="290" y2="100" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                
                <rect x="300" y="75" width="150" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="375" y="105" textAnchor="middle" fill="white">{t.portfolio.userJourney.step2}</text>
                
                <line x1="450" y1="100" x2="540" y2="100" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                
                <rect x="550" y="75" width="150" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="625" y="105" textAnchor="middle" fill="white">{t.portfolio.userJourney.step3}</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">{t.portfolio.techUsed}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="glass px-8 py-4 rounded-2xl flex items-center gap-4 hover:border-brand-primary transition-all">
                <div className="text-brand-primary">{tech.icon}</div>
                <span className="font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery / Mockups */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">{t.portfolio.mockups.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video glass rounded-[32px] flex items-center justify-center p-12">
              <div className="w-full h-full border-2 border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-muted">
                <Smartphone size={48} className="mb-4" />
                <span className="font-bold">{t.portfolio.mockups.mobile}</span>
              </div>
            </div>
            <div className="aspect-video glass rounded-[32px] flex items-center justify-center p-12">
              <div className="w-full h-full border-2 border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-muted">
                <LayoutDashboard size={48} className="mb-4" />
                <span className="font-bold">{t.portfolio.mockups.dashboard}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto glass p-12 rounded-[48px] text-center">
          <h2 className="text-3xl font-bold font-display mb-6">{t.portfolio.results.title}</h2>
          <p className="text-xl text-brand-muted mb-10 leading-relaxed">
            {t.portfolio.results.content}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onOpenModal}
              className="bg-brand-primary text-brand-bg px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all glow-primary"
            >
              {t.portfolio.results.cta}
              {lang === 'AR' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
