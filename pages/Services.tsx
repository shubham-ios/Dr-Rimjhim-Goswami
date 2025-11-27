import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { CONDITIONS } from '../constants';

import { Link, useLocation } from 'react-router-dom';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Get the element's position
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                // Offset for fixed header (navbar height + some padding)
                const offsetPosition = elementPosition - 120; // 96px navbar + 24px extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-sage/10 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl text-sage mb-6">Conditions & Services</h1>
                    <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
                        Comprehensive homeopathic care tailored to your unique constitution.
                        We treat the root cause, not just the symptoms.
                    </p>
                </div>
            </div>

            {/* Conditions List */}
            <div className="container mx-auto px-4 py-16 space-y-24">
                {CONDITIONS.map((condition, index) => {
                    const Icon = condition.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={condition.id}
                            id={condition.id}
                            className={`flex flex-col md:flex-row gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon/Image Side */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="bg-oatmeal p-12 rounded-full shadow-inner">
                                    <Icon size={80} className="text-sage" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3 space-y-6">
                                <h2 className="font-serif text-3xl text-charcoal">{condition.title}</h2>
                                <p className="text-lg text-charcoal/70 leading-relaxed">
                                    {condition.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-white p-6 rounded-xl border border-sage/20 shadow-sm">
                                        <h3 className="font-bold text-sage mb-2">Common Symptoms</h3>
                                        <ul className="text-sm text-charcoal/60 list-disc list-inside space-y-1">
                                            {condition.symptoms.map((symptom, idx) => (
                                                <li key={idx}>{symptom}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-sage/20 shadow-sm">
                                        <h3 className="font-bold text-sage mb-2">Our Approach</h3>
                                        <p className="text-sm text-charcoal/60">
                                            {condition.approach}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="bg-sage text-white py-20 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to start your healing journey?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Book an appointment today and take the first step towards holistic wellness.
                    </p>
                    <button
                        onClick={() => window.location.href = 'tel:+917627005924'}
                        className="bg-rose text-white px-8 py-4 rounded-full font-medium hover:bg-rose/90 transition-colors shadow-lg shadow-rose/20"
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
