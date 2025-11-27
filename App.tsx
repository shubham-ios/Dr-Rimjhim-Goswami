import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Services from './pages/Services';

// Placeholder Contact component for routes not fully implemented
const Contact = () => (
  <div className="min-h-screen bg-oatmeal flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="font-serif text-4xl text-sage mb-4">Contact Us</h1>
      <p className="text-charcoal/60">Full contact page coming soon.</p>
      <a href="/" className="text-rose mt-4 block">Back Home</a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
