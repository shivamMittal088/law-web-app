import React, { useState } from 'react';
import { Scale, Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white">
      {/* Top bar with contact info */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:contact@lawfirm.com" className="hidden sm:flex items-center space-x-2 hover:text-amber-400 transition-colors">
                <Mail size={16} />
                <span>contact@lawfirm.com</span>
              </a>
            </div>
            <div className="text-slate-300">
              <span className="hidden md:inline">Available 24/7 for Emergencies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 p-2 rounded">
              <Scale size={28} className="text-slate-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sterling & Associates</h1>
              <p className="text-xs text-slate-400">Attorneys at Law</p>
            </div>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
            to = "/" 
            className="hover:text-amber-400 transition-colors font-medium">
              Home
            </Link>


            <Link 
            to="/about" 
            className="hover:text-amber-400 transition-colors font-medium">
              About
            </Link>


            <a href="#practice" className="hover:text-amber-400 transition-colors font-medium">Practice Areas</a>
            <a href="#attorneys" className="hover:text-amber-400 transition-colors font-medium">Attorneys</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors font-medium">Testimonials</a>


            <Link to = "/Form"href="#contact" className="bg-amber-500 text-slate-900 px-6 py-2 rounded font-semibold hover:bg-amber-400 transition-colors">
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 hover:bg-slate-800 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Home</a>
            <a href="#about" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">About</a>
            <a href="#practice" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Practice Areas</a>
            <a href="#attorneys" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Attorneys</a>
            <a href="#testimonials" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Testimonials</a>


            <Link 
            to="/Form"  
            className="block bg-amber-500 text-slate-900 py-2 px-4 rounded font-semibold hover:bg-amber-400 transition-colors text-center mt-4">
              Free Consultation
            </Link>


          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;