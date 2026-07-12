import React from 'react';
import { STYLISTS, WHY_CHOOSE_US, HERO_IMAGE_URL } from '../data';
import { Award, Scissors, Star, CheckCircle, HeartHandshake, Smile, ThermometerSnowflake, Users } from 'lucide-react';

export default function AboutView() {
  // Let's create a mapper for icons for "Why Choose us" list items
  const iconMap: Record<string, React.ReactNode> = {
    'Experienced Barbers': <Users className="h-6 w-6 text-amber-500" />,
    'Affordable Pricing': <Award className="h-6 w-6 text-amber-500" />,
    'Hygienic Environment': <CheckCircle className="h-6 w-6 text-amber-500" />,
    'Modern Equipment': <Scissors className="h-6 w-6 text-amber-500" />,
    'Online Appointment Facility': <Smile className="h-6 w-6 text-amber-500" />,
    'Premium Hair Products': <HeartHandshake className="h-6 w-6 text-amber-500" />,
    'Air Conditioned Salon': <ThermometerSnowflake className="h-6 w-6 text-amber-500" />,
    'Free Consultation': <Star className="h-6 w-6 text-amber-500" />,
  };

  // Styled cartoon / vector styling avatar list depending on the experience
  const avatarColors = [
    'from-amber-500 to-amber-950',
    'from-stone-800 to-amber-900',
    'from-stone-700 to-amber-950',
    'from-amber-600 to-stone-950',
    'from-stone-900 to-amber-650',
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Brand Story */}
      <section className="grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Our Rich Legacy
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-stone-100 sm:text-4xl uppercase leading-tight tracking-tight">
            The Story of Royal Cuts
          </h2>
          <p className="text-stone-300 leading-relaxed text-sm sm:text-base text-justify">
            Since established in 2019, Royal Cuts Men’s Salon has served thousands of happy patrons in the Najafgarh area of Delhi. We set out on a very simple mission: to build a warm, inviting neighborhood grooming studio that brings premium, elite craftsmanship within everyone's humble reach.
          </p>
          <p className="text-stone-300 leading-relaxed text-sm sm:text-base text-justify">
            Founded and directed by veteran hair architect Mohit Sharma, who brings 10 full years of hands-on hair design experience, our salon fuses highly modern hair techniques with old-school barbering values. We believe every customer, from young college students to corporate professionals and respected senior citizens, deserves bespoke grooming recommendations.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-stone-400 border-t border-stone-800">
            <div>
              <span className="font-bold text-amber-400 block text-sm mb-1 uppercase">FOUNDED IN</span>
              <span>2019 (Najafgarh, Delhi)</span>
            </div>
            <div>
              <span className="font-bold text-amber-400 block text-sm mb-1 uppercase">TEAM STRUCTURE</span>
              <span>5 Barbers • 1 Receptionist</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-900 shadow-xl border-4 border-stone-900">
            <img
              src={HERO_IMAGE_URL}
              alt="Mohit Sharma at work"
              className="h-full w-full object-cover filter brightness-95"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-amber-500 p-6 shadow-2xl border border-amber-450 max-w-xs text-stone-950">
            <p className="font-serif text-lg font-bold uppercase tracking-tight text-stone-950">Mohit Sharma</p>
            <p className="text-xs font-mono uppercase tracking-widest font-bold text-stone-900/80">Founder & Stylist</p>
            <p className="mt-2 text-xs text-stone-950/90 italic font-semibold">
              "Grooming is not just about clipping hair. It serves as your personal signature and structural calibration."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Meet the Expert Team */}
      <section className="space-y-10 border-t border-stone-850 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Artisans of the Blade
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-stone-100 uppercase tracking-tight">
            Meet Our 5 Professional Barbers
          </h2>
          <p className="text-stone-400 text-sm">
            Handpicked hair architects trained directly under head stylist Mohit Sharma. Known for patience, absolute precision, and friendly service.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STYLISTS.map((barber, index) => (
            <div
              key={barber.id}
              className="group rounded-2xl bg-stone-900/40 border border-stone-800 p-6 hover:border-amber-500/30 hover:bg-stone-900 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Simulated Stylist Image with Initial Letter */}
                <div className={`aspect-video w-full rounded-xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white relative shadow-sm overflow-hidden border border-stone-850`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <span className="font-serif font-extrabold text-5xl opacity-45 select-none uppercase">
                    {barber.name.split(' ')[0][0]}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1 rounded bg-stone-950/80 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-amber-400 backdrop-blur-sm border border-stone-800">
                      EXP: {barber.experience}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-stone-100 uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                    {barber.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-500 font-bold uppercase">{barber.role}</p>
                </div>

                <div className="text-xs font-mono text-stone-400 flex items-center gap-2 bg-stone-950/80 border border-stone-850 px-2.5 py-1 rounded">
                  <span className="font-bold text-amber-450 uppercase">Specialty:</span>
                  <span className="truncate">{barber.specialty}</span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed text-justify">
                  {barber.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-1">
                  <Star className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-stone-200">{barber.rating}</span>
                  <span>/ 5.0 Rating</span>
                </div>
                <span className="text-amber-500/80 font-mono text-[10px] uppercase">Active Today</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us (8 elements) */}
      <section className="space-y-12 border-t border-stone-850 pt-16 bg-stone-900/20 p-6 sm:p-10 rounded-2xl border border-stone-800/40">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block">
            Our Quality Manifesto
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-stone-100 uppercase tracking-tight">
            Why Najafgarh Chooses Royal Cuts
          </h2>
          <p className="text-stone-400 text-sm">
            We don't just cut hairs. We build a clean, comfortable environment where you can de-stress, focus, and feel pampered.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-stone-900/40 p-5 border border-stone-800 flex flex-col gap-4 text-left hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                {iconMap[item.title] || <CheckCircle className="h-6 w-6 text-amber-500" />}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm uppercase text-stone-100 tracking-wide">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
