import React from "react";
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const TESTIMONIALS = [
  {
    name: "Amrita.",
    // role: "Small Business Owner",
    quote:
      "Naveen Kumar garg & associates guided us through a complex dispute with clarity and care. Their preparation and communication were outstanding.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Priya.",
    // role: "Tech Founder",
    quote:
      "Measured, strategic, and effective. The team protected our interests during a high-stakes negotiation and delivered a great outcome.",
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Anamika.",
    // role: "Marketing Director",
    quote:
      "Compassionate counsel and clear guidance at every step. I felt supported and informed throughout the entire process.",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop",
  },
];

const TestimonialsSection = ()=> {
  return (
    <section id="testimonials" className="py-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Quote size={18} className="text-amber-500" />
            <span className="uppercase tracking-wider text-[11px] font-semibold text-amber-600">
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Real feedback from individuals and businesses we’ve represented.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all"
            >
              {/* Top row: avatar + name */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {t.name}
                  </h3>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-3 text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
                “{t.quote}”
              </p>

              {/* Stars */}
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={
                      idx < t.rating
                        ? "text-amber-500 fill-amber-500"
                        : "text-slate-300 dark:text-slate-600"
                    }
                  />
                ))}
              </div>

              {/* Subtle bottom accent on hover */}
              <div className="mt-4 h-px bg-transparent group-hover:bg-amber-400/50 transition-colors" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/ConsultationPage"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-amber-400 transition-colors"
          >
            Book a Free Consultation
          </Link>
          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
            * Testimonials reflect client experiences; outcomes vary by case.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;