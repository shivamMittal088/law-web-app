// FormPage.jsx
import React, { useRef, useState } from "react";
import { Scale, Phone, Mail, MapPin, Clock, Upload, User, Briefcase, CheckCircle2, Sun, Moon, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ⬇️ Replace these with your EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const FormPage = () => {
  // Scoped Light/Dark without relying on <html class="dark">
  const [isDark, setIsDark] = useState(false);

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  // Use a real <form> ref for EmailJS's sendForm (supports file attachments)
  const formRef = useRef(null);

  const caseTypes = [
    "Criminal Defense",
    "Family Law",
    "Corporate / Business",
    "Real Estate",
    "Personal Injury",
    "Intellectual Property",
    "Immigration",
    "Other",
  ];

  // Basic client-side validation
  const validate = (fd) => {
    const next = {};
    if (!fd.get("from_name")?.trim()) next.firstName = "First name is required.";
    if (!fd.get("last_name")?.trim()) next.lastName = "Last name is required.";
    const email = fd.get("from_email");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Valid email is required.";
    const phone = fd.get("phone");
    if (!phone || !/^\+?[0-9\-()\s]{7,}$/.test(phone)) next.phone = "Valid phone is required.";
    if (!fd.get("case_type")) next.caseType = "Please select a case type.";
    if (!fd.get("subject")?.trim()) next.subject = "Please add a short subject.";
    if (!fd.get("message") || fd.get("message").trim().length < 20)
      next.message = "Please provide at least 20 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);

    if (!validate(fd)) return;

    setSubmitting(true);
    setSubmitted(false);

    try {
      // Sends the entire <form>, including files, to EmailJS
      console.log(formRef.current);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSubmitted(true);
      
      // Reset form fields
      formRef.current.reset();
      setFileName("");
      setErrors({});
    } catch (err) {
      console.error("Email sending failed:", err);
      alert("Something went wrong while sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Header */}
        <header className="border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-amber-500 p-2 rounded-lg shadow-sm">
                <Scale className="text-slate-900" size={24} />
              </span>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Naveen Kumar Garg And Associates</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Advoctes | Solicitors | Legal Consultants</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Delhi High Court And All District Courtss</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDark((v) => !v)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle light/dark"
              >
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
                <span className="hidden sm:inline">{isDark ? "Dark" : "Light"} mode</span>
              </button>
              <a
                href="tel:+1234567890"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Phone size={16} /> (123) 456-7890
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Schedule a Free Consultation</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Tell us about your matter. A member of our team will follow up promptly.
            </p>
          </div>
        </section>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Form Card */}
            <div className="lg:col-span-2">
              {submitted && (
                <div className="mb-6 rounded-xl border border-emerald-300/60 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 p-4 flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <div>
                    <p className="font-semibold">Thanks! Your request was sent.</p>
                    <p className="text-sm opacity-90">We’ll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">Client Intake Form</h3>

                {/* IMPORTANT: use a real <form> element with ref for EmailJS */}
                <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate>
                  {/* Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label="First name" name="from_name" placeholder="John" error={errors.firstName} icon={User} />
                    <FormField label="Last name" name="last_name" placeholder="Doe" error={errors.lastName} />
                  </div>

                  {/* Contact */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label="Email" name="from_email" type="email" placeholder="john@domain.com" error={errors.email} icon={Mail} />
                    <FormField label="Phone" name="phone" type="tel" placeholder="(123) 456-7890" error={errors.phone} icon={Phone} />
                  </div>

                  {/* Case details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField label="Case type" name="case_type" options={caseTypes} icon={Briefcase} error={errors.caseType} />
                    <FormField label="Subject" name="subject" placeholder="Brief summary" error={errors.subject} />
                  </div>

                  {/* Message */}
                  <div>
                    <LabelWithError label="Your message" error={errors.message} />
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Provide a brief description of your legal matter..."
                      className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/60"
                      aria-invalid={Boolean(errors.message)}
                    />
                  </div>

                  {/* File upload (optional) — name MUST match your EmailJS template var (e.g., `attachment`) */}
                  <div>
                    <label className="block text-sm font-medium">Relevant document (optional)</label>
                    <div className="mt-2 flex items-center gap-3">
                      <label className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 px-3 py-2 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <Upload size={16} />
                        <span>Upload PDF / image</span>
                        <input
                          type="file"
                          name="attachment"          // 👈 must match EmailJS template variable
                          accept=".pdf,image/*"
                          className="hidden"
                          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                        />
                      </label>
                      {fileName && (
                        <span className="text-xs text-slate-600 dark:text-slate-300 truncate max-w-[60%]">
                          {fileName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="inline-flex items-start gap-3 text-sm">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-1 h-4 w-4 border-slate-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span>
                        I confirm the information provided is accurate and I agree to be contacted about my inquiry.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 text-slate-900 font-semibold px-6 py-3 hover:bg-amber-400 transition-colors disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Submit Request"}
                    </button>
                  </div>

                  {/* Small notice */}
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    * Submitting this form does not establish an attorney-client relationship.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                <h4 className="font-semibold mb-4">Contact Details</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 text-amber-500" />
                    <div>
                      <p className="font-medium">8285558855 , 9911198213</p>
                      <p className="text-slate-500 dark:text-slate-400">24/7 for emergencies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 text-amber-500" />
                    <div>
                      <a href="adv.naveengarg1993@gmail.com" className="font-medium hover:underline">
                        adv.naveengarg1993@gmail.com
                      </a>
                      <p className="text-slate-500 dark:text-slate-400">We reply within one business day</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-amber-500" />
                    <div>
                      <p className="font-medium">Office:2382T|29</p>
                      <p className="text-slate-500 dark:text-slate-400">Mandi Extension Narela 110040</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 text-amber-500" />
                    <div>
                      <p className="font-medium">Mon–Fri: 9:00 AM – 6:00 PM</p>
                      <p className="text-slate-500 dark:text-slate-400">Weekends by appointment</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-0 overflow-hidden">
                <div className="h-56 w-full bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 dark:text-slate-300">Map placeholder</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Embed Google Maps here</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Naveen Kumar Garg And Associates . All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

/* ----------------- Reusable, accessible fields ----------------- */
function LabelWithError({ label, error }) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium">{label}</label>
      {error && (
        <span className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle size={14} /> {error}
        </span>
      )}
    </div>
  );
}

function FormField({ label, name, type = "text", placeholder, icon: Icon, error }) {
  return (
    <div>
      <LabelWithError label={label} error={error} />
      <div className="mt-2 relative">
        {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-amber-500/60"
          aria-invalid={Boolean(error)}
        />
      </div>
    </div>
  );
}

function SelectField({ label, name, options = [], icon: Icon, error }) {
  return (
    <div>
      <LabelWithError label={label} error={error} />
      <div className="mt-2 relative">
        {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />}
        <select
          name={name}
          className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-amber-500/60"
          aria-invalid={Boolean(error)}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default FormPage;
