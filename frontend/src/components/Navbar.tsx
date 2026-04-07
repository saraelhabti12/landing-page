import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-primary-600">TECHWEB</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">Product</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">Marketplace</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">Company</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors px-4 py-2">
              Log in
            </button>
            <button className="bg-primary-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl">
          <a href="#" className="block text-base font-medium text-gray-600">Product</a>
          <a href="#" className="block text-base font-medium text-gray-600">Features</a>
          <a href="#" className="block text-base font-medium text-gray-600">Marketplace</a>
          <a href="#" className="block text-base font-medium text-gray-600">Company</a>
          <hr />
          <button className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
