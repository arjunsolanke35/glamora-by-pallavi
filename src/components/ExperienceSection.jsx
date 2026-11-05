import React from 'react';
import { experienceHighlights } from '../data/salonData';
import { Sparkles, HeartHandshake, ShieldCheck, Coffee, Palette } from 'lucide-react';

export default function ExperienceSection() {
  const iconMap = {
    HeartHandshake: HeartHandshake,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    Coffee: Coffee,
    Palette: Palette
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>The Glamora Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Why Clients Entrust <br className="hidden sm:inline" />
            <span className="italic font-normal text-burgundy font-serif">Their Special Days to Us</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-2xl mx-auto">
            Beyond makeup and styling, we take pride in offering an atmosphere of serene comfort, genuine consultation, and devoted personal care.
          </p>
        </div>

        {/* Highlights 5-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceHighlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-ivory border border-blush hover:border-champagne/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blush/70 border border-champagne/30 flex items-center justify-center text-burgundy group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-burgundy" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-chocolate mt-5 group-hover:text-burgundy transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-chocolate/75 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-10 h-0.5 bg-champagne/40 rounded-full mt-6 group-hover:w-16 group-hover:bg-rose transition-all duration-300" />
              </div>
            );
          })}

          {/* Special Visual Sanctuary Card (6th slot to balance 3x2 grid) */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-burgundy to-rose text-ivory flex flex-col justify-between shadow-luxury">
            <div>
              <span className="text-xs uppercase tracking-widest text-champagne-light font-semibold">
                Client Promise
              </span>
              <h3 className="font-serif text-2xl font-bold mt-2 text-white">
                “Your Comfort &amp; Radiance Is Our Highest Priority.”
              </h3>
              <p className="text-xs sm:text-sm text-ivory/85 mt-3 leading-relaxed">
                Every appointment is scheduled with ample dedicated time so you never feel rushed, whether preparing for an engagement ceremony or indulging in a facial.
              </p>
            </div>
            
            <div className="pt-6">
              <span className="text-xs text-champagne-light italic font-serif">
                — Pallavi Umale, Certified Lead Artist
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
