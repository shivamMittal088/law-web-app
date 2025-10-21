import React from "react";
import { Linkedin, Mail, Phone, Award, Gavel, GraduationCap } from "lucide-react";

const ATTORNEYS = [
  {
    name: "John Sterling, Esq.",
    role: "Senior Partner — Litigation",
    years: 35,
    focus: ["Corporate Disputes", "High-stakes Litigation", "Arbitration"],
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
    email: "john@lawfirm.com",
    phone: "(123) 456-7890",
    linkedin: "#",
    highlights: [
      "Lead counsel in 120+ complex matters",
      "Recognized in Top 100 Trial Lawyers",
    ],
  },
  {
    name: "Amelia Hart, Esq.",
    role: "Partner — Family & Custody",
    years: 18,
    focus: ["Divorce", "Custody", "Mediation"],
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
    email: "amelia@lawfirm.com",
    phone: "(123) 456-7891",
    linkedin: "#",
    highlights: ["Certified Family Mediator", "Best Lawyers® 2024"],
  },
  {
    name: "Daniel Cho, Esq.",
    role: "Partner — Corporate",
    years: 15,
    focus: ["M&A", "VC & Startups", "Contracts"],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    email: "daniel@lawfirm.com",
    phone: "(123) 456-7892",
    linkedin: "#",
    highlights: ["Closed 60+ M&A transactions", "Former GC, tech unicorn"],
  },
];

const  AttorneysSection = ()=> {
  return (
    <section id="attorneys" className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-wider text-[11px] font-semibold text-amber-600 mb-1">
            Our Team
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Attorneys</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Experienced, measured, and client-focused counsel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ATTORNEYS.map((a) => (
            <article
              key={a.email}
              className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-44 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {a.name}
                </h3>
                <p className="text-[12px] text-slate-600 dark:text-slate-400">{a.role}</p>

                {/* Meta */}
                <div className="mt-3 flex items-center gap-3 text-[12px] text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <Gavel size={14} /> {a.years}+ yrs
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Award size={14} /> Notable results
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GraduationCap size={14} /> Trusted counsel
                  </span>
                </div>

                {/* Focus tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.focus.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 dark:border-slate-700 px-2 py-1 text-[11px] text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5">
                  {a.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[12px] leading-snug text-slate-600 dark:text-slate-300"
                    >
                      • {h}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${a.email}`}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      title="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={`tel:${a.phone.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      title="Call"
                    >
                      <Phone size={16} />
                    </a>
                    <a
                      href={a.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>

                  <a
                    href="#contact"
                    className="text-[12px] font-medium text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    Book consultation →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA (compact) */}
        <div className="mt-8 flex justify-center">
          <a
            href="#attorneys"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-amber-400 transition-colors"
          >
            Meet the Full Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default AttorneysSection;