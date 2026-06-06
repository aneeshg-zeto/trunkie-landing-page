'use client';

import {motion} from 'framer-motion';
import {Apple, Smartphone} from 'lucide-react';

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

        <div className="flex justify-center md:justify-end">
          <motion.div
            animate={{y: [0, -8, 0]}}
            transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
            className="w-[200px] h-[380px] md:w-[240px] md:h-[460px] bg-navy-light rounded-[32px] border-2 border-white/15 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative"
          >
            <div className="w-full h-full bg-navy rounded-[24px] overflow-hidden flex flex-col">
              <div className="h-6 w-full flex justify-center items-start pt-1">
                <div className="w-16 h-3 bg-navy-light rounded-full" />
              </div>

              <div className="p-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="text-white text-xs font-black">Attendance</div>
                  <div className="bg-yellow text-navy px-2 py-0.5 rounded text-[10px] font-black">Present</div>
                </div>

                <div className="bg-navy-light/40 p-3 rounded-xl">
                  <div className="text-white/60 text-[10px] font-bold">Today's Fee Due</div>
                  <div className="text-white text-sm font-black">₹0</div>
                </div>

                <div className="flex items-end gap-2 pt-4">
                  {[30, 60, 45, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-yellow/40 rounded-t-sm" style={{height: `${h}px`}} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
