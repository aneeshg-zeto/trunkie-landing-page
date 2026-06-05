
'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import { Mascot } from '@/components/ui/Mascot';
import { Book, GraduationCap, Users, Star } from 'lucide-react';

export function Hero() {
  const floatIcons = [
    { icon: <Book className="text-yellow" />, top: '20%', left: '10%', delay: 0 },
    { icon: <GraduationCap className="text-navy" />, top: '15%', right: '15%', delay: 1 },
    { icon: <Users className="text-yellow" />, bottom: '25%', left: '5%', delay: 2 },
    { icon: <Star className="text-navy" />, bottom: '20%', right: '10%', delay: 1.5 },
  ];

  return (
    <section className="bg-cream min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none">
          <circle cx="100" cy="100" r="150" fill="url(#grad1)" />
          <circle cx="900" cy="800" r="200" fill="url(#grad2)" />
          <defs>
            <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(150)">
              <stop stopColor="#F5C842" />
              <stop offset="1" stopColor="#F5C842" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900 800) rotate(90) scale(200)">
              <stop stopColor="#0F1F3D" />
              <stop offset="1" stopColor="#0F1F3D" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {floatIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden md:block bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-lg z-0"
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + idx, repeat: Infinity, delay: item.delay }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="z-10">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            className="inline-block px-4 py-1 rounded-full bg-white border border-yellow/40 mb-8 shadow-sm"
          >
            <span className="text-[11px] font-bold text-navy tracking-wider font-body uppercase">
              ✨ Bharat's Leading School Operating System
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[56px] md:text-[88px] font-black leading-[0.9] font-headline text-navy"
          >
            One system.
            <br />
            <span className="text-yellow relative">
              Every school.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
                <motion.path 
                  d="M1 18C100 6 300 6 399 18" 
                  stroke="#F5C842" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-lg md:text-xl text-muted font-body leading-[1.6] max-w-[480px]"
          >
            Trunkie brings simplicity to school management. Admin, fees, and communication—all in one playful, powerful app.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="bg-yellow text-navy px-10 py-5 rounded-full font-black text-xl shadow-xl hover:translate-y-[-4px] transition-all hover:shadow-2xl active:scale-95"
            >
              Book a Demo →
            </Link>
            <button className="bg-white border-2 border-navy text-navy px-10 py-5 rounded-full font-black text-xl hover:bg-navy hover:text-white transition-all shadow-sm">
              See How It Works
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-mist flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/seed/${i}/40/40`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-[14px] text-navy/60 font-bold font-body">Trusted by 500+ schools across Bharat</p>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{y: [0, -15, 0]}}
            transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
            className="relative w-full max-w-[580px] aspect-[4/3] bg-white rounded-[32px] border border-border shadow-[0_40px_120px_rgba(15,31,61,0.15)] p-8 overflow-hidden group"
          >
            {/* Mock Dashboard UI */}
            <div className="w-full h-12 bg-navy rounded-2xl mb-6 flex items-center px-5 gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <div className="ml-4 h-3 w-32 bg-white/10 rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Students', val: '1,240', color: 'bg-yellow' },
                { label: 'Fees', val: '₹4.2L', color: 'bg-mist' },
                { label: 'Staff', val: '84', color: 'bg-navy/5' }
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} p-4 rounded-2xl border border-navy/5`}>
                  <div className="text-[10px] font-black text-navy/40 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xl font-black text-navy mt-1">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="h-40 w-full flex items-end gap-3 px-2">
              {[40, 75, 50, 95, 60, 85, 70, 55, 90, 45].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-navy/10 rounded-t-lg group-hover:bg-yellow/40 transition-colors" 
                />
              ))}
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{x: -30, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: 1.2}}
              className="absolute bottom-16 left-[-10px] bg-white rounded-[24px] p-6 shadow-2xl border border-border w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                <span className="text-[10px] font-black text-navy/40 uppercase tracking-widest">LIVE ATTENDANCE</span>
              </div>
              <div className="text-[32px] font-black text-navy font-headline leading-none">94%</div>
              <div className="mt-4 h-1.5 w-full bg-mist rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full bg-yellow" 
                />
              </div>
            </motion.div>

            {/* Mascot Integration */}
            <div className="absolute bottom-6 right-6">
              <Mascot size={120} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
