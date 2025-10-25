import React, { useEffect, useState } from "react";
import logo from "../utils/images/logo.png";

import {
  Scale,
  Phone,
  Mail,
  Menu,
  X,
  Award,
  Users,
  Briefcase,
  Target,
  Shield,
  Heart,
  Sun,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system"); // "light" | "dark" | "system"

  // Initialize from localStorage / system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && systemDark);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : t === "dark" ? "system" : "light"));
  };

  const themeLabel = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-amber-300/40">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/60 sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="bg-slate-100/70 dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2.5 text-xs sm:text-sm font-['Inter']">
              <div className="flex items-center gap-5">
                <a
                  href="tel:82855588855"
                  className="inline-flex items-center gap-2 hover:text-amber-600 transition-colors"
                >
                  <Phone size={16} />
                  <span>8285558885</span>
                </a>
                <a
                  href="mailto:adv.naveengarg1993@gmail.com"
                  className="hidden sm:inline-flex items-center gap-2 hover:text-amber-600 transition-colors"
                >
                  <Mail size={16} />
                  <span>adv.naveengarg1993@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-slate-600 dark:text-slate-300">
                  Available for Emergencies
                </span>

                {/* Theme toggle */}
                <button
                  onClick={cycleTheme}
                  className="ml-3 inline-flex items-center gap-2 rounded-lg border border-slate-300/70 dark:border-slate-700/70 px-3 py-1.5 text-xs font-medium hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                  title="Toggle theme (Light / Dark / System)"
                >
                  {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                  <span>{themeLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm">
                <Scale size={28} className="text-slate-900" />
              </div>
              <div>
                <h1 className="text-2xl font-['Playfair_Display'] font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                    Naveen Kumar Garg And Associates
                  </span>
                </h1>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Advocates | Solicitors | Legal Consultants
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8 font-['Inter'] text-[15px]">
              <NavLink to="/">Home</NavLink>

              <Link
                to="/ConsultationPage"
                className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold
                           text-slate-900 bg-gradient-to-b from-amber-400 to-amber-500
                           shadow-[0_6px_20px_-6px_rgba(245,158,11,0.5)]
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(245,158,11,0.6)]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70"
              >
                <span className="relative z-10">Free Consultation</span>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <Link to="/">Home</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Page Title Banner */}
      <section className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-900 dark:from-slate-800 dark:to-slate-900 dark:text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-4xl font-['Playfair_Display'] font-extrabold mb-3 leading-tight">
            About Our Firm
          </h3>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] font-extrabold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-['Inter']">
                <p>
                  Naveen Kumar Garg and Associates has grown from a small practice into one of
                  the region&apos;s most respected law firms. Our journey began with a simple mission:
                  to provide exceptional legal services with integrity, dedication, and compassion.
                </p>
                <p>
                  Over the past years, we&apos;ve successfully represented thousands of clients,
                  handling everything from complex corporate matters to sensitive family law cases.
                  Our commitment to excellence has earned us numerous accolades and, more
                  importantly, the trust of our community.
                </p>
                <p>
                  Today, our team of experienced attorneys continues to uphold the values that
                  founded this firm, while embracing innovative approaches to meet the evolving
                  needs of our clients in an ever-changing legal landscape.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-slate-900 p-8 flex items-center justify-center">
  {/* subtle glow */}
  <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-amber-400/20" />
  </div>

  {/* logo */}
  <img
    src={logo}
    alt="Naveen Kumar Garg & Associates — Logo"
    className="relative z-10 max-h-56 w-auto object-contain drop-shadow"
    loading="lazy"
  />
</div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="grid md:grid-cols-3 gap-1">
            <InfoCard
              Icon={Target}
              accent="from-amber-400 to-amber-600"
              title="Our Mission"
              text="To provide our clients with the highest quality legal representation, delivering results through strategic thinking, meticulous preparation, and unwavering dedication."
            />
            <InfoCard
              Icon={Shield}
              accent="from-blue-400 to-blue-600"
              title="Our Vision"
              text="To be recognized as the premier law firm in our region, known for our expertise, ethical standards, and commitment to achieving justice for every client we serve."
            />
            <InfoCard
              Icon={Heart}
              accent="from-emerald-400 to-emerald-600"
              title="Our Values"
              text="Integrity, excellence, compassion, and client-focused service guide everything we do. We believe in building lasting relationships based on trust."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Playfair_Display'] font-extrabold text-slate-900 dark:text-white mb-3">
              Why Choose Naveen Kumar Garg and Associates
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-['Inter']">
              What sets us apart from other law firms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoRow
              Icon={Award}
              iconBg="bg-amber-100 dark:bg-amber-900/30"
              iconText="text-amber-600 dark:text-amber-400"
              title="Proven Track Record"
              text="Over 500 successful cases with a 98% success rate in our practice areas."
            />
            <InfoRow
              Icon={Users}
              iconBg="bg-blue-100 dark:bg-blue-900/30"
              iconText="text-blue-600 dark:text-blue-400"
              title="Experienced Team"
              text="Our attorneys have over 150 combined years of legal experience."
            />
            <InfoRow
              Icon={Briefcase}
              iconBg="bg-emerald-100 dark:bg-emerald-900/30"
              iconText="text-emerald-600 dark:text-emerald-400"
              title="Personalized Approach"
              text="Every case receives individual attention and a customized legal strategy."
            />
            <InfoRow
              Icon={Phone}
              iconBg="bg-purple-100 dark:bg-purple-900/30"
              iconText="text-purple-600 dark:text-purple-400"
              title="24/7 Availability"
              text="We're available around the clock for urgent legal matters and emergencies."
            />
            <InfoRow
              Icon={Shield}
              iconBg="bg-red-100 dark:bg-red-900/30"
              iconText="text-red-600 dark:text-red-400"
              title="Strong Advocacy"
              text="We fight aggressively to protect your rights and interests in every matter."
            />
            <InfoRow
              Icon={Heart}
              iconBg="bg-indigo-100 dark:bg-indigo-900/30"
              iconText="text-indigo-600 dark:text-indigo-400"
              title="Client-Centered"
              text="Your goals become our goals. We prioritize your needs above all else."
            />
          </div>
        </div>
      </section>

      {/* Clean, modern Stats Section */}
<section className="py-10 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
      <Stat n="10+" label="Years of Excellence" />
      <Stat n="50+" label="Cases Won" />
      <Stat n="90%" label="Success Rate" />
      <Stat n="100+" label="Satisfied Clients" />
    </div>
  </div>
</section>



      {/* CTA */}
      <section className="py-10 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-extrabold text-slate-900 mb-3">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-xl text-slate-800 mb-8 font-['Inter']">
            Contact us today for a free consultation with one of our experienced attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ConsultationPage"
              className="inline-flex justify-center items-center rounded-xl px-7 py-3.5 font-semibold
                         text-white bg-slate-900 hover:bg-slate-800 transition-all
                         shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule Consultation
            </Link>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Scale size={20} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-extrabold">Naveen Kumar Garg And Associates</h3>
                  <p className="text-xs text-slate-400 tracking-wide uppercase">Advocates | Solicitors | Legal Consultants</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm font-['Inter']">
                Providing exceptional legal services with integrity and dedication.
              </p>
            </div>

            <div>
              <h4 className="font-['Inter'] font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400 text-sm font-['Inter']">
                <li>Mandi Extension Narela</li>
                <li>Delhi , 110040</li>
                <li className="pt-2">
                  <a href="tel:8285558855" className="hover:text-amber-400 transition-colors">
                    Phone: 8285558855
                  </a>
                </li>
                <li>
                  <a href="mailto:adv.naveengarg1993@gmail.com" className="hover:text-amber-400 transition-colors">
                    Email: adv.naveengarg1993@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm font-['Inter']">
            <p>&copy; 2025 Naveen Kumar Garg And Associates . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable bits ---------- */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded"
    >
      <span>{children}</span>
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
    </Link>
  );
}

function NavAnchor({ href, children }) {
  return (
    <a
      href={href}
      className="group relative font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded"
    >
      <span>{children}</span>
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
    </a>
  );
}

function MobileItem({ href, children, active = false }) {
  return (
    <a
      href={href}
      className={`block py-2 px-4 rounded-lg transition-all ${
        active
          ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          : "hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
    >
      {children}
    </a>
  );
}

function InfoCard({ Icon, accent, title, text }) {
  return (
    <div
      className="group relative bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200/70 dark:border-slate-800
                 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
    >
      <div
        className={`w-10 h-10 rounded-lg mb-4 grid place-items-center bg-gradient-to-br ${accent} text-slate-900 shadow`}
      >
        <Icon size={18} /> {/* ✅ smaller icon */}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}


function InfoRow({ Icon, iconBg, iconText, title, text }) {
  return (
    <div
      className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800
                 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className={`p-3 rounded-xl flex-shrink-0 ${iconBg}`}>
        <Icon size={26} className={iconText} />
      </div>
      <div>
        <h3 className="text-xl font-['Playfair_Display'] font-extrabold text-slate-900 dark:text-white mb-1.5">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 font-['Inter']">{text}</p>
      </div>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div className="p-5 rounded-xl bg-white/70 dark:bg-slate-800/70 shadow-md hover:shadow-lg 
                    backdrop-blur-sm transition-all hover:-translate-y-1 border border-slate-200/60 dark:border-slate-700/60">
      <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mb-1 tracking-tight">
        {n}
      </div>
      <div className="text-[13px] sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
        {label}
      </div>
    </div>
  );
}

