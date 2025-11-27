import { Testimonial, Service, BlogPost, MetricData } from './types';
import { Baby, Brain, Heart, Droplets, Sparkles, Activity, Wind, Utensils, Bone, Dna, Shield, Filter, Ear, Zap, ShieldCheck, Clock, Sprout, Flower2, Apple, Dumbbell, Leaf, Moon, Sun, Stethoscope } from 'lucide-react';

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
    name: "Anupama Rathour",
    condition: "Vertigo",
    quote: "I have visited Dr rimjhim clinic for vertigo treatment. I have got best results. She is very polite and friendly. Treatment is very effective and cost effective.",
    outcome: ""
  },
  {
    id: 2,
    name: "Akshat",
    condition: "Hair Issues",
    quote: "I have visited Dr rimjhim clinic for hair treatment. I have got best results in three months. She is very polite and knowledgeable. Treatment is very effective and cost effective.",
    outcome: ""
  },
  {
    id: 3,
    name: "Aditi Dubey",
    condition: "Migrane",
    quote: "Mujhe migrane ki dikkat thi mene maam ke paas dikhaya to mujhe bahut jaldi result mila. Treatment ka price bhi bahut sahi h. Thanks maam",
    outcome: ""
  }
];

export const CONDITIONS: Service[] = [
  {
    id: 'infertility',
    title: 'Infertility',
    description: 'Natural protocols to improve reproductive health for couples struggling to conceive.',
    icon: Sprout
  },
  {
    id: 'women',
    title: "Women's Health",
    description: 'Holistic care for PCOS, fibroids, endometriosis, and hormonal imbalances.',
    icon: Moon
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
    icon: Baby
  },
  {
    id: 'mind',
    title: 'Mind & Autism',
    description: 'Supportive therapies for Autism Spectrum, anxiety, and behavioral health.',
    icon: Brain
  },
  {
    id: 'respiratory',
    title: 'Respiratory & Allergies',
    description: 'Managing chronic asthma, bronchitis, and allergic rhinitis by strengthening the body\'s natural respiratory defense.',
    icon: Wind
  },
  {
    id: 'gut',
    title: 'Gut & Digestion',
    description: 'Effective relief for IBS, acidity, gastritis, and piles through constitutional treatments that restore digestive balance.',
    icon: Apple
  },
  {
    id: 'joint',
    title: 'Joint & Musculoskeletal',
    description: 'Non-invasive pain management for arthritis, spondylitis, and sciatica, focusing on mobility and inflammation reduction.',
    icon: Bone
  },
  {
    id: 'metabolic',
    title: 'Metabolic & Lifestyle',
    description: 'Holistic management of Thyroid disorders, Diabetes, and hypertension by addressing the underlying metabolic root causes.',
    icon: Dna
  },
  {
    id: 'mens',
    title: 'Men\'s Health',
    description: 'Confidential and effective care for prostate issues, sexual health, and vitality, tailored specifically for men\'s wellness.',
    icon: Sun
  },
  {
    id: 'liver',
    title: 'Liver & Gallbladder Health',
    description: 'Non-surgical protocols for Fatty Liver, Gallstones, and Jaundice, focusing on detoxification and liver function restoration.',
    icon: Stethoscope
  },
  {
    id: 'sinus',
    title: 'ENT & Sinus Care',
    description: 'Gentle holistic cures for chronic Sinusitis, Tonsillitis, Nasal Polyps, and Adenoids, preventing the need for surgical removal.',
    icon: Ear
  },
  {
    id: 'nerve',
    title: 'Neurological & Nerve Care',
    description: 'Specialized management for Migraines, Vertigo, Neuralgia, and Paralysis by soothing nerve inflammation and restoring signaling.',
    icon: Activity
  },
  {
    id: 'autoimmune',
    title: 'Autoimmune & Immunity',
    description: 'Constitutional modulation for complex autoimmune disorders like Lupus and Rheumatoid conditions, helping the immune system stop attacking healthy cells.',
    icon: ShieldCheck
  },
  {
    id: 'geriatric',
    title: 'Geriatric & Senior Wellness',
    description: 'Supportive care for age-related concerns including memory loss, trembling, prostate health, and general vitality in senior years.',
    icon: Clock
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
