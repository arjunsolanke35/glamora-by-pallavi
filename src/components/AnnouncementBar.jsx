import React from 'react';
import { salonInfo } from '../data/salonData';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';

export default function AnnouncementBar() {
  const whatsappUrl = `https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment%20at%20Glamora%20by%20Pallavi.`;

  return (
    <div className="bg-burgundy text-ivory text-xs sm:text-sm py-2 px-4 border-b border-champagne/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2 font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0 animate-pulse" />
          <span>Celebrate Your Beauty with Glamora • Bridal &amp; Festive Bookings Open</span>
        </div>
        
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`tel:${salonInfo.rawPhone}`}
            className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors duration-200"
            title="Call Salon"
          >
            <Phone className="w-3 h-3 text-champagne" />
            <span className="hidden md:inline">Call:</span> {salonInfo.phone}
          </a>
          <span className="text-champagne/40">|</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-champagne hover:text-white transition-colors duration-200 font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>
    </div>
  );
}
