import React from 'react';
import { HERO_IMAGE_URL, PREMIUM_STYLING_URL, SERVICES, REVIEWS, BUSINESS_STATS, POPULAR_PACKAGES } from '../data';
import { Scissors, Star, Shield, ShieldCheck, Heart, Sparkles, Phone, Award, Clock, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 text-white min-h-[85vh] flex items-center">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Royal Cuts Men's Salon Interior"
            className="h-full w-full object-cover object-center opacity-40 scale-105 filter brightness-90 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-950 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <hgroup className="space-y-6">
              <h2 className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-mono uppercase tracking-widest text-amber-400">
                <Sparkles className="h-3 w-3 animate-pulse" />
                Delhi's Elite Grooming Experience
              </h2>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] uppercase">
                Where Style <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-500 font-serif italic font-medium normal-case">
                  Meets Royalty
                </span>
              </h1>
            </hgroup>

            <div className="space-y-3 max-w-xl">
              <p className="text-justify text-base text-stone-300 md:text-lg leading-relaxed">
                Welcome to Royal Cuts, the top rated barber shop dedicated to modern men's grooming. Whether you need a crisp <a href="https://en.wikipedia.org/wiki/Hi-top_fade" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline decoration-amber-400/50 hover:text-amber-300 transition-colors">skin fade haircut</a> style or professional beard trimming, our expert stylists deliver precision craftsmanship.
              </p>
              <p className="text-justify text-base text-stone-300 md:text-lg leading-relaxed">
                Backed by a <strong className="text-white font-semibold">98.4% client retention rate</strong> across <strong className="text-white font-semibold">15,000+ happy clients</strong>, visit the premier men salon in Najafgarh, Delhi for an unmatched studio experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-book-btn"
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-base font-bold text-stone-950 hover:bg-amber-400 transition-all font-display shadow-lg shadow-amber-500/10 active:scale-95 duration-150"
              >
                Book Your Station
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <button
                id="hero-services-btn"
                onClick={() => onNavigate('services')}
                className="flex items-center justify-center gap-2 rounded-lg border border-stone-700 bg-stone-900/80 px-8 py-4 text-base font-bold text-white hover:bg-stone-800 transition-all font-display shadow-md active:scale-95 duration-150"
              >
                View Services & Prices
              </button>
            </div>

            {/* Quick trust items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 border-t border-stone-800/80 max-w-2xl">
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm font-medium">100% Hygienic</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400 flex-shrink-0" />
                <span className="text-sm font-medium">4.8/5 Rated Studio</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-stone-300">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm font-medium">9 AM - 9 PM Everyday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business statistics bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="rounded-2xl bg-stone-900 border border-stone-800 px-6 py-8 shadow-2xl md:px-12">
          <div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-3 md:grid-cols-6 md:gap-x-4 md:divide-x md:divide-stone-800">
            {BUSINESS_STATS.map((stat, i) => (
              <div key={i} className="px-2">
                <p className="font-display text-3xl font-extrabold text-amber-400 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-mono text-stone-400 uppercase tracking-widest leading-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Image & Quick Pitch */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <hgroup className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                ESTD 2019 • Najafgarh, Delhi
              </h3>
              <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl leading-[1.1] uppercase tracking-tight">
                Delhi's Signature <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 block">Men's Styling Haven</span>
              </h2>
            </hgroup>
            <div className="space-y-4">
              <p className="text-stone-300 leading-relaxed text-justify text-sm sm:text-base">
                At Royal Cuts, we believe grooming is more than just clipping hair—it is an exact science and art form. Established in 2019 by master barber Mohit Sharma, our studio brings world-class grooming standards to Najafgarh without compromise.
              </p>
              <p className="text-stone-300 leading-relaxed text-justify text-sm sm:text-base">
                With over <strong className="text-amber-400 font-semibold">25,000+ precision fades</strong> completed and an exceptional <strong className="text-amber-400 font-semibold">4.9★ Google rating</strong>, our certified staff of 5 specializes in customized proportions. We align every taper and razor line with your unique facial geometry.
              </p>
              <p className="text-stone-400 leading-relaxed text-justify text-xs sm:text-sm">
                Learn more about modern men's skin health and beard maintenance from authoritative benchmarks like the <a href="https://www.menshealth.com/style/g19546747/best-grooming-tips-for-men/" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold underline decoration-amber-400/40 hover:text-amber-300 transition-colors">Men's Health Grooming Manual</a>.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="pitch-about-btn"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors group text-sm sm:text-base"
              >
                Meet our expert styling team 
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-900 shadow-xl border-4 border-stone-800">
              <img
                src={PREMIUM_STYLING_URL}
                alt="Professional hair and beard sculpting session"
                className="h-full w-full object-cover duration-500 hover:scale-105"
              />
            </div>
            {/* Overlay float element */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 rounded-xl bg-stone-900 p-4 text-white shadow-xl border border-stone-800 max-w-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-stone-950 flex-shrink-0">
                <Scissors className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">10+ Years Craftsmanship</p>
                <p className="text-xs text-stone-400">Head stylist Mohit Sharma certifies every barber.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Pre-planned Packages */}
      <section className="bg-[#12100e] py-16 border-y border-stone-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <hgroup className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                Saves Time & Money
              </h3>
              <h2 className="font-serif text-3xl font-extrabold text-stone-100 uppercase tracking-tight">
                Popular Styling Packages
              </h2>
            </hgroup>
            <p className="text-stone-400 text-sm">
              We bundled our highly complementary hair, beard, scalp, and skin therapies together to offer maximum pampering at optimized rates.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="relative flex flex-col justify-between rounded-2xl bg-stone-900/60 p-6 shadow-xl border border-stone-800 hover:border-amber-500/30 transition-all group duration-300"
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 right-6 inline-flex rounded-full bg-stone-950 border border-amber-500 px-3 py-1 text-xs font-semibold text-amber-400 tracking-wide">
                    {pkg.badge}
                  </span>
                )}
                
                <div>
                  <h3 className="font-serif text-xl font-extrabold text-stone-100 uppercase group-hover:text-amber-400 transition-colors tracking-wide">
                    {pkg.name}
                  </h3>
                  <div className="my-4 flex items-baseline">
                    <span className="font-display text-3xl font-extrabold text-amber-400">₹{pkg.price}</span>
                    <span className="ml-1 text-xs text-stone-400 font-mono">/ service</span>
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 border-t border-stone-800 pt-5">
                    <p className="text-xs font-mono uppercase tracking-wider text-amber-500/80 font-bold mb-2">
                      What's Included:
                    </p>
                    {pkg.servicesIncluded.map((service, i) => (
                      <div key={i} className="flex items-center gap-2 text-stone-300 text-xs sm:text-sm">
                        <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-800">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full text-center rounded-lg bg-amber-500 py-3 text-xs sm:text-sm font-bold text-stone-950 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all font-display duration-150 active:scale-95"
                  >
                    Select Package Slots
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Highlight Reviews */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <hgroup className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
                What Customers Say
              </h3>
              <h2 className="font-serif text-3xl font-extrabold text-stone-100 uppercase tracking-tight">
                Verified Reviews
              </h2>
            </hgroup>
            <p className="text-stone-400 text-sm">
              We look after your hair as if it's ours. Here are the genuine, unfiltered reviews from local families, students, and professionals in Delhi.
            </p>
          </div>
          <button
            id="view-all-reviews"
            onClick={() => onNavigate('testimonials')}
            className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 hover:border-amber-500/20 text-amber-400 hover:text-amber-300 px-5 py-3 rounded-lg text-sm font-bold font-display transition-all"
          >
            Review all customer feedback & FAQs
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-stone-800 bg-stone-900/40 p-6 flex flex-col justify-between hover:bg-stone-900 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4">
                <div>
                  <h4 className="font-serif font-medium text-sm text-stone-100">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-stone-400 font-mono mt-0.5">{review.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/30 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                  Verified Visit
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact & Action CTA banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-2 border-amber-500/20 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h2 className="font-serif text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 sm:text-3xl uppercase tracking-tight">
              Ready to Upgrade Your Style Statement?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Step into Royal Cuts and let our specialized team pamper you. With our <strong className="text-amber-400 font-semibold">99.9% hygiene safety index</strong>, pre-booked appointments skip the long lines and give you dedicated, VIP attention.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 pt-2 text-stone-400 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5">📍 Najafgarh, Delhi</span>
              <span className="flex items-center gap-1.5">📞 +91 98765 43210</span>
              <span className="flex items-center gap-1.5">🕒 Open 9:00 AM – 9:00 PM</span>
            </div>
          </div>
          <button
            id="cta-book-btn"
            onClick={() => onNavigate('contact')}
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-950 px-8 py-4 rounded-xl text-base font-bold font-display tracking-wide uppercase transition-all shadow-xl hover:shadow-amber-500/10 active:scale-95 duration-150"
          >
            Claim Grooming Spot Now
          </button>
        </div>
      </section>
    </div>
  );
}
