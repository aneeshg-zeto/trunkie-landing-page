
'use client';

import {motion} from 'framer-motion';
import { Mascot } from '@/components/ui/Mascot';
import { Sparkles, Brain, Zap, ShieldCheck } from 'lucide-react';

export function GyanISection() {
  const pulses = [0, 1, 2];

  return (
    <section className="bg-navy py-32 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {pulses.map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-yellow/10 rounded-full"
            initial={{ width: 300, height: 300, opacity: 0.5 }}
            animate={{ width: 1000, height: 1000, opacity: 0 }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-[1100px] grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow text-[14px] font-black tracking-[0.3em] uppercase font-body block mb-6 flex items-center gap-2">
              <Sparkles size={16} /> POWERED BY GYANI
            </span>
            <h2 className="font-headline font-black text-[48px] md:text-[68px] text-white leading-[1.05]">
              Intelligence that feels like <span className="text-yellow">magic.</span>
            </h2>
            <p className="mt-8 text-white/60 text-lg md:text-xl font-body leading-[1.7] max-w-[460px]">
              GyanI isn't just an AI—it's your school's smartest assistant, working quietly behind the scenes to make everything run perfectly.
            </p>

            <div className="mt-12 space-y-8">
              {[
                { icon: <Brain className="text-yellow" />, text: "Predicts student needs before they become gaps." },
                { icon: <Zap className="text-yellow" />, text: "Automates timetable logic in seconds, not weeks." },
                { icon: <ShieldCheck className="text-yellow" />, text: "Keeps data secure and private, hosted in India." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                    {item.icon}
                  </div>
                  <p className="text-white text-lg font-bold font-body leading-relaxed pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative">
            <motion.div
              animate={{rotateZ: 360}}
              transition={{duration: 60, repeat: Infinity, ease: 'linear'}}
              className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border-2 border-dashed border-yellow/20 flex justify-center items-center"
            >
              <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex justify-center items-center">
                <Mascot size={200} />
              </div>

              {/* Orbital items */}
              {[Brain, Zap, Sparkles, ShieldCheck].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-navy p-3 rounded-xl border border-yellow/40 shadow-[0_0_20px_rgba(245,200,66,0.2)]"
                  style={{ 
                    top: i === 0 || i === 1 ? '0' : 'auto',
                    bottom: i === 2 || i === 3 ? '0' : 'auto',
                    left: i === 0 || i === 2 ? '0' : 'auto',
                    right: i === 1 || i === 3 ? '0' : 'auto',
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <Icon className="text-yellow" size={24} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
