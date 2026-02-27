export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
