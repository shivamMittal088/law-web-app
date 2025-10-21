import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const firmName = "Sterling & Associates";
  const street = "123 Legal Street, Suite 100";
  const city = "City, State 12345";
  const phone = "(123) 456-7890";
  const email = "contact@lawfirm.com";
  const hours = "Mon–Fri: 9:00 AM – 6:00 PM";
  const query = encodeURIComponent(`${firmName}, ${street}, ${city}`);

  const mapsEmbed = `https://www.google.com/maps?q=${query}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section id="location" className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-wider text-[11px] font-semibold text-amber-600 mb-1">
            Visit Us
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Location & Contact
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            We’re centrally located and easy to reach for consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900">
                <iframe
                  title={`${firmName} Map`}
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Powered by Google Maps
                </span>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Open Map <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Address / Contact */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {firmName}
              </h3>

              <ul className="space-y-3 text-[13px]">
                <li className="flex items-start gap-2">
                  <MapPin className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <div className="text-slate-700 dark:text-slate-300 leading-snug">
                    <p className="font-medium">{street}</p>
                    <p>{city}</p>
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <Phone className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="font-medium text-slate-700 dark:text-slate-200 hover:underline"
                    >
                      {phone}
                    </a>
                    <p className="text-slate-500 dark:text-slate-400 text-[12px]">
                      24/7 for emergencies
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <Mail className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-slate-700 dark:text-slate-200 hover:underline"
                    >
                      {email}
                    </a>
                    <p className="text-slate-500 dark:text-slate-400 text-[12px]">
                      Replies within 1 business day
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <Clock className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <div className="text-slate-700 dark:text-slate-300 leading-snug">
                    <p className="font-medium">{hours}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[12px]">
                      Weekends by appointment
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-amber-500 text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-amber-400 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-6 text-center text-[11px] text-slate-500 dark:text-slate-400">
          Street parking and nearby public transit are available. Please arrive 10 minutes early
          for check-in.
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
