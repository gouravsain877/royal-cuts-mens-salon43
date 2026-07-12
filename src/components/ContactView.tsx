import React, { useState } from 'react';
import { SERVICES, POPULAR_PACKAGES, STYLISTS } from '../data';
import { Booking } from '../types';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, User, Ticket, Sparkles, CheckCircle2, Copy, Trash2 } from 'lucide-react';

interface ContactViewProps {
  preselectedServiceId?: string;
  onClearPreselectedService?: () => void;
}

export default function ContactView({ preselectedServiceId, onClearPreselectedService }: ContactViewProps) {
  // Booking state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId || 's1');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [selectedStylistId, setSelectedStylistId] = useState('sty1');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('10:00');
  const [bookingNotes, setBookingNotes] = useState('');

  // Status lists
  const [localBookings, setLocalBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('royal_cuts_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookingCompleted, setBookingCompleted] = useState<Booking | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Time slots list 9:00 AM to 9:00 PM
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '20:00', '20:30'
  ];

  // Calculate prices based on selection
  const getSelectedDetails = () => {
    let price = 0;
    let name = '';
    
    if (selectedPackageId) {
      const pkg = POPULAR_PACKAGES.find(p => p.id === selectedPackageId);
      if (pkg) {
        price = pkg.price;
        name = `${pkg.name} (Bundled)`;
      }
    } else {
      const serv = SERVICES.find(s => s.id === selectedServiceId);
      if (serv) {
        price = serv.price;
        name = serv.name;
      }
    }

    const stylist = STYLISTS.find(st => st.id === selectedStylistId);
    return { name, price, stylistName: stylist ? stylist.name : 'Mohit Sharma' };
  };

  const { name: finalItemName, price: finalPrice, stylistName } = getSelectedDetails();

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !bookingDate) {
      alert('Please fill in your Name, Phone Number, and select a convenient Date.');
      return;
    }

    const newBooking: Booking = {
      id: 'RC-' + Math.floor(100000 + Math.random() * 900000),
      customerName,
      customerPhone,
      customerEmail: customerEmail || undefined,
      serviceId: selectedServiceId,
      packageId: selectedPackageId || undefined,
      stylistId: selectedStylistId,
      date: bookingDate,
      time: bookingTime,
      status: 'confirmed',
      totalPrice: finalPrice,
      notes: bookingNotes || undefined
    };

    const updated = [newBooking, ...localBookings];
    setLocalBookings(updated);
    try {
      localStorage.setItem('royal_cuts_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Storage full', e);
    }

    setBookingCompleted(newBooking);
    
    // Clear inputs
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setBookingNotes('');
    
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('Are you sure you want to cancel this slot?')) {
      const updated = localBookings.filter(b => b.id !== id);
      setLocalBookings(updated);
      localStorage.setItem('royal_cuts_bookings', JSON.stringify(updated));
    }
  };

  const copyAppointmentCode = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Header with metadata and SEO keyword titles */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
          Online Reservation
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl uppercase tracking-tight">
          Book Your Royal Station
        </h2>
        <p className="text-stone-400 text-sm sm:text-base">
          Reserve your haircut, beard trim, or relaxing treatment with your preferred stylist. No prepayments needed—pay securely at the shop in Najafgarh of Delhi.
        </p>
      </section>

      {/* Grid of details & forms */}
      <div className="grid gap-12 lg:grid-cols-12 items-start" id="booking-grid">
        
        {/* Left Side: Business Info cards / map details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-stone-900/40 border border-stone-800 p-6 space-y-6 text-left shadow-xl">
            <h3 className="font-serif text-lg font-extrabold uppercase tracking-wide text-stone-100">
              Salon Contact Info
            </h3>

            <div className="space-y-4">
              <a href="https://maps.google.com/?q=Najafgarh+Delhi+India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 group text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-amber-500/80">Our Studio Address</h4>
                  <p className="text-stone-200 text-sm group-hover:text-amber-400 transition-colors">
                    Najafgarh, Delhi-110043, India
                  </p>
                  <p className="text-stone-400 text-xs text-justify mt-0.5 leading-normal">
                    Centrally located in the heart of Najafgarh's primary market block, easily accessible with broad parking facilities.
                  </p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-start gap-3.5 group text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-amber-500/80">Phone Hotline</h4>
                  <p className="text-stone-100 text-sm font-bold group-hover:text-amber-400 transition-colors">
                    +91 98765 43210
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5 leading-normal">
                    Give us a phone ring for urgent bookings or late-night consultations.
                  </p>
                </div>
              </a>

              <a href="mailto:royalcutsnajafgarh@gmail.com" className="flex items-start gap-3.5 group text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-amber-500/80">Electronic Mail</h4>
                  <p className="text-stone-200 text-sm group-hover:text-amber-400 transition-colors font-mono">
                    royalcutsnajafgarh@gmail.com
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    For corporate events, groom associations, and vendor query.
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3.5 text-left pt-3 border-t border-stone-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950/30 text-emerald-400 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-emerald-400/80">Studio Work Timings</h4>
                  <p className="text-stone-200 text-sm font-semibold">
                    Monday – Sunday: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Open all days, throughout summer, monsoon, and festivals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Interactive Map Mockup */}
          <div className="rounded-2xl bg-stone-950 border border-stone-850 p-6 text-white text-left space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-amber-500 tracking-wider font-bold">LIVE METRO TRACKING</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            
            <h4 className="font-display text-sm font-extrabold uppercase text-white">
              Centrally Located in Najafgarh
            </h4>
            
            {/* Simulated map route dashboard */}
            <div className="rounded-lg bg-stone-900/90 border border-stone-800 p-4 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-[11px] text-stone-400 border-b border-stone-800 pb-2">
                <span>START: Delhi Metro Station</span>
                <span>Distance: ~800m</span>
              </div>
              <div className="space-y-2 text-stone-300">
                <p>🚶‍♂️ <strong>Walk:</strong> ~10 minutes from Najafgarh Metro Station Gate 1.</p>
                <p>🚗 <strong>Parking:</strong> Free street side & dedicated indoor cellar blocks.</p>
              </div>
            </div>

            {/* Custom vector representation of map pin */}
            <div className="aspect-video w-full rounded-lg bg-stone-900 overflow-hidden relative flex items-center justify-center border border-stone-800">
              {/* Minimalist vector illustration of crossroads */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-500/20" />
              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-amber-500/20" />
              <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-stone-700" />
              
              <div className="absolute top-[48%] left-[28%] flex flex-col items-center">
                <div className="h-3 w-3 bg-red-500 rounded-full animate-ping absolute" />
                <div className="h-4 w-4 bg-amber-500 rounded-full border-2 border-slate-900 relative z-10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-stone-950 rounded-full" />
                </div>
                <span className="font-mono text-[9px] bg-stone-950 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded mt-1 shadow font-bold uppercase tracking-wider">
                  Royal Cuts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-stone-900/40 border border-stone-800 p-6 sm:p-8 text-left shadow-2xl">
            
            {bookingCompleted ? (
              // Success Feedback View
              <div className="space-y-6 text-center py-6 animate-scale-up" id="booking-success-pnl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/30 text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-extrabold uppercase text-stone-100 tracking-wide">
                    Station Reserved!
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm">
                    Thank you <strong>{bookingCompleted.customerName}</strong>. Your grooming station has been locked in. Show this reservation card at Royal Cuts.
                  </p>
                </div>

                {/* Styled Reservation Board Card */}
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-5 text-left space-y-4 max-w-md mx-auto relative overflow-hidden shadow-xl">
                  <div className="absolute -right-6 top-3 rotate-45 bg-amber-500 text-stone-950 font-mono text-[9px] font-bold px-6 py-0.5 tracking-widest uppercase">
                    CONFIRMED
                  </div>

                  <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-stone-400 uppercase">RESERVATION ID</span>
                      <p className="font-mono text-base font-extrabold text-stone-100 flex items-center gap-1.5">
                        {bookingCompleted.id}
                        <button
                          type="button"
                          onClick={() => copyAppointmentCode(bookingCompleted.id)}
                          className="text-stone-400 hover:text-amber-400 transition-colors"
                          title="Copy Reservation ID"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </p>
                    </div>
                    {copiedText && <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">Copied!</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-stone-400 uppercase text-[9px] font-mono">SERVICE / DEAL</span>
                      <p className="font-bold text-stone-200 mt-0.5">{finalItemName}</p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase text-[9px] font-mono">BILL AMOUNT</span>
                      <p className="font-extrabold text-amber-450 text-sm mt-0.5">₹{bookingCompleted.totalPrice}</p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase text-[9px] font-mono">APPOINTMENT HOUR</span>
                      <p className="font-bold text-stone-200 mt-0.5 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-amber-500" />
                        {bookingCompleted.date} • {bookingCompleted.time}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase text-[9px] font-mono">SELECTED BARBER</span>
                      <p className="font-bold text-stone-200 mt-0.5">{stylistName}</p>
                    </div>
                  </div>

                  {bookingCompleted.notes && (
                    <div className="border-t border-stone-800 pt-3 text-xs">
                      <span className="text-stone-400 text-[9px] font-mono uppercase">YOUR SPECIAL NOTE:</span>
                      <p className="text-stone-300 italic mt-0.5">"{bookingCompleted.notes}"</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <button
                    onClick={() => setBookingCompleted(null)}
                    className="rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-2.5 text-xs font-bold font-serif uppercase tracking-wide transition-all"
                  >
                    Book another station
                  </button>
                </div>
              </div>
            ) : (
              // Booking input fields
              <form onSubmit={handleBookSubmit} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
                  <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                  <h3 className="font-serif text-lg font-extrabold uppercase text-stone-100 tracking-wide">
                    Station Booking Scheduler
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-cx-name" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                      Your Full Name <span className="text-amber-450">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-stone-500">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        id="form-cx-name"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Gaurav Saini"
                        className="w-full pl-9 pr-4 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>

                  {/* Phone number field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-cx-phone" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                      Mobile Number <span className="text-amber-450">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-stone-500 text-xs font-mono font-bold">
                        +91
                      </span>
                      <input
                        id="form-cx-phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Email (Optional, used for local stats) */}
                <div className="space-y-1.5">
                  <label htmlFor="form-cx-email" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                    Email Address <span className="text-stone-500">(Optional)</span>
                  </label>
                  <input
                    id="form-cx-email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="e.g. you@gmail.com"
                    className="w-full px-4 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                  />
                </div>

                {/* Service type Selection (Group vs package toggle) */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="form-service" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                      Select Individual Service
                    </label>
                    <select
                      id="form-service"
                      disabled={!!selectedPackageId}
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full px-3 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30 disabled:opacity-40"
                    >
                      {SERVICES.map((serv) => (
                        <option key={serv.id} value={serv.id} className="bg-stone-950 text-stone-100">
                          {serv.name} (₹{serv.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="form-package" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                        OR Select Grooming Package
                      </label>
                      {selectedPackageId && (
                        <button
                          type="button"
                          onClick={() => setSelectedPackageId('')}
                          className="text-[10px] text-red-400 hover:underline font-bold font-mono"
                        >
                          [CLEAR PACKAGE]
                        </button>
                      )}
                    </div>
                    <select
                      id="form-package"
                      value={selectedPackageId}
                      onChange={(e) => {
                        setSelectedPackageId(e.target.value);
                      }}
                      className="w-full px-3 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                    >
                      <option value="" className="bg-stone-950 text-stone-400">-- No package selected --</option>
                      {POPULAR_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id} className="bg-stone-950 text-stone-100">
                          {pkg.name} (₹{pkg.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Select Stylist Specialist */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-stylist" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                      Choose Styling Expert
                    </label>
                    <select
                      id="form-stylist"
                      value={selectedStylistId}
                      onChange={(e) => setSelectedStylistId(e.target.value)}
                      className="w-full px-3 py-3 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                    >
                      {STYLISTS.map((st) => (
                        <option key={st.id} value={st.id} className="bg-stone-950 text-stone-100">
                          {st.name} ({st.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Pick */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-date" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                      Appointment Date <span className="text-amber-455">*</span>
                    </label>
                    <input
                      id="form-date"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-2.5 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                    />
                  </div>
                </div>

                {/* Time slot toggle pills */}
                <div className="space-y-2">
                  <span className="block text-xs font-mono font-bold text-amber-500 uppercase">
                    Select Time Hour Slot <span className="text-amber-450">*</span>
                  </span>
                  <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 max-h-36 overflow-y-auto p-1 border border-stone-800 rounded-lg">
                    {timeSlots.map((time) => {
                      const isSelected = bookingTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          id={`time-${time.replace(':', '')}`}
                          onClick={() => setBookingTime(time)}
                          className={`py-1.5 text-xs font-mono border rounded-md transition-all ${
                            isSelected
                              ? 'bg-amber-500 text-stone-950 border-amber-600 font-extrabold'
                              : 'bg-stone-950 hover:bg-stone-900 text-stone-300 hover:text-stone-100 border-stone-800'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <span className="block text-[10px] text-stone-400 font-sans italic">
                    Appointments are available from 9:00 AM to 9:00 PM everyday.
                  </span>
                </div>

                {/* Extra Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="form-notes" className="block text-xs font-mono font-bold text-amber-500 uppercase">
                    Special Styling Requests <span className="text-stone-500">(Optional)</span>
                  </label>
                  <textarea
                    id="form-notes"
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    placeholder="e.g. fade styling requests, allergy warnings or package details"
                    rows={2}
                    className="w-full px-4 py-2.5 border border-stone-850 rounded-lg text-sm bg-stone-950 text-stone-100 focus:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                  />
                </div>

                {/* Summary calculation line to increase conversion metrics */}
                <div className="rounded-xl bg-stone-950 border border-stone-805 p-4 text-white flex justify-between items-center text-xs">
                  <div>
                    <span className="text-stone-400 font-mono text-[10px] uppercase">ESTIMATED PRICE</span>
                    <p className="font-serif font-extrabold text-stone-100 text-sm sm:text-base tracking-wide">{finalItemName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-400 font-serif font-black text-lg sm:text-xl">₹{finalPrice}</p>
                    <span className="text-stone-500 text-[9px] font-mono leading-none">NO TAX FEES</span>
                  </div>
                </div>

                {/* Submit Trigger */}
                <button
                  id="book-submit-btn"
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-extrabold font-serif uppercase tracking-wide active:scale-[0.98] transition-all duration-200 shadow-lg"
                >
                  Verify & Lock Time Slot
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* 4. Active Appointments Dashboard (Demonstrates strong full offline capability) */}
      {localBookings.length > 0 && (
        <section className="border-t border-stone-850 pt-16 space-y-8">
          <div className="text-left space-y-2">
            <h3 className="font-serif text-2xl font-extrabold text-stone-100 uppercase tracking-wide">
              Your Upcoming Reservations
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm">
              These are your locally registered grooming slots. You can modify, cancel, or show these cards at Royal Cuts in Najafgarh, Delhi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localBookings.map((b) => {
              // Find local names
              let bookingItemName = '';
              if (b.packageId) {
                bookingItemName = POPULAR_PACKAGES.find(p => p.id === b.packageId)?.name || 'Bundled Package';
              } else {
                bookingItemName = SERVICES.find(s => s.id === b.serviceId)?.name || 'Hair Service';
              }
              const barberName = STYLISTS.find(st => st.id === b.stylistId)?.name || 'Mohit Sharma';

              return (
                <article
                  key={b.id}
                  className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 text-left relative overflow-hidden flex flex-col justify-between shadow-sm hover:border-amber-500/30 hover:bg-stone-900 transition-all duration-300"
                >
                  <div className="absolute right-3 top-3 inline-flex rounded bg-emerald-950/30 px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-400 border border-emerald-500/25 uppercase tracking-widest">
                    ACTIVE
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-stone-500 font-mono uppercase">RESERVATION ID</span>
                      <p className="font-mono text-sm font-extrabold text-stone-100 flex items-center gap-1.5">
                        {b.id}
                        <button
                          onClick={() => copyAppointmentCode(b.id)}
                          className="text-stone-500 hover:text-amber-400 transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-1.5 text-xs">
                      <div>
                        <span className="text-stone-500 text-[9px] font-mono block">SERVICE</span>
                        <span className="font-bold text-stone-200">{bookingItemName}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[9px] font-mono block">Specialist</span>
                        <span className="font-bold text-stone-300">{barberName}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[9px] font-mono block">Date & Time</span>
                        <p className="font-semibold text-stone-300 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-amber-500" />
                          {b.date} • {b.time}
                        </p>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[9px] font-mono block">PRICE ESTIMATE</span>
                        <span className="font-extrabold text-amber-400">₹{b.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-400 font-sans flex items-center gap-1 bg-emerald-950/30 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                      ✔ Lock Guaranteed
                    </span>
                    <button
                      onClick={() => handleCancelBooking(b.id)}
                      className="text-stone-400 hover:text-red-400 transition-colors flex items-center gap-1 text-[11px] font-mono uppercase"
                      title="Cancel Slot"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Cancel Slot
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}
