import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-5">
              <div className="inline-block">
                <span className="bg-amber-500 text-slate-900 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
                  Trusted Legal Experts Since 1985
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
                Defending Your Rights with Excellence
              </h2>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                We provide experienced legal representation for individuals and businesses —
                protecting your interests and striving for the best possible outcomes in every case.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-amber-400 transition-all transform hover:scale-105 shadow-md">
                  Schedule Free Consultation
                </button>
                <button className="border border-white text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-slate-900 transition-all">
                  View Practice Areas
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700 mt-4">
                <div>
                  <div className="text-2xl font-bold text-amber-400">500+</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Cases Won
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">35+</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">98%</div>
                  <div className="text-xs text-slate-400 tracking-wide">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right illustration (optional placeholder) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent border border-amber-500/20 flex items-center justify-center">
                <span className="text-sm text-amber-400 tracking-widest uppercase">
                  Legal Expertise
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
