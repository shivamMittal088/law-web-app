import React, { useMemo, useState } from "react";
import { Scale, Search, Mail, Filter, ChevronRight, CheckCircle2 } from "lucide-react";

/**
 * PracticeAreasPage
 * A clean, responsive page for listing practice areas, grouped by category,
 * with client-friendly copy and a search/filter control.
 *
 * Tailwind CSS required. Icons via lucide-react.
 */
const  PracticeAreasPage = ()=> {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const CATEGORIES = [
    {
      name: "Litigation & Disputes",
      description:
        "End‑to‑end representation across forums — from notices and pleadings to arguments and execution.",
      items: [
        "Arbitration",
        "Banking & Insurance",
        "Civil Law",
        "Commercial & Contract Law",
        "Control of Rent & Eviction Matters",
        "Consumer Law",
        "Constitutional Law",
        "Copyright Law",
        "Corporate Laws",
        "Criminal Law",
        "Cyber Law",
        "Direct & Indirect Taxation",
        "Economic Offences",
        "Electricity Laws",
        "Employment Laws",
        "Entertainment & Media",
        "Family Law",
        "Fatal Accident Cases",
        "Land Acquisition Matters",
        "Labour Law",
        "Licensing",
        "Local, Municipal and State Law",
        "Marriage, Succession & Adoption Laws",
        "Mergers and Acquisitions",
        "Minerals & Mining Law",
        "Motor Accident Claim Matters",
        "Property Laws",
        "Real Estate",
        "Revenue Laws",
        "Securities Law",
        "Telecommunications",
        "Trademarks",
        "Trusts and Estates",
        "Workmen’s Compensation",
      ],
    },
    {
      name: "Registrations & Compliance",
      description:
        "Fast, compliant registrations and licenses for businesses and professionals.",
      items: [
        "Company Registration",
        "Trademarks",
        "Food Licensing",
        "Registration Work",
      ],
    },
    {
      name: "Transactions, Drafting & Advisory",
      description:
        "Commercially sound drafts and negotiations tailored to your objectives.",
      items: [
        "Drafting – Agreements, Deeds & Notices",
        "Agreement for Sale & Sale Deed",
        "Lease Deeds",
        "Legal Notices",
        "Partnership Agreements",
        "Power Purchase Agreement",
        "Property Development Agreements",
        "Finance – Modelling, Restructuring, Fund Raising & Debt Raising",
        "Mergers and Acquisitions",
      ],
    },
    {
      name: "Research & Opinions",
      description:
        "Clear, practical research and opinions for boardrooms and individuals.",
      items: [
        "Legal Research Work & Advisory",
        "Case Laws Research",
        "Agreements & Deeds Review",
        "Due Diligence Reports",
        "Advisory to Corporate, Business Houses and Individuals",
      ],
    },
    {
      name: "ADR (Arbitration & Mediation)",
      description:
        "Time‑efficient settlement through Arbitration and Mediation.",
      items: ["Arbitration and Mediation"],
    },
  ];

  const ALL_ITEMS = useMemo(() => {
    const set = new Set();
    CATEGORIES.forEach((c) => c.items.forEach((i) => set.add(i)));
    return Array.from(set);
  }, []);

  const categoriesForFilter = useMemo(
    () => ["All", ...CATEGORIES.map((c) => c.name)],
    []
  );

  const visibleCategories = useMemo(() => {
    // Filter by active category then query
    const base = active === "All" ? CATEGORIES : CATEGORIES.filter((c) => c.name === active);
    if (!query.trim()) return base;

    const q = query.toLowerCase();
    return base
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => i.toLowerCase().includes(q)),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-start sm:items-center gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/20 ring-1 ring-amber-400/30">
              <Scale className="h-5 w-5 text-amber-400" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Practice Areas</h1>
              <p className="mt-1 text-slate-300 text-sm sm:text-base">
                We deal in extensive litigation, transactions, registrations and advisory across multiple domains.
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 placeholder:text-slate-400 focus:ring-amber-400/50 px-9 py-2.5 outline-none"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Practice filters">
              {categoriesForFilter.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active === c}
                  onClick={() => setActive(c)}
                  className={
                    "whitespace-nowrap rounded-xl px-3.5 py-2 text-sm ring-1 transition " +
                    (active === c
                      ? "bg-amber-400 text-slate-900 ring-amber-300"
                      : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10")
                  }
                >
                  <Filter className="inline -mt-0.5 mr-1 h-4 w-4" /> {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          {visibleCategories.length === 0 ? (
            <EmptyState query={query} />
          ) : (
            <div className="space-y-10">
              {visibleCategories.map((cat) => (
                <CategoryCard key={cat.name} category={cat} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-tr from-amber-50 to-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Need clarity on a legal issue?</h2>
                <p className="text-slate-700 text-sm sm:text-base mt-1">
                  Write to us at <a href="mailto:contact@goyaladvocate.com" className="font-medium underline decoration-amber-400 underline-offset-4">contact@goyaladvocate.com</a> — we usually respond within 1 business day.
                </p>
              </div>
              <a
                href="mailto:adv.naveengarg1993@gmail.com"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <Mail className="h-4 w-4 mr-2" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Microcopy */}
      <footer className="pb-12">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500">
          <p>
            * Engagements are scoped on a case‑by‑case basis and may involve partner/associate time, filing fees and taxes as applicable.
          </p>
        </div>
      </footer>
    </main>
  );
}

function CategoryCard({ category }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{category.name}</h3>
          {category.description && (
            <p className="text-slate-600 text-sm mt-1">{category.description}</p>
          )}
        </div>
      </div>

      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {category.items.map((item) => (
          <li key={item} className="group">
            <div className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-slate-50/60 p-3 transition hover:bg-slate-50">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-sm text-slate-800">{item}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <a
          href="#contact"
          className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          Discuss this area <ChevronRight className="ml-0.5 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function EmptyState({ query }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <p className="text-slate-700">No results for “<span className="font-medium">{query}</span>”. Try a broader search or choose another filter.</p>
      <p className="text-slate-500 text-sm mt-1">Popular: Arbitration, Real Estate, Corporate, Trademarks</p>
    </div>
  );
}

export default PracticeAreasPage;