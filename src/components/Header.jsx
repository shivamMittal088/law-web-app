// Header.jsx
import React, { useState } from "react";
import { Scale, Phone, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-xs sm:text-sm py-2">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-5">
            <a href="tel:+918285558855" className="flex items-center space-x-2 hover:text-amber-400">
              <Phone size={14} />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:adv.naveengarg123@gmail.com"
              className="hidden sm:flex items-center space-x-2 hover:text-amber-400"
            >
              <Mail size={14} />
              <span>Mail Us</span>
            </a>
          </div>
          <span className="hidden md:block text-slate-400">Available 24/7 for Emergencies</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-amber-500 p-1.5 rounded">
            {/* <Scale size={20} className="text-slate-900" /> */}
            <img 
            src = {logo}
            alt="Logo"
            className="h-6 w-6 object-contain"
            />
          </div>

          <div>
            <h1 className="text-base sm:text-lg font-bold">Naveen Kumar Garg & Associates</h1>
            <p className="text-[11px] text-slate-400">Advocates | Solicitors | Legal Consultants</p>
            <p className="text-[11px] text-slate-400">Delhi High Court & District Courts</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/about" className="hover:text-amber-400">About</Link>
          <Link to="/PracticeAreas" className="hover:text-amber-400">Practice Areas</Link>
          <a href="#attorneys" className="hover:text-amber-400">Attorneys</a>
          <a href="#testimonials" className="hover:text-amber-400">Testimonials</a>
          <Link to="/ConsultationPage" className="bg-amber-500 text-slate-900 px-4 py-1.5 rounded font-semibold hover:bg-amber-400">
            Consultation
          </Link>
          <Link to="/privacy-policy" className="px-3 py-1 rounded hover:text-amber-400">
            Privacy Policy
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 hover:bg-slate-800 rounded"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-800 text-sm px-4 pb-4 space-y-2">
          <Link to="/" onClick={closeMenu} className="block py-2 hover:text-amber-400">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block py-2 hover:text-amber-400">About</Link>
          <Link to="/PracticeAreas" onClick={closeMenu} className="block py-2 hover:text-amber-400">Practice Areas</Link>
          <a href="#attorneys" onClick={closeMenu} className="block py-2 hover:text-amber-400">Attorneys</a>
          <a href="#testimonials" onClick={closeMenu} className="block py-2 hover:text-amber-400">Testimonials</a>

          <Link
            to="/ConsultationPage"
            onClick={closeMenu}
            className="block bg-amber-500 text-slate-900 py-2 rounded font-semibold hover:bg-amber-400 text-center mt-2"
          >
            Consultation
          </Link>

          <Link to="/privacy-policy" onClick={closeMenu} className="block py-2 hover:text-amber-400 text-center">
            Privacy Policy
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
