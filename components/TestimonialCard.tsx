import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow duration-300">
      <Quote className="absolute top-6 left-6 text-sage/10 w-12 h-12 rotate-180" />
      <div className="relative z-10 pt-4">
        <p className="font-serif text-lg leading-relaxed text-charcoal/80 mb-6 italic">
          "{data.quote}"
        </p>
        <div className="border-t border-gray-100 pt-4">
          <p className="font-bold text-sage">{data.name}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-clay">{data.condition}</span>
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{data.outcome}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
