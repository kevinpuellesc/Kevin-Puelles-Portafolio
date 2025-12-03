import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// ScrollToTop component to handle navigation behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-600 bg-white min-h-screen selection:bg-gray-200 selection:text-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Simple Footer appearing on all pages except Home if needed, but let's keep it global for consistency except Hero */}
        <Footer />
      </div>
    </Router>
  );
};

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  
  // Minimal footer, hidden on Hero page to keep the immersive effect
  if (pathname === '/') return null;

  return (
    <footer className="border-t border-gray-300 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-900 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Kevin Puelles Photography.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-gray-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default App;