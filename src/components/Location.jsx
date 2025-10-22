import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

const ConsultationSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <section className="py-14 bg-gradient-to-r from-amber-50 via-white to-amber-50 border-t border-amber-100">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Icon + Heading */}
        <div className="inline-flex items-center justify-center mb-3">
          <Calendar size={22} className="text-amber-500 mr-2" />
          <span className="text-sm uppercase font-semibold tracking-wider text-amber-600">
            Book a Consultation
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Need Legal Guidance? We’re Here to Help
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          Our expert attorneys are ready to assist you. Schedule a free consultation and
          take the first step toward resolving your legal matter with confidence.
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-amber-400 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
};

export default ConsultationSection;
