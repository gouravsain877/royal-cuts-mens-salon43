import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Clock, ShieldCheck, HelpCircle } from 'lucide-react';

interface ServicesViewProps {
  onSelectServiceAndBook: (service: Service) => void;
}

export default function ServicesView({ onSelectServiceAndBook }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'haircut' | 'styling' | 'grooming' | 'treatment'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircut', label: 'Haircuts' },
    { id: 'styling', label: 'Beard & Styling' },
    { id: 'grooming', label: 'Massage & Wash' },
    { id: 'treatment', label: 'Hair Spas & Facials' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
          Elite Menu
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl uppercase tracking-tight">
          Signature Grooming Menu
        </h2>
        <p className="text-stone-400 text-sm sm:text-base">
          Every hair cut and beard shape is calibrated to your facial proportions. We use ultra-premium products to nourish, shield, and repair your hair and skin.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`tab-category-${cat.id}`}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-amber-500 text-stone-950 font-extrabold shadow-lg shadow-amber-500/10'
                : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid/Table */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col justify-between rounded-xl bg-stone-900/40 p-6 border border-stone-800 shadow-xl hover:shadow-2xl hover:border-amber-500/30 hover:bg-stone-900/80 transition-all duration-300 text-left"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-100 uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>
                <span className="font-display text-lg font-extrabold text-amber-400 bg-stone-900/90 border border-amber-500/15 px-3 py-1 rounded-md">
                  ₹{service.price}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-500" />
                  {service.duration}
                </span>
                <span>•</span>
                <span className="uppercase text-[10px] bg-stone-900 border border-stone-800 px-1.5 py-0.5 rounded text-stone-300">
                  {service.category}
                </span>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-800 flex items-center justify-between">
              <div className="text-[11px] text-stone-400 font-mono flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
                Sanitized Station Included
              </div>
              <button
                onClick={() => onSelectServiceAndBook(service)}
                className="rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 text-xs font-bold font-display tracking-wide uppercase transition-all duration-150 cursor-pointer active:scale-95"
              >
                Book This Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Value Add-on Disclaimer */}
      <div className="rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
        <div className="space-y-1 max-w-2xl text-stone-100">
          <h4 className="font-serif font-extrabold text-sm uppercase text-amber-450 flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4 text-amber-500" />
            Hygienic Guarantee & Consultation
          </h4>
          <p className="text-stone-300 text-xs sm:text-sm">
            We operate in a fully sanitised setup where scissors and shavers are fully sterilized between appointments. Razors blades are strictly single-use only. Initial hair analysis is completely free!
          </p>
        </div>
        <div className="text-xs font-mono text-amber-400 font-bold bg-stone-900/80 px-3.5 py-1.5 rounded-lg border border-amber-500/20">
          NO HIDDEN TAXES OR SURCHARGES
        </div>
      </div>
    </div>
  );
}
