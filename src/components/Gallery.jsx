import React from "react";
import { Scale } from "lucide-react";

// ✅ Import the files directly (adjust names to match exactly)
import profilePhoto from "../utils/images/profilePhoto.jpg";
import img2 from "../utils/images/img2.jpg";
import img3 from "../utils/images/img3.jpg";
import CommitmentToJustice from "../utils/images/CommitmentToJustice.png";

const Gallery = () => {
  const images = [
    {
      title: "Profile Photo",
      src: profilePhoto,
    },
    { title: "Lawyer", src: img2 },
    { title: "Meeting Space",    src: img3 },
    { title : "Commitment to Justice", src: CommitmentToJustice },
  ];

  // 🔎 TEMP: see what paths React resolved to
  // console.log({ img1, img2, img3 });

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {images.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                width={400}
                height={400}
                // 🔧 TEMP: show error instead of hiding it
                onError={(e) => {
                  console.error("Image failed:", item.title, item.src);
                  e.currentTarget.style.border = "2px solid red";
                  e.currentTarget.alt = "Failed to load";
                }}
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
