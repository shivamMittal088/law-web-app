import React, { useMemo, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ConsultationPage() {
  const CONTACT = {
    phoneE164: "+918285558855", // primary number
    altPhoneE164: "+919911198213", // alternate number
    displayPhone: "+91 82855 58855",
    displayAltPhone: "+91 9911198213",
    email: "adv.naveengarg1993@gmail.com",
    whatsappMessage: "Hello! I would like to book a legal consultation.",
  };

  // Helper to build a Google Maps embed from address text (no API key)
  const embedFromAddress = (addressText) =>
    `https://maps.google.com/maps?q=${encodeURIComponent(addressText)}&z=16&output=embed`;

  const OFFICES = [
    {
      key: "Mandi House",
      name: "Head Office — Mandi House",
      addressLines: [
        "Mandi Extension Narela",
        "Mandi House",
        "Delhi 110040, India",
      ],
      phone: "+91 8285558855",
    },
    {
      key: "Tis Hazari Court",
      name: "Branch Office — Tis Hazari Court",
      addressLines: [
        "Chamber no - 347A",
        "first floor , Western Wing Tis Hazari court",
        "delhi -110055",
      ],
      phone: "+91 9911198213",
    },
  ];

  const [activeKey, setActiveKey] = useState(OFFICES[0].key);

  const whatsappHref = useMemo(() => {
    const msg = encodeURIComponent(CONTACT.whatsappMessage);
    return `https://wa.me/${CONTACT.phoneE164.replace("+", "")}?text=${msg}`;
  }, [CONTACT.phoneE164, CONTACT.whatsappMessage]);

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent("Consultation Request");
    const body = encodeURIComponent(
      "Hello Advocate,\n\nI would like to book a consultation. Please let me know the available slots.\n\nThanks."
    );
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }, [CONTACT.email]);

  const telHref = `tel:${CONTACT.phoneE164}`;
  const altTelHref = `tel:${CONTACT.altPhoneE164}`;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-12">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Book a Consultation</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Reach us via WhatsApp, email, or phone. Visit either of our offices below.
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Chat
            </a>

            <a
              href={mailHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>

            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <Phone className="h-4 w-4" /> {CONTACT.displayPhone}
            </a>

            <a
              href={altTelHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <Phone className="h-4 w-4" /> {CONTACT.displayAltPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* single column so there's no empty space */}
          <div className="grid grid-cols-1 gap-5">
            <div className="space-y-6">
              {OFFICES.map((o) => {
                const addressText = `${o.addressLines.join(", ")}`;
                const embedSrc = embedFromAddress(addressText);

                return (
                  <article
                    key={o.key}
                    className={
                      "rounded-2xl border p-4 bg-white shadow-sm transition " +
                      (activeKey === o.key
                        ? "border-amber-300 ring-2 ring-amber-200"
                        : "border-slate-200 hover:border-slate-300")
                    }
                  >
                    <button
                      onClick={() => setActiveKey(o.key)}
                      className="w-full text-left"
                      aria-pressed={activeKey === o.key}
                    >
                      <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> {o.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 whitespace-pre-line">
                        {o.addressLines.join("\n")}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">Phone: {o.phone}</p>
                    </button>

                    {/* Small embedded map for this office */}
                    <div className="mt-3 rounded-xl overflow-hidden border border-amber-100">
                      <iframe
                        title={`Map — ${o.name}`}
                        src={embedSrc}
                        width="100%"
                        height="220"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                      />
                    </div>

                    {/* Optional: open in maps link */}
                    <div className="mt-2 text-right">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-amber-700 hover:text-amber-800 underline underline-offset-4"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4 text-xs text-slate-500">
          <p>Office hours by prior appointment. Video consultations available on request.</p>
        </div>
      </section>
    </main>
  );
}
