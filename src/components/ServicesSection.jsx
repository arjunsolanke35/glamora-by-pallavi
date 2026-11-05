import React, { useState } from 'react';
import { signatureServices } from '../data/salonData';
import { Sparkles, ArrowRight, Check, Calendar } from 'lucide-react';

export default function ServicesSection({ onOpenBookingWithService }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Mehendi', 'Skincare', 'Grooming', 'Styling'];

  const filteredServices = activeFilter === 'All'
    ? signatureServices
    : signatureServices.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Our Signature Services</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Artfully Curated <span className="italic font-normal text-burgundy font-serif">Beauty Rituals</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-2xl mx-auto">
            From regal bridal ceremonies to everyday skin rejuvenation, explore our comprehensive menu of personalized beauty and grooming treatments.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-burgundy text-white shadow-sm'
                    : 'bg-ivory text-chocolate/80 hover:bg-blush hover:text-burgundy border border-blush/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-ivory rounded-2xl overflow-hidden border border-blush/80 hover:border-champagne/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-chocolate/10">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md text-burgundy border border-champagne/30 shadow-sm">
                  {service.category}
                </span>

                {/* Title overlay on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {service.name}
                  </h3>
                  <span className="text-xs text-champagne-light font-medium">
                    {service.priceInfo}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Service Features */}
                <div className="space-y-1.5 pt-1 border-t border-blush/60">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-chocolate/70">
                      <Check className="w-3.5 h-3.5 text-rose shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBookingWithService(service.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-burgundy bg-white border border-champagne/40 group-hover:bg-burgundy group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-champagne group-hover:text-champagne-light" />
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
