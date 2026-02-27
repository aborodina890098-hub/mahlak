import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Store, User, Phone, MapPin, Tag, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function MerchantModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    phone: '',
    category: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage
    const existingRequests = JSON.parse(localStorage.getItem('mahalk_requests') || '[]');
    localStorage.setItem('mahalk_requests', JSON.stringify([...existingRequests, { ...formData, date: new Date().toISOString() }]));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 p-2 text-brand-muted hover:text-brand-text transition-colors",
                lang === 'AR' ? "left-4" : "right-4"
              )}
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-display mb-2">{t.modal.title}</h2>
                    <p className="text-brand-muted">{t.modal.subtitle}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      <div className="relative">
                        <Store className={cn("absolute top-1/2 -translate-y-1/2 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <input
                          required
                          type="text"
                          placeholder={t.modal.storeName}
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.storeName}
                          onChange={e => setFormData({ ...formData, storeName: e.target.value })}
                        />
                      </div>
                      
                      <div className="relative">
                        <User className={cn("absolute top-1/2 -translate-y-1/2 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <input
                          required
                          type="text"
                          placeholder={t.modal.ownerName}
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.ownerName}
                          onChange={e => setFormData({ ...formData, ownerName: e.target.value })}
                        />
                      </div>

                      <div className="relative">
                        <Phone className={cn("absolute top-1/2 -translate-y-1/2 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <input
                          required
                          type="tel"
                          placeholder={t.modal.phone}
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="relative">
                        <Tag className={cn("absolute top-1/2 -translate-y-1/2 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <select
                          required
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors appearance-none",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.category}
                          onChange={e => setFormData({ ...formData, category: e.target.value })}
                        >
                          <option value="" disabled>{t.modal.category}</option>
                          {t.modal.categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      <div className="relative">
                        <MapPin className={cn("absolute top-1/2 -translate-y-1/2 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <input
                          required
                          type="text"
                          placeholder={t.modal.address}
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.address}
                          onChange={e => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>

                      <div className="relative">
                        <MessageSquare className={cn("absolute top-3 text-brand-muted", lang === 'AR' ? "right-3" : "left-3")} size={18} />
                        <textarea
                          placeholder={t.modal.notes}
                          rows={3}
                          className={cn(
                            "w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 focus:border-brand-primary outline-none transition-colors",
                            lang === 'AR' ? "pr-10 pl-4" : "pl-10 pr-4"
                          )}
                          value={formData.notes}
                          onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        />
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className={cn(
                        "w-full bg-brand-primary text-brand-bg py-4 rounded-xl font-bold text-lg transition-all glow-primary mt-4",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"
                      )}
                    >
                      {isSubmitting ? t.modal.submitting : t.modal.submit}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="text-brand-primary w-12 h-12" />
                  </motion.div>
                  <h2 className="text-3xl font-bold font-display mb-4">{t.modal.success.title}</h2>
                  <p className="text-brand-muted mb-8 text-lg">
                    {t.modal.success.message}
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-brand-primary text-brand-bg px-8 py-3 rounded-xl font-bold"
                  >
                    {t.modal.success.close}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
