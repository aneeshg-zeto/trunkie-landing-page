'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {Apple, Smartphone} from 'lucide-react';

function PhoneMockup({
  src,
  alt,
  className,
  animateDelay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  animateDelay?: number;
}) {
  return (
    <motion.div
      animate={{y: [0, -8, 0]}}
      transition={{duration: 4, repeat: Infinity, ease: 'easeInOut', delay: animateDelay}}
      className={`w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] md:w-[220px] md:h-[440px] bg-navy-light rounded-[32px] border-2 border-white/15 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative ${className ?? ''}`}
    >
      <div className="w-full h-full bg-navy rounded-[24px] overflow-hidden relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-16 h-3 bg-navy-light rounded-full" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 45vw, 220px"
          className="object-cover object-top"
          style={{objectFit: 'cover', objectPosition: 'top'}}
        />
      </div>
    </motion.div>
  );
}

export function AppDownload() {
  return (
    <section className="bg-navy py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline font-black text-[36px] md:text-[44px] text-white leading-[1.1]">
            Download Trunkie
          </h2>
          <p className="mt-6 text-white/60 text-lg font-body leading-[1.7] max-w-[400px]">
            Everything parents, teachers, and admins need — in one app. Available on iOS and Android.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-white text-navy flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base shadow-lg hover:bg-white/90 transition-all">
              <Apple size={20} fill="currentColor" />
              App Store
            </button>
            <button className="bg-white text-navy flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base shadow-lg hover:bg-white/90 transition-all">
              <Smartphone size={20} />
              Google Play
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-end gap-3 sm:gap-6">
          <PhoneMockup
            src="/assets/mobile/screen1.jpeg"
            alt="Trunkie app screen"
            className="md:translate-y-4"
            animateDelay={0}
          />
          <PhoneMockup
            src="/assets/mobile/screen2.jpeg"
            alt="Trunkie app screen"
            className="md:-translate-y-2"
            animateDelay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
