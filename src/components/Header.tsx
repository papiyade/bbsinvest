import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Comment ça marche' },
    { href: '#countries', label: 'Pays couverts' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
      <div className="flex items-center space-x-2 py-2">
        <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
      </div>

          {/* Desktop Navigation */} 
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-pink-800 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#E46E2F] to-[#AE3D7D] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium"
            >
              Commencer
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-gradient-to-r from-[#AE3D7D] to-[#E46E2F] text-white px-6 py-3 rounded-full text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Commencer
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;