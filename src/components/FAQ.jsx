import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes. We provide a complimentary 30-minute consultation to understand your matter and outline next steps.",
  },
  {
    q: "What areas of law do you practice?",
    a: "You can find a full list of our practice areas on the Practice Areas page, covering litigation, compliance, registrations, and advisory services.",
  },
  {
    q: "How are your fees structured?",
    a: "Depending on the matter, we offer flat fees, hourly billing, or contingency. We’ll recommend what fits your case best.",
  },
  {
    q: "Do you handle urgent matters after hours?",
    a: "Yes. Our team monitors emergencies . Call the main number for immediate assistance.",
  },
  {
    q: "Will my information be kept confidential?",
    a: "Absolutely. All inquiries are handled under strict confidentiality and applicable privilege rules.",
  },
];

const FAQSection = ()=> {
  const [open, setOpen] = useState(0); // keep first open; set to -1 for all collapsed

  const toggle = (idx) => setOpen((cur) => (cur === idx ? -1 : idx));

  return (
    <section id="faq" className="py-4 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <HelpCircle size={16} className="text-amber-500" />
            <span className="uppercase tracking-wider text-[8px] font-semibold text-amber-600">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Quick answers about consultations, fees, and availability.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm divide-y divide-slate-200 dark:divide-slate-800">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div key={idx} className="px-4 sm:px-5">
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="w-full py-3 sm:py-3.5 flex items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm sm:text-[15px] font-medium text-slate-900 dark:text-slate-100">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 sm:pb-5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-6">
          Didn’t find what you need?{" "}
          <a href="#contact" className="font-medium text-amber-600 dark:text-amber-400 hover:underline">
            Contact us
          </a>{" "}
          and we’ll help right away.
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
