import React, { useState, useEffect } from 'react';
import { salonInfo } from '../data/salonData';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'services', 'bridal', 'gallery', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Bridal', href: '#bridal', id: 'bridal' },
    { name: 'Our Work', href: '#gallery', id: 'gallery' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-luxury py-3' : 'bg-ivory/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo */}
          <a 
            href="#home" 
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Glamora by Pallavi Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-burgundy font-semibold group-hover:text-rose transition-colors duration-200">
                Glamora
              </span>
              <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0 transform group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] text-chocolate/70 font-medium -mt-1 group-hover:text-chocolate transition-colors">
              by Pallavi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-burgundy font-semibold' 
                      : 'text-chocolate/80 hover:text-burgundy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-champagne rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-burgundy hover:bg-rose transition-all duration-300 shadow-sm hover:shadow-burgundy-glow transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne-light" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-chocolate hover:text-burgundy hover:bg-blush/40 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 top-[105px] z-50 bg-chocolate/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-ivory shadow-2xl p-6 transition-transform duration-300 ease-out border-l border-champagne/30 overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-4 border-b border-blush/60">
              <span className="font-serif text-2xl text-burgundy font-semibold block">
                Glamora
              </span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-chocolate/70">
                by Pallavi • Beauty Studio
              </span>
            </div>

            <nav className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-blush/60 text-burgundy font-semibold'
                      : 'text-chocolate hover:bg-blush/30 hover:text-burgundy'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-blush/60 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${salonInfo.rawPhone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-chocolate bg-white border border-champagne/40 hover:bg-blush/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose" />
                <span>Call {salonInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
