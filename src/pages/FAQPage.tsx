import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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

export default function FAQPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="text-brand-primary w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display mb-8">{t.faq.title}</h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            كل اللي محتاج تعرفه عن منصة محلك وإزاي تبدأ رحلتك معانا في جرجا.
          </p>
        </motion.div>

        <div className="glass rounded-[48px] p-8 md:p-12">
          {t.faq.items.map((f, i) => (
            <FAQAccordion key={i} question={f.question} answer={f.answer} />
          ))}
        </div>

        <div className="mt-20 text-center glass p-12 rounded-[40px]">
          <h2 className="text-2xl font-bold mb-4">لسه عندك أسئلة؟</h2>
          <p className="text-brand-muted mb-8">فريقنا جاهز يجاوب على كل استفساراتك على الواتساب.</p>
          <a 
            href="https://wa.me/201234567890" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-brand-bg px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all glow-primary"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </div>
  );
}
