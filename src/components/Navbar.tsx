import React, { useState } from 'react';
import { Scissors, Menu, X, Phone, Clock } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Reviews & FAQ' },
    { id: 'contact', label: 'Book Station' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-800/80 bg-stone-950/90 backdrop-blur-md text-stone-100 shadow-xl">
      {/* Top bar with quick info - desktop only */}
      <div className="hidden sm:block border-b border-stone-800 bg-stone-950 px-4 py-1.5 text-xs text-stone-400">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-amber-500" />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-amber-500" />
              9:00 AM – 9:00 PM (Mon-Sun)
            </span>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500/90">
            Najafgarh, Delhi • Established 2019
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group transition-transform"
          id="nav-logo-btn"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-stone-950 transition-transform group-hover:scale-105">
            <Scissors className="h-5 w-5 rotate-90" />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-stone-900" title="Salon Open" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold tracking-tight uppercase text-white md:text-xl">
              Royal Cuts
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">
              Men's Grooming Studio
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all relative ${
                  isActive
                    ? 'text-amber-400 font-bold'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500" />
                )}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('contact')}
            className="ml-4 rounded-md bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 hover:bg-amber-400 transition-all font-display hover:shadow-lg hover:shadow-amber-500/10 active:scale-95"
            id="nav-book-btn-desktop"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-stone-800 text-stone-300 hover:bg-stone-800/50 active:scale-95 transition-all"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900/95 backdrop-blur-md px-4 py-4 space-y-2 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500'
                    : 'text-stone-300 hover:bg-stone-800/40'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />}
              </button>
            );
          })}
          <div className="pt-4 border-t border-stone-800 text-stone-400 text-xs space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-amber-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              <span>9:00 AM – 9:00 PM (Mon-Sun)</span>
            </div>
            <div className="pt-2 text-[10px] font-mono text-center text-stone-500">
              NAJAFGARH, DELHI
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
