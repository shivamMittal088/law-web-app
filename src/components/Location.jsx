import React from "react";
import { MapPin, Phone, Mail, Clock, Landmark } from "lucide-react";

const LocationPage = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-amber-50 via-white to-amber-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-2">
            <Landmark size={22} className="text-amber-500 mr-2" />
            <span className="text-xs uppercase font-semibold tracking-wider text-amber-600">
              Our Office
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Visit Our Law Office
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
            We welcome clients to meet our experienced attorneys in person.
            Find us easily accessible and open throughout the week.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left: TWO Small Maps */}
          <div className="space-y-4">
            {/* Map 1 — Mandi Extension, Narela */}
            <div className="rounded-xl overflow-hidden shadow-md border border-amber-100">
              <div className="px-3 py-2 text-xs font-medium text-slate-700 bg-amber-50 border-b border-amber-100">
                Mandi Extension, Narela (Delhi 110040)
              </div>
              <iframe
                title="Mandi Extension, Narela Map"
                src="https://maps.google.com/maps?q=28.85267,77.09288&z=15&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-none"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map 2 — Tis Hazari Courts */}
            <div className="rounded-xl overflow-hidden shadow-md border border-amber-100">
              <div className="px-3 py-2 text-xs font-medium text-slate-700 bg-amber-50 border-b border-amber-100">
                Tis Hazari Court (Delhi 110055)
              </div>
              <iframe
                title="Tis Hazari Court Map"
                src="https://maps.google.com/maps?q=28.66670,77.21670&z=15&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-none"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col space-y-4">
            
            {/* Address */}
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition">
              <MapPin className="text-amber-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Office Address</h4>
                <p className="text-slate-600 text-xs mt-1">
                  Office :- 2382T/29 <br />
                  Mandi Extension Narela , Delhi 110040, India
                </p>
                <h4 className="font-semibold text-slate-900 text-sm mt-3">Alternate Office :-</h4>
                <p className="text-slate-600 text-xs mt-1">
                  Chamber no - 347A first floor , Western Wing Tis Hazari court delhi -110055
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition">
              <Phone className="text-amber-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Phone</h4>
                <p className="text-slate-600 text-xs mt-1">+91 8285558855</p>
                <p className="text-slate-600 text-xs mt-1">+91 9911198213</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition">
              <Mail className="text-amber-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Email</h4>
                <p className="text-slate-600 text-xs mt-1">adv.naveengarg1993@gmail.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition">
              <Clock className="text-amber-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Working Hours</h4>
                <p className="text-slate-600 text-xs mt-1">
                  Mon – Sat: 9:00 AM – 5:00 PM <br /> Sun: Closed
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
