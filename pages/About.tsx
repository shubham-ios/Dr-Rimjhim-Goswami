import React from 'react';
import Layout from '../components/Layout';
import { METRO_STORY, IMPACT_DATA } from '../constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import drRimjhimImg from '../assets/dr.rimjhim_1.png';

const About: React.FC = () => {
  return (
    <>
      <title>Our Mission | Dr. Rimjhim Goswami</title>
      <meta name="description" content="The inspiring story behind our practice. Read about Dr. Rimjhim's mission to cure the patient, not just the disease, using holistic homeopathy." />

      <Layout>
        <div className="bg-oatmeal pt-12 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl text-sage mb-6">Curing the Patient, Not Just the Disease</h1>
              <div className="h-1 w-20 bg-clay mx-auto rounded-full"></div>
            </div>

            {/* Intro Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="prose prose-lg text-charcoal/80">
                <p className="mb-6">
                  Dr. Rimjhim Goswami represents a new generation of homeopathic physicians who bridge the gap between traditional wisdom and modern lifestyle challenges.
                </p>
                <p>
                  With over 7 years of clinical experience, she has dedicated her practice to solving "unsolvable" cases—particularly in infertility and chronic autoimmune disorders—where conventional medicine often focuses solely on symptom suppression.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl max-w-sm mx-auto">
                  <img src={drRimjhimImg} alt="Dr. Rimjhim Goswami" className="w-full h-full object-cover object-top" />
                  {/* <img src="https://picsum.photos/600/600?grayscale&blur=2" alt="Dr. Rimjhim" className="w-full h-full object-cover" /> */}
                </div>
              </div>
            </div>

            {/* The Story */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -mr-16 -mt-16"></div>

              <h2 className="font-serif text-3xl text-sage mb-8 relative z-10">The Metro Encounter: Where It Began</h2>
              <div className="space-y-6 text-charcoal/80 leading-relaxed relative z-10">
                {METRO_STORY.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="font-medium text-clay italic">
                  "This experience taught me that healing requires patience, trust, and looking at the whole person, not just the lab reports." — Dr. Rimjhim
                </p>
              </div>
            </div>

            {/* Impact Chart */}
            {/* <div className="mb-20">
              <h2 className="font-serif text-3xl text-sage mb-2 text-center">Growing Impact</h2>
              <p className="text-center text-charcoal/60 mb-10">Families helped annually through our holistic protocols</p>
              
              <div className="h-[300px] w-full bg-white p-6 rounded-2xl shadow-sm">
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={IMPACT_DATA}>
                          <defs>
                              <linearGradient id="colorFamilies" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#2E5C55" stopOpacity={0.2}/>
                                  <stop offset="95%" stopColor="#2E5C55" stopOpacity={0}/>
                              </linearGradient>
                          </defs>
                          <XAxis dataKey="year" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                          <Tooltip 
                              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                              itemStyle={{ color: '#2E5C55' }}
                          />
                          <Area type="monotone" dataKey="familiesHelped" stroke="#2E5C55" strokeWidth={3} fillOpacity={1} fill="url(#colorFamilies)" />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
            </div> */}

          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;