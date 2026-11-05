import React from 'react';
import { salonInfo, signatureServices } from '../data/salonData';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Pallavi', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal Studio', href: '#bridal' },
    { name: 'Gallery Portfolio', href: '#gallery' },
    { name: 'Why Choose Us', href: '#experience' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-chocolate text-ivory relative border-t border-champagne/30 overflow-hidden">
      {/* Decorative top ambient light */}
      <div className="absolute top-0 left-1/3 w-96 h-32 bg-burgundy/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-bold text-white tracking-tight">
                  Glamora
                </span>
                <Sparkles className="w-4 h-4 text-champagne" />
              </div>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-champagne-light font-medium -mt-1">
                by Pallavi
              </span>
            </div>

            <p className="text-sm text-ivory/75 max-w-sm leading-relaxed">
              A luxury beauty parlour and bridal sanctuary in Chandikapur, Daryapur, led by certified beauty professional <strong>Pallavi Umale</strong>. Dedicated to bespoke makeup artistry, radiant skincare, and timeless bridal transformations.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${salonInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-ivory flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram SVG */}
              <a
                href="#contact"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose text-ivory flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="#contact"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose text-ivory flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube SVG */}
              <a
                href="#contact"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose text-ivory flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory/70">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Signature Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory/70">
              {signatureServices.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-champagne transition-colors"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Salon Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Salon Address &amp; Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {salonInfo.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <a
                  href={`tel:${salonInfo.rawPhone}`}
                  className="hover:text-champagne transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a
                  href={`mailto:${salonInfo.email}`}
                  className="hover:text-champagne transition-colors"
                >
                  {salonInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-ivory/70">Mon - Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-xs text-ivory/70">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Designer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Glamora by Pallavi. All rights reserved. Designed &amp; Developed by{' '}
            <span className="text-champagne font-semibold tracking-wide">
              {salonInfo.developerName}
            </span>.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-ivory/40">Amravati • Vidarbha</span>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-ivory transition-colors"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
