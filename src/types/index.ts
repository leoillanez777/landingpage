export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  gradient: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  centerType: string;
  message?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  metric: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'gradient';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'primary';

export type GlassIntensity = 'light' | 'medium' | 'heavy';
export type GlassVariant = 'light' | 'medium' | 'heavy' | 'dark' | 'primary' | 'secondary';