import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONDITIONS } from '../constants';
import { Link } from 'react-router-dom';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CONDITIONS.map((condition, index) => {
        const Icon = condition.icon;
        return (
          <Link
            key={condition.id}
            to={`/services#${condition.id}`}
            className={`group p-8 rounded-3xl transition-all duration-300 border border-transparent hover:border-clay/20 hover:shadow-xl
              ${index === 0 ? 'bg-sage text-white md:col-span-2 md:row-span-1' : 'bg-white hover:bg-[#FDFBF7]'}
            `}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className={`p-3 rounded-2xl w-fit mb-6 ${index === 0 ? 'bg-white/10' : 'bg-oatmeal text-sage'}`}>
                  <Icon size={28} />
                </div>
                <h3 className={`font-serif text-2xl mb-3 ${index === 0 ? 'text-white' : 'text-sage'}`}>
                  {condition.title}
                </h3>
                <p className={`leading-relaxed mb-6 ${index === 0 ? 'text-white/80 max-w-xl' : 'text-charcoal/70'}`}>
                  {condition.description}
                </p>
              </div>

              <div className="flex items-center gap-2 font-medium text-sm tracking-wide uppercase">
                <span className={index === 0 ? 'text-clay' : 'text-rose'}>Learn More</span>
                <ArrowRight size={16} className={`transform transition-transform group-hover:translate-x-1 ${index === 0 ? 'text-clay' : 'text-rose'}`} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BentoGrid;
