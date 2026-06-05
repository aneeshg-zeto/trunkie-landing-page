
'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';
import {Testimonials} from '@/components/sections/Testimonials';
import {SectionWrapper} from '@/components/ui/SectionWrapper';

export default function ExperiencePage() {
  const personas = [
    {
      role: 'Principal',
      bg: 'cream',
      quote: 'I need to see everything at once, without asking anyone.',
      features: [
        'Live attendance dashboard',
        'Fee collection overview',
        'Staff performance data',
        'Academic progress by class',
      ],
    },
    {
      role: 'Teacher',
      bg: 'white',
      quote: 'I need to teach. Not fill forms.',
      features: [
        'One-click attendance',
        'Auto-generated exam papers',
        'Assignment tracking',
        'Parent messaging built in',
      ],
    },
    {
      role: 'Parent',
      bg: 'mist',
      quote: 'I need to know my child is okay, without calling the school.',
      features: [
        'Real-time attendance alerts',
        'Fee payment from phone',
        'Progress report access',
        'Direct teacher messaging',
      ],
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="bg-white pt-48 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline font-black text-[52px] md:text-[72px] leading-tight text-navy">
              Designed for the people who run schools.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Trunkie is built around how principals, teachers, and parents actually think — not how engineers imagine
              they do.
            </p>
          </div>
          <div className="flex justify-center">
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              <circle cx="60" cy="100" r="30" className="fill-yellow" />
              <rect x="110" y="70" width="50" height="70" className="fill-navy" rx="10" />
              <circle cx="100" cy="40" r="20" className="fill-mist" />
            </svg>
          </div>
        </div>
      </section>

      {personas.map((p, idx) => (
        <section key={idx} className={`py-32 ${p.bg === 'cream' ? 'bg-cream' : p.bg === 'mist' ? 'bg-mist' : 'bg-white'}`}>
          <div className="container mx-auto px-6 max-w-[1000px] flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-yellow text-[12px] font-bold tracking-[0.2em] uppercase font-body block mb-4">
                FOR {p.role.toUpperCase()}S
              </span>
              <h2 className="font-headline font-black text-navy text-[42px] md:text-[48px] leading-tight">
                {p.quote}
              </h2>
            </div>
            <div className="flex-1 w-full">
              <ul className="flex flex-col gap-6">
                {p.features.map((f, i) => (
                  <li key={i} className="text-navy font-black font-headline text-lg md:text-xl border-l-4 border-yellow pl-6">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <Testimonials />

      <section className="bg-navy py-32 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-headline font-black text-[32px] leading-[1.4]">
              DPDP Compliant.
              <br />
              Hosted on Indian Servers.
              <br />
              Works Offline.
              <br />
              Runs on 2G.
            </h2>
          </div>
          <div>
            <p className="text-white/60 text-lg font-body leading-relaxed">
              We built Trunkie for Indian conditions, not American ones. That means it works where connectivity is
              unreliable, where data privacy is non-negotiable, and where schools should not need an IT department to
              run their software.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
