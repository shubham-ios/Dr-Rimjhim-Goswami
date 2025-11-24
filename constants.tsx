import { Testimonial, Service, BlogPost, MetricData } from './types';
import { Baby, Brain, Heart, Droplets, Sparkles, Activity } from 'lucide-react';

export const METRO_STORY = `
During her internship at Bakson Homeopathic Medical College, Dr. Rimjhim encountered a man on the metro who noticed her medical coat. 
He shared his 12-year struggle with infertility—his wife had undergone three failed IVF procedures. 
She began treating them homeopathically. After three months without results, he secretly pursued a fourth IVF, which caused organ damage to his wife. 
Returning to Dr. Rimjhim's care, both partners committed to six months of rigorous homeopathic treatment. 
Result: Natural conception, followed by a second child a year later without any medical intervention.
`;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rajesh K.",
    condition: "Infertility",
    quote: "We had lost hope after multiple IVF cycles. Dr. Rimjhim didn't just treat our bodies; she healed our hope. Our twins are now 2 years old.",
    outcome: "Natural Conception after 8 years"
  },
  {
    id: 2,
    name: "Sarah M.",
    condition: "PCOS & Skin Issues",
    quote: "I was told hormonal pills were my only option. Homeopathy changed my life without a single side effect.",
    outcome: "Regular cycles & clear skin"
  },
  {
    id: 3,
    name: "Amit V.",
    condition: "Chronic Kidney Stones",
    quote: "The pain was unbearable, and surgery seemed inevitable. Dr. Rimjhim's approach dissolved the stones naturally.",
    outcome: "Stone-free for 3 years"
  }
];

export const CONDITIONS: Service[] = [
  {
    id: 'infertility',
    title: 'Infertility',
    description: 'Natural protocols to improve reproductive health for couples struggling to conceive.',
    icon: Baby
  },
  {
    id: 'women',
    title: "Women's Health",
    description: 'Holistic care for PCOS, fibroids, endometriosis, and hormonal imbalances.',
    icon: Heart
  },
  {
    id: 'dermatology',
    title: 'Skin & Hair',
    description: 'Treating Vitiligo, Eczema, Psoriasis, and Alopecia from the root cause.',
    icon: Sparkles
  },
  {
    id: 'kidney',
    title: 'Renal Care',
    description: 'Non-surgical management of kidney stones and recurring urinary issues.',
    icon: Droplets
  },
  {
    id: 'paediatric',
    title: 'Paediatric Care',
    description: 'Gentle healing for immunity, growth, and developmental concerns.',
    icon: Activity
  },
  {
    id: 'mind',
    title: 'Mind & Autism',
    description: 'Supportive therapies for Autism Spectrum, anxiety, and behavioral health.',
    icon: Brain
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Science Behind Homeopathy & Fertility",
    category: "Infertility",
    excerpt: "Understanding how constitutional medicine impacts reproductive hormones naturally.",
    date: "Oct 12, 2023",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Myths About PCOS You Need to Stop Believing",
    category: "Women's Health",
    excerpt: "Why suppression isn't the answer and how to listen to your body's signals.",
    date: "Oct 05, 2023",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Healing Vitiligo: A Patient's Journey",
    category: "Patient Stories",
    excerpt: "Real results take time. A look into the patience and protocol required for skin healing.",
    date: "Sep 28, 2023",
    readTime: "6 min read"
  }
];

export const IMPACT_DATA: MetricData[] = [
  { year: '2017', familiesHelped: 45 },
  { year: '2018', familiesHelped: 120 },
  { year: '2019', familiesHelped: 210 },
  { year: '2020', familiesHelped: 300 },
  { year: '2021', familiesHelped: 380 },
  { year: '2022', familiesHelped: 450 },
  { year: '2023', familiesHelped: 500 },
];
