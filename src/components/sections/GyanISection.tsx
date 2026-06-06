'use client';

import {motion} from 'framer-motion';
import { Mascot } from '@/components/ui/Mascot';
import { Brain, Zap, Sparkles, ShieldCheck } from 'lucide-react';

export function GyanISection() {
  const pulses = [0, 1, 2];

  return (
    <section className="bg-navy py-32 overflow-hidden relative">
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
            <span className="text-yellow text-[14px] font-black tracking-[0.3em] uppercase font-body block mb-6">
              OUR FOUNDATION
            </span>
            <h2 className="font-display font-bold text-[58px] text-white leading-[1.05]">
              Built under <br />
              <span className="text-yellow">GyanI.</span>
            </h2>
            <p className="mt-8 text-white/55 text-[17px] font-body leading-[1.7] max-w-[420px]">
              Trunkie is a product of GyanI, an organisation dedicated to transforming how schools across Bharat operate, learn, and grow.
            </p>

            <div className="mt-12 space-y-8">
              {[
                "Founded with a mission to fix school infrastructure in India.",
                "Trunkie is GyanI's first and flagship product."
              ].map((text, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-6 items-start border-l-4 border-yellow pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white text-lg font-bold font-body leading-relaxed">{text}</p>
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
