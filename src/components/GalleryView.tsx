import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { ZoomIn, X, Info } from 'lucide-react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Vibe', 'Haircut', 'Beard', 'Treatment', 'Accessories', 'Grooming'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      
      {/* Semantic Headers Optimized for Local SEO (Najafgarh barber gallery) */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
          Visual Portfolio
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl uppercase tracking-tight">
          Royal Cuts Salon Gallery
        </h2>
        <p className="text-stone-400 text-sm sm:text-base">
          Explore our state-of-the-art facilities, actual hair and beard transformations, and premium hair products in Najafgarh, Delhi.
        </p>
      </div>

      {/* Category Filter Pills (Fully Responsive) */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-800 pb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`gallery-cat-${cat.toLowerCase()}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-amber-500 text-stone-950 font-extrabold shadow-lg shadow-amber-500/10'
                : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Responsive Grid for High Core Web Vitals */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="gallery-grid">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-stone-900/40 border border-stone-800 shadow-xl hover:border-amber-500/30 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-stone-950">
              <img
                src={item.imageUrl}
                alt={`${item.title} - Royal Cuts Men's Salon Najafgarh`}
                loading="lazy"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
              />
              {/* Blur-overlay on hover */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(item)}
                  className="rounded-full bg-amber-500 p-3 text-stone-950 shadow-md transform scale-90 group-hover:scale-100 transition-all hover:bg-amber-400 duration-150 cursor-pointer"
                  aria-label={`Zoom in on ${item.title}`}
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Captions - Great for Image SEO search queries */}
            <div className="p-4 bg-stone-900/80 text-left space-y-1">
              <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold">
                {item.category}
              </span>
              <h3 className="font-serif font-bold text-sm text-stone-100 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Local SEO Micro-copy section */}
      <div className="text-center rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 p-6 max-w-2xl mx-auto text-stone-300 text-xs sm:text-sm">
        <div className="flex justify-center mb-2">
          <Info className="h-5 w-5 text-amber-500" />
        </div>
        Interested in any of these hairstyles? Capture a screenshot or note the title (e.g., <strong>{GALLERY_ITEMS[1].title}</strong>) and show it to Mohit Sharma or any of our 5 specialists at the shop during your consultation!
      </div>

      {/* Cozy Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in" id="gallery-lightbox">
          <div className="relative max-w-3xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 text-white animate-scale-up text-left">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-stone-950">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-gradient-to-t from-stone-950 to-stone-900">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold">
                  {selectedImage.category}
                </span>
                <span className="text-stone-500">•</span>
                <span className="text-xs text-stone-400 font-semibold">Genuine Royal Cuts Style</span>
              </div>
              <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-white uppercase tracking-wide">
                {selectedImage.title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
