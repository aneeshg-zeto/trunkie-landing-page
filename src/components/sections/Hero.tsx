'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {ChevronsDown} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-screen flex flex-col overflow-hidden">
      {/* Gradient + grain */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, #F5C842 0%, #FAD84A 38%, #FFF0B3 72%, #F5C842 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-8 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-sm px-5 py-2 mb-8 shadow-sm border border-white/60"
        >
          <span className="font-display font-bold text-[#F5C842] text-sm">T</span>
          <span className="font-body text-[13px] text-[#0F1F3D]">
            Trusted by <strong className="font-semibold">500+ schools</strong> across Bharat
          </span>
        </motion.div>

        <motion.h1
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1]}}
          className="font-display font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-[#0F1F3D] max-w-[900px]"
          style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
        >
          Powering the Next
          <br />
          <span
            className="font-display font-bold text-white"
            style={{fontWeight: 700, textShadow: '0 2px 14px rgba(15,31,61,0.3)'}}
          >
            Generation of Schools.
          </span>
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
          className="mt-6 font-body text-[17px] md:text-[19px] text-[#0F1F3D]/80 leading-[1.7] max-w-[620px]"
        >
          An AI-powered operating system that automates administration, streamlines communication, and helps schools focus on what matters most: education.
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.55, delay: 0.3}}
          className="mt-10"
        >
          <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
            <Link
              href="/demo"
              className="inline-block font-display font-semibold text-[16px] text-white bg-[#0F1F3D] px-10 py-4 rounded-full no-underline shadow-[0_8px_28px_rgba(15,31,61,0.28)] hover:shadow-[0_12px_36px_rgba(15,31,61,0.35)] transition-shadow"
            >
              Book a Demo →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-1 text-[#0F1F3D]/50"
          animate={{y: [0, 6, 0]}}
          transition={{duration: 2.2, repeat: Infinity, ease: 'easeInOut'}}
        >
          <span className="font-body text-[12px] font-medium tracking-wide">Learn more</span>
          <ChevronsDown size={18} strokeWidth={2} />
        </motion.div>
      </div>

      {/* Bottom mascots — flanking, resting on white curve */}
      <div className="pointer-events-none absolute bottom-0 md:bottom-2 left-0 right-0 z-10 hidden md:block">
        <div className="relative w-full h-[360px]">
          <motion.div
            className="absolute bottom-0 left-[-1%] xl:left-[1%]"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            <Image
              src="/assets/scholar-removebg-preview.png"
              alt="Trunkie Scholar"
              width={300}
              height={360}
              style={{objectFit: 'contain', filter: 'drop-shadow(0 16px 32px rgba(15,31,61,0.12))'}}
              priority
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-[-1%] xl:right-[1%]"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5}}
          >
            <Image
              src="/assets/explorer-removebg-preview.png"
              alt="Trunkie Explorer"
              width={320}
              height={380}
              style={{objectFit: 'contain', filter: 'drop-shadow(0 16px 32px rgba(15,31,61,0.12))'}}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile mascot */}
      <div className="md:hidden absolute bottom-4 left-0 right-0 z-10 flex justify-center">
        <Image
          src="/assets/explorer-removebg-preview.png"
          alt="Trunkie"
          width={240}
          height={300}
          style={{objectFit: 'contain'}}
          priority
        />
      </div>
    </section>
  );
}
