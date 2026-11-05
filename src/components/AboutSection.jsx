import React from 'react';
import { salonInfo } from '../data/salonData';
import { Award, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blush/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetrical Image Layout (Left Column) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image: Pallavi Umale's Real Photo */}
              <div className="relative z-10 w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={salonInfo.founderPhoto}
                  alt="Pallavi Umale — Certified Beauty and Bridal Makeup Professional"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Badge at Bottom of Primary Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-chocolate via-chocolate/75 to-transparent text-white">
                  <div className="flex items-center gap-2 text-champagne-light text-xs font-semibold tracking-wide uppercase">
                    <Award className="w-4 h-4 text-champagne" />
                    <span>Certified Professional</span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-ivory">
                    {salonInfo.founder}
                  </h4>
                  <p className="text-xs text-ivory/80 mt-0.5">
                    Lead Artist &amp; Founder, Glamora
                  </p>
                </div>
              </div>

              {/* Decorative Gold Leaf Accent Border */}
              <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-champagne rounded-tl-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-champagne rounded-br-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>About Glamora by Pallavi</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate leading-[1.15]">
              Beauty Is Personal. <br />
              <span className="italic font-normal text-burgundy font-serif">
                So Is Our Art.
              </span>
            </h2>

            {/* Subtext & Narrative */}
            <p className="font-sans text-base sm:text-lg text-chocolate/85 leading-relaxed">
              Welcome to <strong>Glamora by Pallavi</strong>, a sanctuary of bespoke elegance founded by <strong>Pallavi Umale</strong>. As a formally certified beauty and makeup professional, Pallavi brings refined technical mastery, hygienic care, and an artistic eye to every single client transformation.
            </p>

            <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed">
              We believe true glamour does not mask who you are; it elevates your natural grace. Whether designing an opulent bridal appearance, a radiant festive look, or offering restorative skincare treatments, our studio in Chandikapur, Daryapur is dedicated to making you feel effortlessly confident and radiant.
            </p>

            {/* Core Pillars / Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-chocolate/80">
                  Certified Professional Beauty Expertise
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-chocolate/80">
                  Gentle, Skin-Nurturing Formulations
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-chocolate/80">
                  Customized Looks For Every Occasion
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-chocolate/80">
                  Warm, Welcoming Parlour Sanctuary
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-all duration-300 shadow-md hover:shadow-burgundy-glow"
              >
                <span>Book a Consultation with Pallavi</span>
                <ArrowRight className="w-4 h-4 text-champagne" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-chocolate hover:text-burgundy underline underline-offset-4 transition-colors"
              >
                <span>Explore Signature Services</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
