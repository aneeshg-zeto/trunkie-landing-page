'use client';

import {Navbar} from '@/components/sections/Navbar';
import {SchoolLogos} from '@/components/sections/SchoolLogos';
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function PartnersPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-cream pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              className="font-display font-bold text-[52px] md:text-[72px] leading-tight text-navy"
              style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
            >
              Build India's school future with us.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Trunkie is looking for schools, EdTech companies, and mission-aligned investors who believe every child in
              Bharat deserves better.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{y: [0, -12, 0]}}
              transition={{duration: 4.5, repeat: Infinity, ease: 'easeInOut'}}
            >
              <Image
                src="/assets/indian-removebg-preview.png"
                alt="Trunkie"
                width={380}
                height={420}
                style={{objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(15,31,61,0.10))'}}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SchoolLogos />
    </main>
  );
}
