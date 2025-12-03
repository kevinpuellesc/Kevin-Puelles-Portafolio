import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-serif text-2xl tracking-widest z-50 ${
            (isHome && !scrolled && !isOpen) ? 'text-white mix-blend-difference' : 'text-gray-900'
          }`}
        >
          KEVIN PUELLES
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.path 
                  ? ((isHome && !scrolled) ? 'text-white border-b border-white' : 'text-gray-900 border-b border-gray-900')
                  : ((isHome && !scrolled) ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-900')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className={`w-6 h-6 ${isHome && !scrolled ? 'text-white' : 'text-gray-900'}`} />
          )}
        </button>

        {/* Mobile Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;