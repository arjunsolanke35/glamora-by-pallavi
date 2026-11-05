import React from 'react';
import { salonInfo } from '../data/salonData';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function PromoBanner({ onOpenBooking }) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-burgundy via-rose to-burgundy-deep text-ivory overflow-hidden">
      {/* Decorative Shimmer Circles */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-champagne/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-light/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-champagne/30 text-champagne-light text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span>Exclusive Salon Experience</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
          A Little More Glamour, <br className="hidden sm:inline" />
          <span className="italic font-normal text-champagne-light font-serif">
            Just for You.
          </span>
        </h2>

        <p className="font-sans text-sm sm:text-base text-ivory/85 max-w-xl mx-auto leading-relaxed">
          Discover our beauty services and plan your next special look. From personalized bridal trials to rejuvenating skincare, we craft every session with gentle artistry and professional care.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-burgundy bg-champagne-pale hover:bg-white transition-all duration-300 shadow-xl hover:shadow-gold-glow transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-burgundy" />
            <span>Book Your Visit</span>
            <ArrowRight className="w-4 h-4 text-burgundy" />
          </button>

          <a
            href={`tel:${salonInfo.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-ivory hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            <span>Direct Inquiries: {salonInfo.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
