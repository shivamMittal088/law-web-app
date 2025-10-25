import React from "react";
import { Award, Gavel, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Importing images from src (not public)
import attorneyPriya from "../utils/images/attorney-priya.png";
import attorneyArjun from "../utils/images/attorney-arjun.png";
import attorneyAman from "../utils/images/attorney-aman.png";

const ATTORNEYS = [
  {
    name: "Adv. Priya Sharma",
    role: "Partner — Family & Matrimonial",
    years: 5,
    focus: ["Divorce", "Custody", "Mediation"],
    img: attorneyPriya,
    highlights: ["Certified Family Mediator", "Handled 300+ family matters"],
  },
  {
    name: "Adv. Arjun Mehta",
    role: "Senior Partner — Litigation (High Court)",
    years: 8,
    focus: ["Civil Litigation", "Arbitration", "Writs"],
    img: attorneyArjun,
    highlights: ["Argued 150+ High Court cases", "Empanelled Arbitrator"],
  },
  {
    name: "Adv. Aman Sharma",
    role: "Partner — Corporate & Startups",
    years: 28,
    focus: ["M&A", "VC & Startups", "Contracts"],
    img: attorneyAman,
    highlights: ["Closed 40+ M&A deals", "Ex-Inhouse Counsel, unicorn"],
  },
];

const AttorneysSection = () => {
  return (
    <section id="attorneys" className="py-8 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-[11px] font-semibold text-amber-500 mb-1">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-white">Attorneys</h2>
          <p className="text-sm text-slate-400 mt-2">
            Experienced, measured, and client-focused counsel.
          </p>
        </div>

        {/* Attorney Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATTORNEYS.map((a) => (
            <article
              key={a.name}
              className="group rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* ✅ FIXED IMAGE RATIO + FOCAL POINT */}
              <div className="relative aspect-[4/5] w-full rounded-t-xl overflow-hidden bg-slate-900">
                <img
                  src={a.img}
                  alt={`${a.name} — ${a.role}`}
                  className="absolute inset-0 h-full w-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-white">{a.name}</h3>
                <p className="text-[13px] text-slate-400">{a.role}</p>

                {/* Meta Info */}
                <div className="mt-3 flex items-center gap-3 text-[12px] text-slate-400">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.focus.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-700 px-2 py-1 text-[11px] text-slate-300"
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
                      className="text-[12px] leading-snug text-slate-400"
                    >
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/ConsultationPage"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 text-slate-900 px-5 py-2 text-sm font-semibold hover:bg-amber-400 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
