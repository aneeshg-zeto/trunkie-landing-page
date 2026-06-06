'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {EmergingMascot} from '@/components/ui/EmergingMascot';

export function CTASection() {
  return (
    <section className="relative bg-[#F5C842] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(15,31,61,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-28 md:pb-32">
        <div className="max-w-2xl text-center md:text-left">
          <h2
            className="font-display font-bold text-[48px] md:text-[72px] text-[#0F1F3D] leading-[0.95] tracking-[-0.02em]"
            style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
          >
            Ready to run
            <br />
            a smarter school?
          </h2>
          <p className="mt-5 font-body text-[18px] text-[#0F1F3D]/65 leading-relaxed max-w-lg">
            No long setup. No IT team needed. Schools are live in hours.
          </p>
          <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}} className="inline-block mt-8">
            <Link
              href="/demo"
              className="inline-block bg-[#0F1F3D] text-white font-display font-semibold text-[16px] px-10 py-4 rounded-full no-underline transition-shadow hover:shadow-[0_12px_32px_rgba(15,31,61,0.25)]"
            >
              Book a Free Demo →
            </Link>
          </motion.div>
        </div>
      </div>

      <EmergingMascot
        src="/assets/joy-removebg-preview.png"
        alt="Trunkie"
        width={280}
        height={340}
        emerge={36}
        className="hidden md:block absolute bottom-0 right-6 lg:right-16"
      />
    </section>
  );
}
