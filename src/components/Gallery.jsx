import React from "react";
import { Scale } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      title: "Main Office",
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Conference Room",
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Meeting Space",
      src: "https://images.unsplash.com/photo-1590608897129-79da98d1596d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Client Lounge",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-2">
            <Scale size={20} className="text-amber-500 mr-2" />
            <span className="uppercase tracking-widest text-xs text-amber-600 font-semibold">
              Our Space
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            A Professional & Welcoming Environment
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Explore our thoughtfully designed offices and client spaces that reflect the
            professionalism, integrity, and trust our firm is known for.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {images.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote / Description */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-slate-500 italic text-sm leading-relaxed">
            “We believe that an elegant, calm, and professional space fosters confidence and
            clarity. Our office is designed to make every client feel welcome and assured.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
