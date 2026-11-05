import React from 'react';
import { bridalSpotlight, salonInfo } from '../data/salonData';
import { Crown, Sparkles, Heart, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function BridalSpotlight({ onOpenBookingWithService }) {
  const whatsappUrl = `https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20inquire%20about%20Bridal%20Makeup%20and%20Wedding%20Styling%20packages%20at%20Glamora.`;

  return (
    <section id="bridal" className="relative py-24 lg:py-32 bg-burgundy-luxury text-ivory overflow-hidden">
      {/* Decorative ambient gold lighting circles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Gold Leaf Patterns */}
      <div className="absolute top-8 left-8 text-champagne/20 hidden md:block pointer-events-none">
        <Sparkles className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bridal Narrative & Service Highlights */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-champagne/40 text-champagne-light text-xs uppercase tracking-widest font-semibold">
              <Crown className="w-4 h-4 text-champagne shrink-0" />
              <span>{bridalSpotlight.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight">
              Every Bride Deserves <br />
              <span className="italic font-normal text-champagne-light font-serif">
                Her Own Kind of Glamour.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ivory/85 leading-relaxed max-w-xl">
              {bridalSpotlight.subheading}
            </p>

            <blockquote className="border-l-2 border-champagne pl-4 italic text-sm text-champagne-pale/90 max-w-lg">
              {bridalSpotlight.quote}
            </blockquote>

            {/* Bridal Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {bridalSpotlight.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-champagne font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-champagne-light" />
                    <span>{h.title}</span>
                  </div>
                  <p className="text-xs text-ivory/70 mt-1 pl-6 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingWithService('Bridal Makeup')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-burgundy bg-champagne-pale hover:bg-white transition-all duration-300 shadow-xl hover:shadow-gold-glow transform hover:-translate-y-0.5"
              >
                <Crown className="w-4 h-4 text-burgundy" />
                <span>Reserve Your Bridal Date</span>
                <ArrowRight className="w-4 h-4 text-burgundy" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-ivory hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-champagne-light" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-champagne-pale/60 italic">
              * Advance bridal dates booking recommended for wedding season dates in Amravati &amp; Vidarbha region.
            </p>
          </div>

          {/* Right Column: Regal Indian Bridal Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Gold Ornamental Outer Border */}
              <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-champagne/40 transform -rotate-1 pointer-events-none" />
              
              {/* Main Bridal Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-champagne/30 bg-chocolate">
                <img
                  src={bridalSpotlight.image}
                  alt="Royal Bridal Makeup by Glamora by Pallavi"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <p className="font-serif text-lg font-semibold text-champagne-light">
                    Complete Royal Bridal Packages
                  </p>
                  <p className="text-xs text-ivory/80 mt-0.5">
                    Bridal HD Makeup • Hair Updo • Mehendi • Saree Draping
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
