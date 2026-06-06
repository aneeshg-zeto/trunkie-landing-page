'use client';

import {motion, useInView} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import { AlertCircle, Clock, Database, MessageCircle, LayoutGrid } from 'lucide-react';

export function ProblemSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(pathRef, {once: true});
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const problems = [
    {id: '01', icon: <LayoutGrid />, title: 'Tool Fatigue', desc: 'Too many apps that don\'t talk to each other.'},
    {id: '02', icon: <MessageCircle />, title: 'Communication Chaos', desc: 'Important school notices lost in WhatsApp.'},
    {id: '03', icon: <Clock />, title: 'Admin Overload', desc: 'Teachers spending 60% of time on paperwork.'},
    {id: '04', icon: <Database />, title: 'Data Silos', desc: 'Zero visibility into school performance.'},
  ];

  return (
    <section className="bg-navy py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex p-3 bg-red-500/10 text-red-400 rounded-full mb-8 border border-red-500/20"
          >
            <AlertCircle size={24} />
          </motion.div>
          
          <h2
            className="text-white text-[44px] md:text-[72px] font-black leading-none font-headline tracking-tight"
            style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
          >
            Managing a school <br />
            shouldn't be <span className="text-red-400">chaos.</span>
          </h2>

          <div className="flex justify-center mt-6">
            <svg viewBox="0 0 600 24" className="w-full max-w-[400px]">
              <motion.path
                ref={pathRef}
                d="M 0 12 Q 150 24 300 12 Q 450 0 600 12"
                stroke="#F5C842"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{strokeDashoffset: pathLength, strokeDasharray: pathLength}}
                animate={isInView ? {strokeDashoffset: 0} : {strokeDashoffset: pathLength}}
                transition={{duration: 1.2, ease: 'easeOut'}}
              />
            </svg>
          </div>

          <p className="mt-12 text-white/50 text-xl font-body leading-relaxed max-w-[640px] mx-auto">
            Traditional systems are broken. They are slow, ugly, and disconnected. We built Trunkie to fix that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.15}}
              className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:bg-white/[0.08] transition-all group"
            >
              <div className="text-yellow mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white text-2xl font-black font-headline mb-3">{item.title}</h3>
              <p className="text-white/40 text-lg font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
