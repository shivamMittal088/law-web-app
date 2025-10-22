import React from "react";
import { MapPin, Phone, Mail, Clock, Landmark } from "lucide-react";

const LocationPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <Landmark size={26} className="text-amber-500 mr-2" />
            <span className="text-sm uppercase font-semibold tracking-wider text-amber-600">
              Our Office
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Visit Our Law Office
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We welcome clients to meet our experienced attorneys in person. Find us at the
            heart of the city — easily accessible and open throughout the week for your convenience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Law Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.232761712343!2d77.22732197538228!3d28.61291607568702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d7abcf3c61%3A0x2f8d3f512f2e4dd1!2sSupreme%20Court%20of%20India!5e0!3m2!1sen!2sin!4v1692100081234!5m2!1sen!2sin"
              width="100%"
              height="380"
              allowFullScreen=""
              loading="lazy"
              className="border-none"
            ></iframe>
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col justify-center space-y-6">
            
            {/* Address */}
            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition">
              <MapPin className="text-amber-500 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Office Address</h4>
                <p className="text-slate-600 text-sm mt-1">
                  123 Legal Street, Connaught Place, New Delhi, India 110001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition">
              <Phone className="text-amber-500 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Phone</h4>
                <p className="text-slate-600 text-sm mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition">
              <Mail className="text-amber-500 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Email</h4>
                <p className="text-slate-600 text-sm mt-1">
                  contact@advocatenaveengarg.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition">
              <Clock className="text-amber-500 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Working Hours</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Monday - Saturday: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
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
