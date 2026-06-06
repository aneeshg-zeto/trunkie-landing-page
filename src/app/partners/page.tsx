'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';
import {motion} from 'framer-motion';

export default function PartnersPage() {
  const strips = [
    {
      label: 'FOR SCHOOLS',
      title: 'Become a Trunkie school.',
      desc: 'Early access, priority onboarding, shaped by your feedback. Join the schools already running smarter.',
      cta: 'Apply for Early Access →',
      bg: 'bg-cream',
      text: 'text-navy',
      btn: 'bg-navy text-white',
    },
    {
      label: 'FOR EDTECH PARTNERS',
      title: 'Integrate with Trunkie.',
      desc: 'Reach thousands of schools through our platform. Build on top of the platform.',
      cta: 'Talk to Our Team →',
      bg: 'bg-navy',
      text: 'text-white',
      btn: 'bg-yellow text-navy',
    },
    {
      label: 'FOR INVESTORS',
      title: 'Back India’s school infrastructure.',
      desc: 'We are building the operating system for Bharat’s schools. This is category-defining.',
      cta: 'Request Pitch Deck →',
      bg: 'bg-yellow',
      text: 'text-navy',
      btn: 'bg-navy text-white',
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="bg-white pt-48 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-display font-bold text-[52px] md:text-[72px] leading-tight text-navy">
              Build India's school future with us.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Trunkie is looking for schools, EdTech companies, and mission-aligned investors who believe every child in
              Bharat deserves better.
            </p>
          </div>
          <div className="flex justify-center">
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              <circle cx="100" cy="100" r="80" stroke="#F5C842" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="40" className="fill-navy" />
              <rect x="140" y="80" width="30" height="40" className="fill-mist" />
            </svg>
          </div>
        </div>
      </section>

      {strips.map((strip, idx) => (
        <section key={idx} className={`${strip.bg} py-32`}>
          <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <span className={`text-[12px] font-bold tracking-widest uppercase mb-4 block ${strip.text === 'text-white' ? 'text-yellow' : 'text-yellow'}`}>
                {strip.label}
              </span>
              <h2 className={`font-display font-bold text-[32px] md:text-[42px] leading-tight ${strip.text}`}>
                {strip.title}
              </h2>
            </div>
            <div className="max-w-md text-right md:text-left">
              <p className={`font-body text-lg mb-8 opacity-80 ${strip.text}`}>{strip.desc}</p>
              <button className={`${strip.btn} px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105`}>
                {strip.cta}
              </button>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-[600px]">
          <h2 className="text-center font-display font-bold text-navy text-[36px] mb-12">Get in touch.</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="border border-border rounded-xl px-5 py-4 font-body text-navy focus:border-yellow outline-none transition-all"
            />
            <input
              type="text"
              placeholder="School or Organisation"
              className="border border-border rounded-xl px-5 py-4 font-body text-navy focus:border-yellow outline-none transition-all"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-border rounded-xl px-5 py-4 font-body text-navy focus:border-yellow outline-none transition-all"
            />
            <button className="bg-yellow text-navy font-bold font-display py-5 rounded-xl text-xl hover:shadow-lg transition-all">
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
