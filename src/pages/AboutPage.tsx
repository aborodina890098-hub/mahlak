import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const values = [
    { icon: <Target className="text-brand-primary" />, title: lang === 'AR' ? 'رؤيتنا' : 'Our Vision', desc: lang === 'AR' ? 'تمكين كل تاجر في جرجا من الوصول لعملائه رقمياً.' : 'Empowering every merchant in Gerga to reach their customers digitally.' },
    { icon: <Users className="text-brand-accent" />, title: lang === 'AR' ? 'مجتمعنا' : 'Our Community', desc: lang === 'AR' ? 'بناء شبكة قوية تربط بين التاجر والمندوب والعميل.' : 'Building a strong network connecting merchant, courier, and customer.' },
    { icon: <ShieldCheck className="text-brand-glow" />, title: lang === 'AR' ? 'قيمنا' : 'Our Values', desc: lang === 'AR' ? 'الشفافية، السرعة، ودعم الاقتصاد المحلي.' : 'Transparency, speed, and supporting the local economy.' },
    { icon: <Zap className="text-brand-primary" />, title: lang === 'AR' ? 'ابتكارنا' : 'Our Innovation', desc: lang === 'AR' ? 'استخدام أحدث التقنيات لتبسيط تجارة التجزئة.' : 'Using the latest technologies to simplify retail trade.' }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black font-display mb-8">{t.about.title}</h1>
          <div className="w-24 h-2 bg-brand-primary rounded-full mx-auto mb-12" />
          <p className="text-2xl text-brand-muted max-w-4xl mx-auto leading-relaxed">
            {t.about.content}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((v, i) => (
            <div key={i} className="glass p-8 rounded-[32px] text-center">
              <div className="w-16 h-16 bg-brand-surface/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-brand-muted">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass p-12 rounded-[48px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display mb-6">{lang === 'AR' ? 'قصتنا' : 'Our Story'}</h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              {lang === 'AR' 
                ? 'بدأت فكرة "محلك" من قلب شوارع جرجا، لما لاحظنا الفجوة الكبيرة بين المتاجر التقليدية والتحول الرقمي السريع. قررنا نبني منصة مش بس بتعرض المنتجات، لكن بتوفر نظام متكامل بيساعد التاجر يطور شغله وينافس في العصر الجديد.'
                : 'The idea of "Mahalk" started from the heart of Gerga\'s streets, when we noticed the large gap between traditional stores and rapid digital transformation. We decided to build a platform that doesn\'t just display products, but provides an integrated system that helps the merchant develop their business and compete in the new era.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
