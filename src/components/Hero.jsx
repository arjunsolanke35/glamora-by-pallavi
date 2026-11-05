import React from 'react';
import { salonInfo } from '../data/salonData';
import { Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center bg-hero-pattern overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Decorative ambient blurred glow spheres */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none animate-floatSlow" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-champagne-pale rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Decorative Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-chocolate/80 text-xs tracking-[0.22em] uppercase font-medium animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>{salonInfo.badgeLabel}</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-chocolate leading-[1.08]">
                Your Beauty, <br className="hidden sm:inline" />
                <span className="italic font-normal text-burgundy font-serif">
                  Our Artistry.
                </span>
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-champagne via-rose to-transparent mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Supporting Subheadline */}
            <p className="font-sans text-base sm:text-lg text-chocolate/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {salonInfo.subheadline}
            </p>

            {/* Highlights quick tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-chocolate/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" />
                Certified Beauty Artist
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" />
                HD &amp; Waterproof Bridal
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" />
                Custom Skin Prep
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-all duration-300 shadow-luxury hover:shadow-burgundy-glow transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book Your Appointment</span>
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-chocolate hover:text-burgundy bg-white/80 hover:bg-white border border-champagne/40 transition-all duration-300 shadow-sm hover:shadow"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-champagne group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Small Trust Note */}
            <p className="text-xs text-chocolate/60 italic pt-1">
              Serving Chandikapur, Daryapur, and Amravati district with luxury bridal &amp; salon care.
            </p>
          </div>

          {/* Right Column: Large Bridal or Beauty Portrait with Artistic Crop */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Backing decorative frame with gold accent */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-[2.5rem] bg-gradient-to-tr from-champagne/30 via-blush/60 to-rose/20 transform rotate-1 blur-sm" />
              
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
                  alt="Exquisite Indian Bridal Makeup Artistry by Glamora by Pallavi"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[530px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-chocolate/10 to-transparent pointer-events-none" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-champagne/40 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-semibold text-burgundy">
                        Bridal &amp; Beauty Artistry
                      </p>
                      <p className="text-xs text-chocolate/70">
                        Tailored for your most cherished moments
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-burgundy shrink-0">
                      <Sparkles className="w-5 h-5 text-burgundy" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Tag (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-champagne/50 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-chocolate">
                  Certified Salon Artist
                </span>
              </div>

              {/* Floating Artist Tag (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-burgundy text-ivory px-4 py-2.5 rounded-2xl shadow-xl border border-champagne/30 items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-champagne shrink-0">
                  <img
                    src={salonInfo.founderPhoto}
                    alt={salonInfo.founder}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold tracking-wide text-champagne-light">
                    {salonInfo.founder}
                  </p>
                  <p className="text-[10px] text-ivory/80">
                    Lead Makeup Artist
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
