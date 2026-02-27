import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Facebook, Instagram, Mail, X, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useLanguage();

  const socialLinks = [
    {
      name: t.contactWidget.whatsapp,
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/201234567890', // Replace with real number if available
      color: 'bg-[#25D366]',
    },
    {
      name: t.contactWidget.facebook,
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/profile.php?id=61588600580615',
      color: 'bg-[#1877F2]',
    },
    {
      name: t.contactWidget.instagram,
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/mhlk2118/',
      color: 'bg-[#E4405F]',
    },
    {
      name: t.contactWidget.email,
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:contact@mahalk.com',
      color: 'bg-[#EA4335]',
    },
  ];

  return (
    <div className={cn(
      "fixed bottom-8 z-[60] flex flex-col items-center",
      lang === 'AR' ? "left-8" : "right-8"
    )}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-4"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: lang === 'AR' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform",
                  link.color
                )}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-brand-bg shadow-2xl transition-all glow-primary",
          isOpen ? "bg-brand-text rotate-90" : "bg-brand-primary"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
