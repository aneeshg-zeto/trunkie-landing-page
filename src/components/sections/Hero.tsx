
'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-cream min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            className="inline-block px-4 py-1 rounded-full bg-[#FFF8E1] border border-yellow/40 mb-8"
          >
            <span className="text-[11px] font-semibold text-yellow tracking-wider font-body">
              BHARAT'S LEADING SCHOOL PLATFORM
            </span>
          </motion.div>

          <h1 className="text-[52px] md:text-[80px] font-black leading-[0.95] font-headline text-navy">
            One system.
            <br />
            <span className="text-yellow">Every school.</span>
          </h1>

          <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
            India's leading school management platform. Bringing learning, admin, fees, and parent communication into
            one place, built for how Indian schools actually work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="bg-yellow text-navy px-8 py-4 rounded-full font-black text-lg shadow-lg hover:translate-y-[-2px] transition-all"
            >
              Book a Demo →
            </Link>
            <button className="border-2 border-navy text-navy px-8 py-4 rounded-full font-black text-lg hover:bg-navy/5 transition-all">
              See How It Works
            </button>
          </div>

          <p className="mt-8 text-[13px] text-muted font-body font-medium">Trusted by 500+ schools across Bharat</p>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow/8 rounded-full blur-3xl" />

          <motion.div
            animate={{y: [0, -12, 0]}}
            transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
            className="relative w-full max-w-[540px] aspect-[4/3] bg-white rounded-[24px] border border-border shadow-[0_32px_80px_rgba(15,31,61,0.12)] p-6 overflow-hidden"
          >
            {/* Mock Dashboard UI */}
            <div className="w-full h-10 bg-navy rounded-t-lg mb-4 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-16 h-2 rounded bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="h-20 bg-yellow rounded-xl" />
              <div className="h-20 bg-navy-light rounded-xl" />
              <div className="h-20 bg-mist rounded-xl" />
            </div>

            <div className="h-32 w-full flex items-end gap-2 px-4">
              {[40, 70, 55, 90, 45, 80, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-navy/10 rounded-t-md" style={{height: `${h}%`}} />
              ))}
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{x: -20, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: 0.5}}
              className="absolute bottom-12 left-[-20px] bg-white rounded-2xl p-4 shadow-xl border border-border w-40"
            >
              <div className="text-[28px] font-black text-yellow font-headline leading-none">94%</div>
              <div className="text-[10px] font-bold text-muted tracking-widest mt-1">ATTENDANCE</div>
              <div className="mt-3 h-1 w-full bg-mist rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-yellow" />
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{y: -20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.8}}
              className="absolute top-16 right-[-10px] bg-white rounded-2xl p-4 shadow-xl border border-border w-44"
            >
              <div className="text-[10px] font-bold text-muted tracking-widest">Fee Collected</div>
              <div className="text-[22px] font-black text-navy font-headline mt-1 leading-none">₹2,84,000</div>
              <div className="mt-3 h-1 w-full bg-mist rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-yellow" />
              </div>
            </motion.div>

            {/* Character Mascot Shape */}
            <div className="absolute bottom-4 right-4 flex flex-col items-center">
              <div className="w-10 h-10 bg-[#C47C3E] rounded-full mb-1" />
              <div className="w-16 h-20 bg-yellow rounded-[24px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
