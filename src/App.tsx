import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import GalleryView from './components/GalleryView';
import TestimonialsView from './components/TestimonialsView';
import ContactView from './components/ContactView';
import { Service } from './types';
import { Scissors, Phone, Clock, MapPin, Mail, Sparkles, Check, ChevronUp, MessageSquareShare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('s1');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Dynamic Google Ranking & Local SEO Setup: Inject LocalBusiness JSON-LD schema
  useEffect(() => {
    const origin = window.location.origin;
    // 1. Create JSON-LD schema payload
    const jsonLdPayload = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Royal Cuts Men's Salon",
      "image": [
        `${origin}/src/assets/images/royal_cuts_hero_1782125101399.jpg`,
        `${origin}/src/assets/images/haircut_beard_styling_1782125118210.jpg`
      ],
      "@id": `${origin}/#hairsalon`,
      "url": origin,
      "telephone": "+919876543210",
      "priceRange": "₹100 - ₹2499",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Najafgarh Main Market block",
        "addressLocality": "Najafgarh, New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110043",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6090,
        "longitude": 76.9859
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/royalcutsnajafgarh",
        "https://www.instagram.com/royalcutsnajafgarh"
      ]
    };

    // Replace or insert the HairSalon script element
    let scriptId = 'royal-cuts-seo-ldjson';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLdPayload);

    // Dynamic FAQPage schema injection
    const faqPayload = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Q: What hair and grooming services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A: We offer a full range of men's grooming services. This includes precision haircuts, scissor styling, skin fades, beard trimming, beard shaping, traditional hot towel straight-razor shaves, scalp massages, and quick face clean-ups."
        }
      },{
        "@type": "Question",
        "name": "Q: Can your barbers help me choose a haircut style?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A: Yes! Our master barbers are style consultants. We evaluate your head shape, facial proportions, hair density, and cowlicks to recommend custom hair and beard stylings."
        }
      },{
        "@type": "Question",
        "name": "Q: Do I need to make an appointment, or do you accept walk-ins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A: We accept both. However, we highly recommend booking an appointment in advance. Booking ensures you get your preferred time slot and your favorite barber with zero wait time."
        }
      },{
        "@type": "Question",
        "name": "Q: Where is Royal Cuts Men Salon located and what are the operational hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A: Our shop is located at Najafgarh Main Market block, New Delhi, Delhi 110043. We are open 7 days a week from 9:00 AM to 9:00 PM."
        }
      },{
        "@type": "Question",
        "name": "Q: Do you offer grooming packages or combo deals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A: Yes. We offer popular combo packages that combine a premium haircut with beard detailing or facial grooming at a discounted rate."
        }
      }]
    };

    let faqScriptId = 'royal-cuts-seo-faq-ldjson';
    let faqScriptElement = document.getElementById(faqScriptId) as HTMLScriptElement;
    if (!faqScriptElement) {
      faqScriptElement = document.createElement('script');
      faqScriptElement.id = faqScriptId;
      faqScriptElement.type = 'application/ld+json';
      document.head.appendChild(faqScriptElement);
    }
    faqScriptElement.textContent = JSON.stringify(faqPayload);

    // Dynamic document title updates based on current section for Google Search indexing context
    const tabTitles: Record<string, string> = {
      'home': "Royal Cuts Men's Salon | Premium Barbershop Najafgarh Delhi",
      'services': "Grooming Services & Pricing Table | Royal Cuts Najafgarh",
      'gallery': "Hairstyles & Salon Gallery Portfolio | Royal Cuts Delhi",
      'about': "Our Story & Professional Team | Royal Cuts Men's Salon",
      'testimonials': "Verified Customer Reviews & Salon FAQs | Royal Cuts",
      'contact': "Book Appointment & Work Hours | Royal Cuts Delhi"
    };
    document.title = tabTitles[activeTab] || "Royal Cuts Men's Salon Najafgarh";

    // Detect scroll for scroll-to-top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  const selectServiceAndNavigate = (service: Service) => {
    setPreselectedServiceId(service.id);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPreselectedService = () => {
    // leave as is or clear
  };

  // Scroll to top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-950 font-sans text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. SEOMarks Semantic Skip Nav Link for accessibility crawlers */}
      <a href="#main-root-content" className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-amber-500 focus:text-stone-950 focus:p-3 focus:rounded">
        Skip directly to salons content
      </a>

      {/* 2. Global Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Main content canvas - semantic structured wrapper */}
      <main className="flex-grow focus:outline-none" id="main-root-content" tabIndex={-1}>
        {activeTab === 'home' && (
          <HomeView onNavigate={(tabId) => {
            setActiveTab(tabId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
        
        {activeTab === 'services' && (
          <ServicesView onSelectServiceAndBook={selectServiceAndNavigate} />
        )}
        
        {activeTab === 'gallery' && (
          <GalleryView />
        )}
        
        {activeTab === 'about' && (
          <AboutView />
        )}
        
        {activeTab === 'testimonials' && (
          <TestimonialsView />
        )}
        
        {activeTab === 'contact' && (
          <ContactView 
            preselectedServiceId={preselectedServiceId} 
            onClearPreselectedService={handleClearPreselectedService} 
          />
        )}
      </main>

      {/* 4. Rich, SEO-Optimized Footer Section (High link authority & local citation anchors) */}
      <footer className="bg-stone-950 text-stone-300 border-t border-stone-880/50 pt-16 pb-8" aria-labelledby="footer-title">
        <h2 id="footer-title" className="sr-only">Royal Cuts Men's Salon Site Navigation</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-left">
            {/* Column 1: Brand & Mini About */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-stone-950">
                  <Scissors className="h-4.5 w-4.5 rotate-90" />
                </div>
                <span className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  Royal Cuts
                </span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed text-justify">
                High-end modern hair clippers, hair spas, and razor sculpting solutions in Najafgarh, Delhi. Founded in 2019 to establish premium, sterile men's grooming luxury.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a href="https://www.facebook.com/royalcutsnajafgarh" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-all text-xs font-bold" title="Follow us on Facebook">FB</a>
                <a href="https://www.instagram.com/royalcutsnajafgarh" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-all text-xs font-bold" title="Follow us on Instagram">IG</a>
                <a href="https://maps.google.com/?q=Najafgarh+Delhi+India" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-all text-xs font-bold" title="View location pin">MAP</a>
              </div>
            </div>

            {/* Column 2: Structural Link Navigation */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-extrabold uppercase text-white tracking-widest text-amber-550">
                Explore Pages
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-medium">
                <li>
                  <button onClick={() => { setActiveTab('home'); window.scrollTo({ top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                    Home Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('services'); window.scrollTo({ top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                    Grooming Menu & Fares
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('gallery'); window.scrollTo({ top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                    Actual Transform Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('about'); window.scrollTo({ top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                    Our Stylist Specialists
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('testimonials'); window.scrollTo({ top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                    Reviews & Accordion FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Localized Citation Tags (Superb Google Local SEO helper) */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-extrabold uppercase text-white tracking-widest text-amber-550">
                Delhi Local Services
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-450 leading-relaxed">
                <li>✂ Hairstyling near Najafgarh Market</li>
                <li>💈 Professional Fade Cutters Delhi</li>
                <li>🧖‍♂️ Relaxing Hair Spa & Damp Face Wash</li>
                <li>⚡ Keratin Hair Straightening Special</li>
                <li>🤵 Bridal Groom Packages Najafgarh</li>
                <li>🌿 Natural Organic Beard Cleansing oils</li>
              </ul>
            </div>

            {/* Column 4: Quick Contact Details */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-extrabold uppercase text-white tracking-widest text-amber-550">
                Contact Studio
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="flex items-center gap-2 text-stone-300">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  Najafgarh, Delhi-43
                </p>
                <p className="flex items-center gap-2 text-stone-300">
                  <Phone className="h-4 w-4 text-amber-500" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-2 text-stone-300">
                  <Clock className="h-4 w-4 text-amber-500" />
                  9:00 AM – 9:00 PM Everyday
                </p>
                <div className="pt-1.5 text-[11px] font-mono bg-stone-900 border border-stone-850 p-2.5 rounded text-stone-400">
                  ☎ Online Appointments avoid store waiting queues!
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom copyright with localized credentials */}
          <div className="pt-10 mt-10 border-t border-stone-900/90 text-center space-y-3.5">
            <p className="text-stone-500 text-[11px] sm:text-xs">
              © {new Date().getFullYear()} Royal Cuts Men's Salon. All rights reserved. Directed & Managed by <strong>Mohit Sharma</strong>.
            </p>
            <p className="text-[10px] text-stone-600 font-mono tracking-wide uppercase">
              Najafgarh's Premier Hair Salon and Grooming Space • Noida, Dwarka, Delhi-NCR Neighborhood Groom Studio Since 2019
            </p>
          </div>
        </div>
      </footer>

      {/* 5. Scroll & Jump back to top trigger */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-stone-950 shadow-xl border border-amber-600 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
