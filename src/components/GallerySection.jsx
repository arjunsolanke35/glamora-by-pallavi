import React, { useState, useEffect } from 'react';
import { galleryItems } from '../data/salonData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Mehendi'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Lightbox navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Our Work &amp; Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Artistry in <span className="italic font-normal text-burgundy font-serif">Every Detail</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-2xl mx-auto">
            A glimpse into our bespoke bridal transformations, festive makeup, intricate mehendi art, and hair styling created with passion and precision.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-burgundy text-white shadow-sm'
                    : 'bg-white text-chocolate/70 hover:bg-blush hover:text-burgundy border border-champagne/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover bg-white border border-blush cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle initial gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Category Pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 text-burgundy backdrop-blur-md shadow-sm">
                  {item.category}
                </span>

                {/* Hover overlay content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold leading-tight text-ivory">
                        {item.title}
                      </h4>
                      <p className="text-xs text-ivory/80 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-2">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Static title on mobile/non-hover */}
                <div className="absolute bottom-3 left-4 right-4 group-hover:opacity-0 transition-opacity">
                  <h4 className="font-serif text-base font-semibold text-white drop-shadow">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-chocolate/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Image & Caption Box */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl border border-white/10"
            />
            
            <div className="mt-4 text-center max-w-lg">
              <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
