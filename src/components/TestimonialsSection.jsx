import React, { useState, useEffect } from 'react';
import { clientTestimonials } from '../data/salonData';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientTestimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, currentIndex]);

  const current = clientTestimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-ivory border-t border-blush/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Words from Our Patrons</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Client <span className="italic font-normal text-burgundy font-serif">Reflections</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-chocolate/60 max-w-lg mx-auto">
            (Client review placeholders for preview purposes — easily editable with verified testimonials)
          </p>
        </div>

        {/* Carousel Card Container */}
        <div 
          className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-luxury border border-blush/80"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Decorative Quote Icon Background */}
          <div className="absolute top-6 right-8 text-blush/40 pointer-events-none">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 text-champagne">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-champagne text-champagne" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-chocolate leading-relaxed max-w-3xl italic">
              “{current.quote}”
            </blockquote>

            {/* Client Info */}
            <div className="pt-2">
              <h4 className="font-sans text-base font-bold text-burgundy">
                {current.clientName}
              </h4>
              <p className="text-xs text-chocolate/70 uppercase tracking-widest mt-0.5">
                {current.serviceCategory} • {current.date}
              </p>
            </div>

          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-blush/50">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-ivory hover:bg-blush text-chocolate hover:text-burgundy border border-champagne/30 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {clientTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    currentIndex === idx 
                      ? 'w-7 bg-burgundy' 
                      : 'bg-blush hover:bg-rose/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-ivory hover:bg-blush text-chocolate hover:text-burgundy border border-champagne/30 transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
