import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  Zap, 
  Truck, 
  BarChart3, 
  LayoutDashboard, 
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Play,
  CheckCircle2,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

// Dynamic import for 3D Hero
const ThreeHero = lazy(() => import('../components/ThreeHero'));

function SkeletonHero() {
  return (
    <div className="w-full h-full glass rounded-[64px] animate-pulse flex items-center justify-center">
      <div className="text-brand-muted flex flex-col items-center gap-4">
        <div className="w-20 h-20 bg-brand-surface/40 rounded-full" />
        <div className="h-4 w-32 bg-brand-surface/40 rounded" />
      </div>
    </div>
  );
}

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-right hover:text-brand-primary transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <Minus className="text-brand-primary" /> : <Plus className="text-brand-muted" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="pb-6 text-brand-muted leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function LandingPage({ onOpenModal }: { onOpenModal: () => void }) {
  const { t, lang } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = t.features.items.map((item, i) => {
    const icons = [
      <LayoutDashboard className="w-8 h-8 text-brand-primary" />,
      <Zap className="w-8 h-8 text-brand-accent" />,
      <Truck className="w-8 h-8 text-brand-glow" />,
      <BarChart3 className="w-8 h-8 text-brand-primary" />,
      <ShieldCheck className="w-8 h-8 text-brand-accent" />,
      <Star className="w-8 h-8 text-brand-glow" />,
    ];
    const targets = ['hero', 'pricing', 'how-it-works', 'pricing', 'pricing', 'faq'];
    return { ...item, icon: icons[i], target: targets[i] };
  });

  const whyNowIcons = [
    <Users className="w-8 h-8 text-brand-primary" />,
    <TrendingUp className="w-8 h-8 text-brand-accent" />,
    <Clock className="w-8 h-8 text-brand-glow" />
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: lang === 'AR' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-brand-muted mb-10 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenModal}
                className="bg-brand-primary text-brand-bg px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all glow-primary flex items-center gap-2"
              >
                {t.hero.ctaPrimary}
                {lang === 'AR' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass px-10 py-4 rounded-2xl font-bold text-lg hover:bg-brand-surface/60 transition-all flex items-center gap-2"
              >
                <Play size={18} fill="currentColor" />
                {t.hero.ctaSecondary}
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-brand-border pt-8">
              <div>
                <div className="text-2xl font-bold font-display text-brand-primary">+٥٠٠</div>
                <div className="text-sm text-brand-muted">{t.hero.stats.stores}</div>
              </div>
              <div className="w-px h-10 bg-brand-border" />
              <div>
                <div className="text-2xl font-bold font-display text-brand-accent">+١٠ آلاف</div>
                <div className="text-sm text-brand-muted">{t.hero.stats.orders}</div>
              </div>
              <div className="w-px h-10 bg-brand-border" />
              <div>
                <div className="text-2xl font-bold font-display text-brand-glow">٠٪</div>
                <div className="text-sm text-brand-muted">{t.hero.stats.commission}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-[64px] blur-3xl -z-10" />
            <div className="w-full h-full glass rounded-[64px] overflow-hidden border-brand-border/50 relative group">
              <img 
                src="/assets/mahallk-hero.png" 
                alt="السوق المصغر — توضيح لمنصة تسوق محلية تعرض التسوق والتاجر عبر واجهات رقمية"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width="1200"
                height="800"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 right-12 glass p-4 rounded-2xl border-brand-primary/30 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted">New Order</div>
                    <div className="text-sm font-bold">EGP 450.00</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 left-12 glass p-4 rounded-2xl border-brand-accent/30 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center">
                    <Truck className="text-brand-accent" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted">Delivery Status</div>
                    <div className="text-sm font-bold">On the way</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-brand-muted" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-brand-surface/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">{t.about.title}</h2>
          <p className="text-xl text-brand-muted leading-relaxed">
            {t.about.content}
          </p>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.whyNow.title}</h2>
            <p className="text-brand-muted">{t.whyNow.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.whyNow.items.map((item, i) => (
              <div key={i} className="glass p-10 rounded-[32px] border-t-4 border-t-brand-primary">
                <div className="mb-6">{whyNowIcons[i]}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-brand-surface/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.features.title}</h2>
            <p className="text-brand-muted">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => {
                  const element = document.getElementById(f.target);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass p-8 rounded-[32px] group transition-all hover:border-brand-primary/30 text-right cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-brand-muted leading-relaxed">{f.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.categories.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.categories.items.map((cat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-center hover:border-brand-primary transition-all group cursor-default">
                <div className="font-bold mb-2 group-hover:text-brand-primary transition-colors">{cat.name}</div>
                <p className="text-xs text-brand-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 bg-brand-surface/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.howItWorks.title}</h2>
            <p className="text-brand-muted">{t.howItWorks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-primary/10 hidden md:block -translate-y-1/2" />
            {t.howItWorks.steps.map((s, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-brand-primary text-brand-bg rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 glow-primary">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-brand-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="glass p-8 rounded-[32px] relative">
                <div className="flex gap-1 text-brand-accent mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg mb-8 italic text-brand-muted leading-relaxed">"{test.content}"</p>
                <div>
                  <div className="font-bold">{test.name}</div>
                  <div className="text-sm text-brand-primary">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.pricing.title}</h2>
            <p className="text-brand-muted mb-8">{t.pricing.subtitle}</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={cn("text-sm font-bold", billingCycle === 'monthly' ? "text-brand-text" : "text-brand-muted")}>
                {t.pricing.monthly}
              </span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-8 glass rounded-full relative p-1 transition-all"
              >
                <motion.div 
                  animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                  className="w-6 h-6 bg-brand-primary rounded-full shadow-lg"
                />
              </button>
              <span className={cn("text-sm font-bold", billingCycle === 'yearly' ? "text-brand-text" : "text-brand-muted")}>
                {t.pricing.yearly}
              </span>
              <span className="bg-brand-accent/20 text-brand-accent text-[10px] font-bold px-2 py-1 rounded-full">
                {t.pricing.save}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.pricing.tiers.map((p, i) => (
              <div
                key={i}
                className={cn(
                  "glass p-8 rounded-[32px] relative flex flex-col",
                  p.isPopular && "border-brand-primary shadow-[0_0_40px_rgba(19,198,182,0.15)]"
                )}
              >
                {p.isPopular && (
                  <div className="absolute -top-4 right-8 bg-brand-primary text-brand-bg px-4 py-1 rounded-full text-sm font-bold">
                    {lang === 'AR' ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                {p.badge && (
                  <div className="absolute -top-4 right-8 bg-brand-accent text-brand-bg px-4 py-1 rounded-full text-sm font-bold">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black font-display">
                    {billingCycle === 'yearly' && p.price !== '٠' && p.price !== '0' 
                      ? Math.floor(parseInt(p.price) * 0.8) 
                      : p.price}
                  </span>
                  <span className="text-brand-muted mr-2">{p.period}</span>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-brand-primary" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onOpenModal}
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-all",
                    p.isPopular ? "bg-brand-primary text-brand-bg glow-primary" : "glass hover:bg-brand-surface/60"
                  )}
                >
                  {lang === 'AR' ? 'اشترك الآن' : 'Subscribe Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-brand-surface/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">{t.faq.title}</h2>
          </div>
          <div className="glass rounded-[32px] p-8">
            {t.faq.items.map((f, i) => <FAQAccordion key={i} question={f.question} answer={f.answer} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
            {lang === 'AR' ? 'جاهز تبدأ رحلة النجاح؟' : 'Ready to start your success journey?'}
          </h2>
          <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
            {lang === 'AR' 
              ? 'انضم لمئات التجار في جرجا اللي اختاروا "محلك" عشان يكونوا جزء من المستقبل الرقمي.'
              : 'Join hundreds of merchants in Gerga who chose "Mahalk" to be part of the digital future.'}
          </p>
          <button
            onClick={onOpenModal}
            className="bg-brand-primary text-brand-bg px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all glow-primary"
          >
            {lang === 'AR' ? 'سجل متجرك الآن مجاناً' : 'Register your store now for free'}
          </button>
        </div>
      </section>
    </div>
  );
}
