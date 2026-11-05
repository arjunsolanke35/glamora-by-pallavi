import React from 'react';
import { salonInfo } from '../data/salonData';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Calendar } from 'lucide-react';

export default function ContactSection({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20visit%20Glamora%20by%20Pallavi.`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Visit &amp; Connect</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Connect with <span className="italic font-normal text-burgundy font-serif">Glamora</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-xl mx-auto">
            We look forward to welcoming you to our salon studio in Chandikapur, Daryapur. Reach out for appointments, bridal inquiries, or beauty consultations.
          </p>
        </div>

        {/* Contact Info & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Salon Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-luxury border border-blush/80 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div>
                <span className="font-serif text-2xl font-bold text-burgundy">
                  {salonInfo.name}
                </span>
                <p className="text-xs text-chocolate/70 uppercase tracking-widest mt-0.5">
                  Certified Beauty &amp; Bridal Studio
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blush/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 border border-champagne/30">
                  <MapPin className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-chocolate/80">
                    Salon Location
                  </h4>
                  <p className="text-sm font-medium text-chocolate mt-0.5 leading-relaxed">
                    {salonInfo.address}
                  </p>
                  <a
                    href={salonInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-rose hover:text-burgundy font-semibold mt-1 transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blush/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 border border-champagne/30">
                  <Phone className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-chocolate/80">
                    Direct Call &amp; WhatsApp
                  </h4>
                  <a
                    href={`tel:${salonInfo.rawPhone}`}
                    className="text-sm font-semibold text-chocolate hover:text-burgundy mt-0.5 block transition-colors"
                  >
                    {salonInfo.phone}
                  </a>
                  <p className="text-xs text-chocolate/60">
                    Lead Artist: Pallavi Umale
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blush/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 border border-champagne/30">
                  <Mail className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-chocolate/80">
                    Email Correspondence
                  </h4>
                  <a
                    href={`mailto:${salonInfo.email}`}
                    className="text-sm font-medium text-chocolate hover:text-burgundy mt-0.5 block transition-colors"
                  >
                    {salonInfo.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blush/60 text-burgundy flex items-center justify-center shrink-0 mt-0.5 border border-champagne/30">
                  <Clock className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-chocolate/80">
                    Opening Hours
                  </h4>
                  <div className="text-xs sm:text-sm text-chocolate/80 mt-1 space-y-0.5">
                    {salonInfo.openingHours.map((h, i) => (
                      <p key={i}>
                        <span className="font-semibold text-chocolate">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-blush/60 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book Appointment</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-chocolate bg-white border border-champagne/40 hover:bg-blush/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Placeholder & Studio Atmosphere */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-luxury border border-blush/80 flex flex-col">
            
            {/* Visual Header / Map simulation */}
            <div className="relative h-64 sm:h-72 w-full bg-ivory-dark overflow-hidden flex items-center justify-center border-b border-blush">
              {/* Background styled map pattern */}
              <iframe
                title="Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59648.88939223727!2d77.3000!3d20.9200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a40a83151b75%3A0x6b77c8e96d92!2sDaryapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-90 opacity-80"
                loading="lazy"
              />

              {/* Location Card Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-champagne/40 max-w-xs text-left">
                <div className="flex items-center gap-2 text-burgundy font-serif font-bold text-sm">
                  <MapPin className="w-4 h-4 text-rose" />
                  <span>Glamora by Pallavi</span>
                </div>
                <p className="text-[11px] text-chocolate/70 mt-1 leading-snug">
                  Dongargav, Chandikapur, Daryapur, Dist. Amravati - 444802
                </p>
                <a
                  href={salonInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:text-burgundy mt-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Studio Guidelines / Experience card */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-chocolate">
                  Planning Your Salon Visit
                </h4>
                <p className="text-xs sm:text-sm text-chocolate/75 mt-1 leading-relaxed">
                  To ensure dedicated attention for each client and bridal party, prior appointment booking is highly encouraged. For wedding day makeup or destination styling inquiries across Amravati district, please connect at least 2 weeks in advance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-chocolate/70">
                <div className="p-2.5 rounded-lg bg-ivory border border-blush/60">
                  <span className="font-semibold text-burgundy block">Bridal Trials Available</span>
                  <span>Personalized consultation prior to your wedding day</span>
                </div>
                <div className="p-2.5 rounded-lg bg-ivory border border-blush/60">
                  <span className="font-semibold text-burgundy block">Hygienic Care Standards</span>
                  <span>Sanitized tools &amp; disposable applicators</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
