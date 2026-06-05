
'use client';

import {motion} from 'framer-motion';

export function GyanISection() {
  return (
    <section className="bg-navy py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px] grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-yellow text-[12px] font-bold tracking-[0.2em] uppercase font-body block mb-4">
            MEET GYANI
          </span>
          <h2 className="font-headline font-black text-[44px] md:text-[58px] text-white leading-[1.1]">
            The intelligence powering India's best schools.
          </h2>
          <p className="mt-8 text-white/55 text-lg font-body leading-[1.7] max-w-[420px]">
            GyanI learns how your school works, surfaces what matters, and quietly handles what it can.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {[
              "Adapts to each student's learning pace automatically.",
              'Flags attendance problems before they become serious.',
              'Automates routine admin work without being asked.',
            ].map((text, idx) => (
              <div key={idx} className="border-l-4 border-yellow pl-4">
                <p className="text-white text-base md:text-lg font-medium font-body leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{rotateZ: 360}}
            transition={{duration: 60, repeat: Infinity, ease: 'linear'}}
            className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-yellow/15 flex justify-center items-center"
          >
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-white/10 flex justify-center items-center">
              <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-navy-light border border-white/15 flex justify-center items-center relative overflow-hidden">
                {/* SVG Elephant Mascot Simplified */}
                <svg viewBox="0 0 100 100" className="w-16 h-16 fill-yellow">
                  <circle cx="50" cy="40" r="18" />
                  <circle cx="50" cy="70" r="22" />
                  <path d="M35 30 L20 40 L35 50 Z" />
                  <path d="M65 30 L80 40 L65 50 Z" />
                  <path d="M45 50 Q45 65 35 65" stroke="#F5C842" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Orbiting Dots */}
            {[
              {delay: 0, duration: 8},
              {delay: 120, duration: 12},
              {delay: 240, duration: 16},
            ].map((orbit, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-full"
                style={{rotate: `${orbit.delay}deg`}}
                animate={{rotate: 360 + orbit.delay}}
                transition={{duration: orbit.duration, repeat: Infinity, ease: 'linear'}}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow rounded-full shadow-[0_0_15px_rgba(245,200,66,0.5)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
