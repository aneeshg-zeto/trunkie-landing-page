'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import { Mascot } from '@/components/ui/Mascot';

export function Hero() {
  return (
    <section className="bg-cream min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[56px] md:text-[88px] font-bold leading-[0.9] font-display text-navy">
              One system.
              <br />
              <span className="text-yellow">Every school.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted font-body leading-[1.6] max-w-[480px]">
              Trunkie brings simplicity to school management. Admin, fees, and communication—all in one playful, powerful app.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="bg-yellow text-navy px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:translate-y-[-4px] transition-all font-display"
              >
                Book a Demo →
              </Link>
              <button className="bg-white border-2 border-navy text-navy px-10 py-5 rounded-full font-bold text-xl hover:bg-navy hover:text-white transition-all font-display">
                See How It Works
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-mist flex items-center justify-center overflow-hidden">
                     <img src={`https://picsum.photos/seed/${i}/40/40`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-navy/60 font-bold font-body">Trusted by 500+ schools across Bharat</p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-border relative z-10">
              <Mascot size={280} />
            </div>
            {/* Subtle background shape to ground the mascot */}
            <div className="absolute -inset-4 bg-yellow/20 rounded-[48px] -rotate-3 z-0" />
            <div className="absolute -inset-4 bg-navy/5 rounded-[48px] rotate-3 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
