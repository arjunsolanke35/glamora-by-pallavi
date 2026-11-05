import React from 'react';
import { salonInfo } from '../data/salonData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20inquire%20about%20services%20at%20Glamora%20by%20Pallavi.`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat with Pallavi on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat with Pallavi
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </a>
    </aside>
  );
}
