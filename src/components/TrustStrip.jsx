import React from 'react';
import { trustHighlights } from '../data/salonData';
import { Sparkles, Crown, ShieldCheck, Gem } from 'lucide-react';

export default function TrustStrip() {
  const iconMap = {
    Sparkles: Sparkles,
    Crown: Crown,
    ShieldCheck: ShieldCheck,
    Gem: Gem
  };

  return (
    <section className="bg-white border-y border-blush/60 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustHighlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-blush/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blush/50 border border-champagne/40 flex items-center justify-center shrink-0 text-burgundy group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-chocolate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-chocolate/70 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
