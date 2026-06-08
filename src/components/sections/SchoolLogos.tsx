'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {SCHOOL_COUNT, schools} from '@/data/schoolLogos';

export function SchoolLogos() {
  return (
    <section
      className="max-w-[1280px] mx-auto px-8 py-20"
      style={{background: 'var(--cream, #FAFAF5)'}}
    >
      <h2
        className="font-display font-bold text-[42px] text-[#0F1F3D] text-center mb-3"
        style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
      >
        Schools that trust Trunkie.
      </h2>
      <p className="text-center mb-14">
        <span className="font-display font-bold text-[#F5C842]">{SCHOOL_COUNT}</span>
        <span className="font-body text-[16px] text-[#5A6478]"> schools and counting across Bharat.</span>
      </p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: '-60px'}}
        variants={{
          hidden: {},
          visible: {transition: {staggerChildren: 0.03}},
        }}
      >
        {schools.map((school) => (
          <motion.div
            key={school.src}
            variants={{
              hidden: {opacity: 0, y: 16},
              visible: {opacity: 1, y: 0, transition: {duration: 0.3, ease: 'easeOut'}},
            }}
            className="group flex min-h-[148px] cursor-default flex-col items-center justify-center gap-4 rounded-2xl border border-[#DDE1EB] bg-white px-5 py-6 transition-[border-color,box-shadow] duration-200 ease-out hover:border-[#F5C842] hover:shadow-[0_8px_24px_rgba(245,200,66,0.14)]"
            style={{
              boxShadow: '0 2px 8px rgba(15,31,61,0.05), inset 0 1px 0 rgba(255,255,255,1)',
            }}
          >
            <div style={{width: 128, height: 68, position: 'relative', flexShrink: 0}}>
              <Image
                src={school.src}
                alt={school.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                style={{objectFit: 'contain'}}
                loading="lazy"
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 600,
                color: '#5A6478',
                textAlign: 'center',
                lineHeight: 1.4,
                letterSpacing: '0.01em',
              }}
            >
              {school.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
