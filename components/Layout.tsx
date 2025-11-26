import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative bg-oatmeal">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.png" alt="Dr. Rimjhim Goswami" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-charcoal hover:text-sage transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-charcoal hover:text-sage transition-colors font-medium">About & Mission</Link>
            {/* <Link to="/services" className="text-charcoal hover:text-sage transition-colors font-medium">Conditions</Link>
            <Link to="/contact" className="text-charcoal hover:text-sage transition-colors font-medium">Contact</Link> */}
            {/* <Link
              to="/book"
              className="bg-rose text-white px-6 py-2.5 rounded-full hover:bg-rose/90 transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
            </Link> */}
            <button
              onClick={() => window.location.href = 'tel:+917627005924'}
              className="bg-rose text-white px-6 py-2.5 rounded-full hover:bg-rose/90 transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sage p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 md:hidden flex flex-col space-y-6">
          <Link to="/" className="text-2xl font-serif text-sage">Home</Link>
          <Link to="/about" className="text-2xl font-serif text-sage">About & Mission</Link>
          {/* <Link to="/services" className="text-2xl font-serif text-sage">Conditions</Link>
          <Link to="/contact" className="text-2xl font-serif text-sage">Contact</Link> */}
          <div className="pt-8 border-t border-gray-100">
            <button
              onClick={() => window.location.href = 'tel:+917627005924'}
              className="w-full bg-rose text-white py-4 rounded-full flex justify-center items-center gap-2 font-medium"
            >
              <Calendar size={20} />
              Book Consultation
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sage text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl mb-4">Dr. Rimjhim Goswami</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Curing the patient, not just the disease. Combining nurturing care with clinical science to help families complete their stories.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dr.rimjhim.goswami/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-clay transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581202824478" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-clay transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/+917627005924" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-clay transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="mailto:drrimjhimsharma33@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-clay transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-clay font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-3">
                {/* <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Infertility Treatment</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Clinic</Link></li> */}
                <li><Link to="https://maps.app.goo.gl/Y36TEtkoGeWRkSmo9" target="_blank" className="text-white/80 hover:text-white transition-colors">Get Directions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-clay font-bold uppercase tracking-wider mb-6 text-sm">Visit Us</h4>
              <div className="flex items-start space-x-3 mb-4 text-white/80">
                <MapPin className="shrink-0 mt-1" size={18} />
                <p>Shop 311/3,<br />Chattarpur Temple Main Road, <br />Opposite to MCD Park, <br />Chhatarpur, New Delhi, <br />Delhi 110074</p>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} />
                <button onClick={() => window.open('tel:+917627005924', '_self')} className="hover:text-white transition-colors text-left">+91 76270 05924</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Rimjhim Goswami. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-white/20 p-4 pb-6 flex items-center justify-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        {/* <div className="flex flex-col">
          <span className="text-xs text-charcoal/60 font-medium">Consultation Fee</span>
          <span className="font-bold text-sage">₹499 <span className="text-xs font-normal text-charcoal/60">/ Session</span></span>
        </div> */}
        <button
          onClick={() => window.location.href = 'tel:+917627005924'}
          className="bg-rose text-white px-8 py-3 rounded-full font-medium shadow-lg active:scale-95 transition-transform w-full text-center"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Layout;
