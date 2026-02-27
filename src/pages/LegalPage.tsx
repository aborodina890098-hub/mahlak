import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  title: string;
  content: {
    section: string;
    text: string;
  }[];
}

export default function LegalPage({ title, content }: LegalPageProps) {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black font-display mb-8">{title}</h1>
          <div className="w-24 h-2 bg-brand-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-12">
          {content.map((item, i) => (
            <section key={i} className="glass p-8 rounded-[32px]">
              <h2 className="text-2xl font-bold font-display mb-4 text-brand-primary">{item.section}</h2>
              <p className="text-brand-muted leading-relaxed text-lg whitespace-pre-line">
                {item.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
