
'use client';

import {motion} from 'framer-motion';

export function CTASection() {
  return (
    <section className="bg-yellow py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="font-headline font-black text-[48px] md:text-[76px] leading-[0.95] text-navy mb-8"
        >
          Ready to run
          <br />
          a smarter school?
        </motion.h2>
        <p className="text-navy/65 text-lg md:text-xl font-body max-w-xl mx-auto mb-12">
          No long setup. No IT team needed. Schools are live in hours.
        </p>

        <motion.button
          whileHover={{scale: 1.03}}
          whileTap={{scale: 0.97}}
          className="bg-navy text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-navy/90 transition-all"
        >
          Book a Free Demo →
        </motion.button>
      </div>
    </section>
  );
}
