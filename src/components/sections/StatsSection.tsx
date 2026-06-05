
'use client';

import {AnimatedCounter} from '@/components/ui/AnimatedCounter';

export function StatsSection() {
  return (
    <section className="bg-yellow py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-headline font-black text-[32px] md:text-[42px] text-navy mb-20">
          Why schools choose Trunkie.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mb-20">
          <div className="text-center">
            <p className="text-[14px] font-bold text-navy/60 uppercase tracking-widest mb-2">Reduce</p>
            <div className="text-navy text-[80px] md:text-[96px] font-black font-headline leading-none">
              <AnimatedCounter value={40} />%
            </div>
            <p className="text-navy/70 text-base md:text-lg font-bold font-body mt-2">Administrative Workload</p>
          </div>

          <div className="text-center">
            <p className="text-[14px] font-bold text-navy/60 uppercase tracking-widest mb-2">Increase</p>
            <div className="text-navy text-[80px] md:text-[96px] font-black font-headline leading-none">
              <AnimatedCounter value={3} />×
            </div>
            <p className="text-navy/70 text-base md:text-lg font-bold font-body mt-2">Parent-Teacher Communication</p>
          </div>
        </div>

        <div className="border-t border-navy/15 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center">
            <div className="text-navy text-[36px] font-black font-headline">500+</div>
            <p className="text-[14px] font-bold text-navy/70 font-body uppercase tracking-wider">Schools Across India</p>
          </div>
          <div className="text-center">
            <div className="text-navy text-[36px] font-black font-headline">2,00,000+</div>
            <p className="text-[14px] font-bold text-navy/70 font-body uppercase tracking-wider">Students on Platform</p>
          </div>
          <div className="text-center">
            <div className="text-navy text-[36px] font-black font-headline">98%</div>
            <p className="text-[14px] font-bold text-navy/70 font-body uppercase tracking-wider">Admin Time Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
