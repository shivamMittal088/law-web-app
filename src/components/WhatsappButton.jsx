import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "918285558855"; // your full number with country code (no + or spaces)
  const message = "Hello Advocate Naveen, I need legal assistance."; // default message

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;
