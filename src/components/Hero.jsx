import React from "react";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo.png";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-5">
              <div className="inline-block">
              </div>

              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold leading-snug tracking-tight">
                Defending Your Rights with Excellence
              </h2>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                We provide experienced legal representation for individuals and businesses —
                protecting your interests and striving for the best possible outcomes in every case.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-1">
                <Link to="/ConsultationPage">
                <button 
                className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-amber-400 transition-all transform hover:scale-105 shadow-md">
                  Schedule Free Consultation
                </button>
                </Link>
                
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700 mt-4">
                <div>
                  <div className="text-2xl font-bold text-amber-400">50+</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Cases Won
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">10+</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">90%</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right illustration (with image and centered text) */}
<div className="hidden lg:flex items-center justify-center">
  <div className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent border border-amber-500/20 flex items-center justify-center overflow-hidden">
    
    {/* Logo Image */}
    <img
      src={logo} // <-- replace with your image path
      alt="NKG Logo"
      className="absolute inset-0 w-full h-full object-contain opacity-90"
    />

    {/* Centered Text
    <span className="absolute text-lg font-semibold text-amber-500 tracking-widest uppercase">
      Legal Expertise
    </span> */}

  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
