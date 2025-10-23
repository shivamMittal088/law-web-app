import React from "react";
import { ShieldCheck, FileText, Scale,ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="py-4 bg-gradient-to-br from-white via-amber-50 to-white text-slate-800">
      <div className="max-w-4xl mx-auto px-6">
       <div className="flex justify-center mb-4 py-2">
         <Link to="/" className="rounded-lg hover:bg-amber-100">
           <ArrowBigLeft className="text-amber-600 hover:text-amber-800" size={26}/>
         </Link>
       </div>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <ShieldCheck className="text-amber-600 mr-2" size={26} />
            <h1 className="text-3xl font-bold text-slate-900">
              Privacy Policy & Terms of Service
            </h1>
          </div>
          <p className="text-sm text-slate-600">
            Effective Date: {new Date().getFullYear()}
          </p>
        </div>

        {/* Privacy Policy Section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FileText className="text-amber-500 mr-2" size={22} />
            <h2 className="text-xl font-semibold text-slate-900">Privacy Policy</h2>
          </div>

          <p className="text-slate-700 mb-4 leading-relaxed">
            At <span className="font-semibold">Adv. Naveen Garg & Associates</span>,
            we are committed to safeguarding your personal information. This Privacy Policy
            explains how we collect, use, and protect your data when you interact with our website.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">1. Information We Collect</h3>
          <p className="text-slate-700 mb-4">
            We may collect your name, email address, phone number, and case details when you
            fill out the consultation form or contact us via the website. We do not collect
            any unnecessary or sensitive information.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">2. How We Use Your Information</h3>
          <p className="text-slate-700 mb-4">
            Your information is used solely to respond to your inquiries, provide legal consultation,
            and improve our website services. We do not share your data with third parties unless
            legally required to do so.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">3. Data Security</h3>
          <p className="text-slate-700 mb-4">
            We implement reasonable administrative and technical safeguards to protect your
            information from unauthorized access, disclosure, or misuse. However, please note that
            no online data transmission is 100% secure.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">4. Your Rights</h3>
          <p className="text-slate-700 mb-4">
            You may request to access, correct, or delete your personal data by contacting us
            directly. We will respond promptly in accordance with applicable data protection laws.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">5. Changes to This Policy</h3>
          <p className="text-slate-700">
            We may update this Privacy Policy periodically. Any changes will be posted on this page
            with an updated effective date.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-amber-200 my-8" />

        {/* Terms of Service Section */}
        <div>
          <div className="flex items-center mb-4">
            <Scale className="text-amber-500 mr-2" size={22} />
            <h2 className="text-xl font-semibold text-slate-900">Terms of Service</h2>
          </div>

          <p className="text-slate-700 mb-4">
            By accessing and using this website, you agree to comply with the following terms and conditions.
            Please read them carefully before using our services.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">1. Legal Disclaimer</h3>
          <p className="text-slate-700 mb-4">
            The content on this website is for informational purposes only and does not constitute legal advice.
            Viewing or using this site does not create a lawyer–client relationship.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">2. User Responsibilities</h3>
          <p className="text-slate-700 mb-4">
            You agree not to misuse this website or submit false, misleading, or offensive content.
            Any unauthorized attempt to disrupt or damage the website is strictly prohibited.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">3. Limitation of Liability</h3>
          <p className="text-slate-700 mb-4">
            We are not liable for any loss or damage arising from the use or inability to use this website,
            including indirect, incidental, or consequential damages.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">4. Governing Law</h3>
          <p className="text-slate-700 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes shall be subject to the jurisdiction of the courts in Delhi.
          </p>

          <h3 className="font-semibold text-slate-900 mt-6 mb-2">5. Contact Us</h3>
          <p className="text-slate-700">
            If you have any questions regarding our Privacy Policy or Terms of Service,
            please contact us at:  
            <br />
            <span className="font-semibold">Email:</span> info@advnaveengarg.com  
            <br />
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
