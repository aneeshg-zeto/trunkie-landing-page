
'use client';

import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

export function ProblemSection() {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, {once: true});

  const problems = [
    {id: '01', title: 'Too Many Tools', desc: 'Five different apps to run one classroom.'},
    {id: '02', title: 'Parents Out of the Loop', desc: 'Critical updates buried in WhatsApp noise.'},
    {id: '03', title: 'Teachers Buried in Paperwork', desc: 'Sixty percent of their time on admin, not students.'},
    {id: '04', title: 'Data Living Everywhere', desc: 'Attendance here, fees there, no single source of truth.'},
    {id: '05', title: 'Zero Visibility for Leadership', desc: 'Principals making decisions without real data.'},
  ];

  return (
    <section className="bg-navy py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[800px]">
        <div className="text-center mb-24">
          <h2 className="text-white text-[44px] md:text-[68px] font-black leading-none font-headline">
            Running a school today
            <br />
            means juggling it all.
          </h2>

          <div className="flex justify-center mt-4">
            <svg viewBox="0 0 600 24" className="w-full max-w-[400px]">
              <motion.path
                ref={pathRef}
                d="M 0 12 Q 150 4 300 12 Q 450 20 600 12"
                stroke="#F5C842"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{pathLength: 0}}
                animate={isInView ? {pathLength: 1} : {}}
                transition={{duration: 1.5, ease: 'easeInOut'}}
              />
            </svg>
          </div>

          <p className="mt-8 text-white/60 text-lg md:text-xl font-body leading-[1.8] max-w-[600px] mx-auto">
            There is one tool for learning, another for exams, a different one for fees. Parents miss messages.
            Teachers spend more time on paperwork than teaching.
          </p>
        </div>

        <div className="max-w-[640px] mx-auto flex flex-col">
          {problems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.1, duration: 0.6}}
              className="border-t border-white/10 py-8 grid grid-cols-[48px_1fr] group hover:bg-white/5 transition-colors"
            >
              <div className="text-yellow text-[13px] font-black tracking-widest pt-1">{item.id}</div>
              <div>
                <h3 className="text-white text-xl font-black font-headline">{item.title}</h3>
                <p className="text-white/55 text-sm md:text-base font-body mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
