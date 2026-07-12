import React, { useState } from 'react';
import { REVIEWS, FAQS } from '../data';
import { Star, MessageSquareCode, HelpCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Review Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
          Elite Reputation
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl uppercase tracking-tight">
          What Najafgarh Says About Us
        </h2>
        <p className="text-stone-400 text-sm sm:text-base">
          Our average customer rating is <strong className="text-amber-400 font-semibold">4.8 out of 5 stars</strong> across google maps & local citations. Read honest stories from Delhi college students, wedding couples, and senior citizens.
        </p>
      </section>

      {/* 2. Rating Breakdown stats & review cards */}
      <section className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Rating metrics column */}
        <div className="lg:col-span-4 rounded-2xl bg-stone-900 border border-stone-800 p-6 text-white text-left space-y-6 shadow-2xl">
          <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-amber-400">
            Rating Snapshot
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-extrabold text-white">4.8</span>
            <span className="text-stone-400 font-mono text-sm">/ 5.0</span>
          </div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          
          <p className="text-xs text-stone-400 leading-relaxed font-sans">
            Calculated based on 5,000+ satisfied customers visiting our Najafgarh studio. Our return rate is a record-breaking 95%.
          </p>

          <div className="space-y-3.5 border-t border-stone-800 pt-6">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">HAIRCUT SKILLS</span>
              <span className="text-amber-400 font-bold">98% Satisfied</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '98%' }} />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">BEARD SCULPTING</span>
              <span className="text-amber-400 font-bold text-right">96% Satisfied</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '96%' }} />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">HYGIENE & SAFETY</span>
              <span className="text-amber-400 font-bold">100% Satisfied</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Core Review Cards */}
        <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="rounded-2xl border border-stone-800 bg-stone-900/40 p-6 shadow-xl flex flex-col justify-between text-left hover:border-amber-500/30 hover:bg-stone-900 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" aria-label={`Rating: ${rev.rating} stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-stone-400">{rev.date}</span>
                </div>
                
                <p className="text-stone-300 italic text-sm sm:text-base leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-amber-400 font-mono text-xs font-black border border-stone-800">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-stone-100 uppercase tracking-wide">
                      {rev.author}
                    </h4>
                    <p className="text-[10px] text-stone-400 font-mono">Najafgarh, Delhi</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  Verified Visit
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) with Accordion Controls */}
      <section className="border-t border-stone-850 pt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-stone-100 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 text-sm">
            Everything you need to know about our services, timings, payment modes, and custom groom packages in Delhi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4" id="faq-accordions">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-stone-800 bg-stone-900/30 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 hover:bg-stone-900/50 transition-colors cursor-pointer"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-stone-100 uppercase tracking-wide flex items-center gap-3">
                    <HelpCircle className="h-4.5 w-4.5 text-amber-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-stone-300 border border-stone-800 font-bold text-sm sm:mt-0 transition-transform">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-left border-t border-stone-800 bg-stone-950/40">
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust and consultation banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-amber-500/10 p-8 max-w-3xl mx-auto text-left flex flex-col sm:flex-row items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-stone-950 flex-shrink-0 shadow-lg shadow-amber-500/20">
          <MessageSquareCode className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm uppercase text-stone-100 tracking-wide">
            Have a different question or styling query?
          </h4>
          <p className="mt-1 text-stone-300 text-xs sm:text-sm">
            Mohit Sharma and our stylists offer complimentary call-consultations! Reach out at <a href="tel:+919876543210" className="text-amber-400 font-bold hover:underline">+91 98765 43210</a> or write to <span className="font-mono text-[11px] bg-stone-950 px-2 py-0.5 rounded text-amber-400 border border-stone-800">royalcutsnajafgarh@gmail.com</span>. We respond promptly!
          </p>
        </div>
      </div>

    </div>
  );
}
