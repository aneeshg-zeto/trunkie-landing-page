'use client';

import Image from 'next/image';

export function GyanISection() {
  return (
    <section className="relative bg-[#0F1F3D] py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 78% 50%, rgba(245,200,66,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="max-w-[520px]">
          <span className="font-body text-[11px] font-semibold text-[#F5C842] tracking-[0.2em] uppercase block mb-5">
            OUR FOUNDATION
          </span>
          <h2
            className="font-display font-bold text-[48px] md:text-[56px] text-white leading-[1.08] tracking-[-0.02em]"
            style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
          >
            Built under
            <br />
            <span className="text-[#F5C842]">GyanI.</span>
          </h2>
          <p className="mt-6 font-body text-[17px] text-white/60 leading-[1.75] max-w-[420px]">
            Trunkie is a product of GyanI, an organisation dedicated to transforming how schools across Bharat operate, learn, and grow.
          </p>
          <div className="mt-10 space-y-6">
            {[
              'Founded with a mission to fix school infrastructure in India.',
              "Trunkie is GyanI's first and flagship product.",
            ].map((text) => (
              <div key={text} className="flex gap-4">
                <div className="w-[3px] flex-shrink-0 rounded-full bg-[#F5C842]" />
                <p className="font-body text-[15px] text-white/90 leading-[1.65]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-end h-[400px] md:h-[460px]">
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 320,
              height: 320,
              background: 'radial-gradient(circle, rgba(245,200,66,0.10) 0%, transparent 72%)',
            }}
          />
          <Image
            src="/assets/scholar-removebg-preview.png"
            alt="Trunkie Scholar"
            width={300}
            height={400}
            className="relative z-10"
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
