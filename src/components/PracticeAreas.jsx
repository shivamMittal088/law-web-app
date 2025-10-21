import React from "react";
import { Scale, Shield, Briefcase, Users, Building2, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AREAS = [
  {
    title: "Criminal Defense",
    desc: "Strategic defense for misdemeanors and felonies with discreet, results-driven representation.",
    Icon: Shield,
  },
  {
    title: "Family Law",
    desc: "Sensitive counsel for divorce, custody, and support matters focused on long-term stability.",
    Icon: Users,
  },
  {
    title: "Corporate / Business",
    desc: "Entity setup, contracts, governance, and ongoing advisory for growing organizations.",
    Icon: Briefcase,
  },
  {
    title: "Real Estate",
    desc: "Acquisitions, leasing, due diligence, and dispute resolution for residential and commercial matters.",
    Icon: Building2,
  },
  {
    title: "Personal Injury",
    desc: "Clear guidance and assertive negotiation to secure the compensation you deserve.",
    Icon: FileText,
  },
  {
    title: "Intellectual Property",
    desc: "Protect and leverage your ideas with filings, licensing, and enforcement strategies.",
    Icon: Scale,
  },
];

const PracticeAreasSection = ()=> {
  return (
    <section id="practice" className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-wider text-[11px] font-semibold text-amber-600 mb-1">
            What We Do
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Practice Areas
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Focused expertise, clear communication, and measured, effective advocacy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {desc}
                  </p>
                </div>
              </div>

              {/* subtle hover underline */}
              <div className="mt-4 h-px bg-transparent group-hover:bg-amber-400/50 transition-colors" />
              <div className="mt-3">
                <Link
                  to="/Form"
                  className="text-[12px] font-medium text-amber-700 dark:text-amber-400 hover:underline"
                >
                  Schedule a consultation →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row (compact) */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            to = "/Form"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-amber-400 transition-colors"
          >
            Discuss Your Matter
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PracticeAreasSection;