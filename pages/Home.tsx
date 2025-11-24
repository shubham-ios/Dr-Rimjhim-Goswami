import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import BentoGrid from '../components/BentoGrid';
import { TESTIMONIALS, BLOG_POSTS } from '../constants';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import drRimjhimImg from '../assets/dr.rimjhim_4k.jpeg';
// import drRimjhimImg from '../assets/dr.rimjhim_1.png';
// import drRimjhimImg from '../assets/dr.rimjhim_2.png';


const Home: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  const headlines = [
    "Treating the whole person, not just symptoms—the homeopathic way.",
    "Helping couples complete their families, naturally."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <>
      <title>Dr. Rimjhim Goswami | Infertility Specialist & Homeopath</title>
      <meta name="description" content="Expert homeopathic treatment for infertility, PCOS, and chronic conditions. Helping couples complete their families naturally in Delhi NCR and online." />

      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              {/* Text Fade Transition Mockup */}
              <div className="mb-6 grid grid-cols-1 grid-rows-1">
                {headlines.map((text, idx) => (
                  <h1
                    key={idx}
                    className={`col-start-1 row-start-1 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-sage transition-opacity duration-1000 ${idx === heroIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    {text}
                  </h1>
                ))}
              </div>

              <p className="text-lg text-charcoal/70 mb-10 max-w-lg leading-relaxed">
                Experience the nurturing science of Dr. Rimjhim Goswami. A modern sanctuary for those seeking to cure the root cause of infertility and chronic conditions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link
                  to="/book"
                  className="bg-rose text-white px-8 py-4 rounded-full font-medium text-center hover:bg-rose/90 transition-colors shadow-lg shadow-rose/20"
                >
                  Book Your Consultation
                </Link> */}
                <a
                  href="tel:+917627005924"
                  className="bg-rose text-white px-8 py-4 rounded-full font-medium text-center hover:bg-rose/90 transition-colors shadow-lg shadow-rose/20"
                >
                  Book Your Consultation
                </a>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-full font-medium text-sage border border-sage/20 hover:bg-sage/5 transition-colors text-center"
                >
                  Our Mission
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm text-charcoal/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-oatmeal bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/100/100?random=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-clay">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-medium mt-0.5">500+ Families Helped</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={drRimjhimImg}
                  alt="Dr. Rimjhim Goswami"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage/80 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-serif text-2xl">Dr. Rimjhim Goswami</p>
                  <p className="text-white/80 text-sm tracking-wide uppercase mt-1">BHMS</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-clay/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-10 -left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-clay/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-sage mb-4">Trusted by families worldwide</h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <span className="flex items-center gap-2 text-charcoal/70 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={16} className="text-sage" /> 7+ Years Experience
                </span>
                <span className="flex items-center gap-2 text-charcoal/70 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={16} className="text-sage" /> Registered Medical Practitioner
                </span>
                <span className="flex items-center gap-2 text-charcoal/70 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={16} className="text-sage" /> Ethical Practice
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(t => <TestimonialCard key={t.id} data={t} />)}
            </div>
          </div>
        </section>

        {/* Conditions Grid (Bento) */}
        <section className="py-24 bg-oatmeal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex justify-between items-end">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl text-sage mb-6">Holistic Expertise</h2>
                <p className="text-charcoal/70 text-lg">
                  We specialize in complex chronic conditions where conventional medicine often reaches its limits.
                </p>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-rose font-medium hover:gap-3 transition-all">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>

            <BentoGrid />

            <div className="mt-8 text-center md:hidden">
              <Link to="/services" className="inline-flex items-center gap-2 text-rose font-medium">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Preview */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage via-clay to-sage opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-clay font-bold uppercase tracking-widest text-xs mb-4 block">Our Origin</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sage mb-8 max-w-3xl mx-auto">
              "It started on a metro ride, with a stranger's story of hope lost to repeated medical failures."
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              That encounter defined Dr. Rimjhim's career path: providing a sanctuary for those who have exhausted conventional options, using rigorous, evidence-based homeopathy.
            </p>
            <Link to="/about" className="text-sage font-medium border-b-2 border-sage/30 hover:border-sage pb-1 transition-colors">
              Read the full story
            </Link>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-24 bg-oatmeal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-sage mb-12">Latest from the Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map(post => (
                <article key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
                  <span className="bg-clay/10 text-clay text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl text-sage mb-3 leading-snug hover:text-rose transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="w-full pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] w-full bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.082197645917!2d77.18314101000263!3d28.50192928332786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f142b730c9b%3A0xdd2ade587cf1a3e2!2sDr.%20Rimjhim&#39;s%20Healthcare%20Homeopathy!5e0!3m2!1sen!2sin!4v1763914008196!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.4) opacity(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-xs text-center">
            <h4 className="font-serif text-sage text-xl mb-2">Visit Our Clinic</h4>
            {/* <p className="text-charcoal/70 text-sm">Chhatarpur, New Delhi</p> */}
            <p className="text-charcoal/70 text-sm mb-4">Open Mon-Sun, 10:00 am - 8:00 pm</p>
            <a href="https://maps.app.goo.gl/Y36TEtkoGeWRkSmo9" target="_blank" rel="noopener noreferrer" className="text-rose text-sm font-bold uppercase tracking-wider">Get Directions</a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;