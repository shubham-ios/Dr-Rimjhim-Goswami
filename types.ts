import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  condition: string;
  quote: string;
  outcome: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  symptoms: string[];
  approach: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface MetricData {
  year: string;
  familiesHelped: number;
}
