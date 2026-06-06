'use client';

import {motion} from 'framer-motion';

export function SolutionSection() {
  const features = [
    {id: '01', name: 'Fee Management', desc: 'Every rupee collected and tracked in one place.'},
    {id: '02', name: 'Attendance Management', desc: 'Digital attendance with instant parent alerts.'},
    {id: '03', name: 'AI Generated Question Papers', desc: 'Create tests in minutes, not hours.'},
    {id: '04', name: 'Timetable Management', desc: 'Automated scheduling that actually make sense.'},
    {id: '05', name: 'Report Cards', desc: 'Generated and shared automatically each term.'},
    {id: '06', name: 'In-Built Messaging', desc: 'No WhatsApp groups. One platform for all communication.'},
    {id: '07', name: 'Transport Management', desc: 'Track buses, routes, and student safety.'},
    {id: '08', name: 'Exam Management', desc: 'End to end exam lifecycle in one workflow.'},
    {id: '09', name: 'AI Performance Prediction', desc: 'Know which students need help before it is too late.'},
    {id: '10', name: 'End to End Analytics', desc: 'School-wide data in one dashboard for leadership.'},
  ];

  return (
    <section className="bg-cream py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[960px]">
        <div className="mb-20">
          <span className="text-yellow text-[12px] font-bold tracking-[0.2em] uppercase font-body block mb-4">
            THE SOLUTION
          </span>
          <h2
            className="font-display font-bold text-[60px] md:text-[96px] leading-[0.9] text-navy flex flex-col"
            style={{WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility'}}
          >
            <span>Everything.</span>
            <span>Everyone.</span>
            <span className="text-yellow">Everywhere.</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-muted font-body leading-[1.7] max-w-[520px]">
            Trunkie brings simplicity to the chaos. Our integrated platform ensures that not a single student, rupee,
            or update falls through the cracks.
          </p>
        </div>

        <div className="flex flex-col">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.08, duration: 0.5}}
              className="border-t border-border py-6 flex items-center justify-between gap-4 group hover:bg-white/40 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-yellow text-[12px] font-black tracking-widest pt-1">{feature.id}</span>
                <h3 className="text-navy text-lg md:text-[19px] font-bold font-display group-hover:text-yellow transition-colors">
                  {feature.name}
                </h3>
              </div>
              <span className="hidden md:block text-muted text-sm font-body text-right">{feature.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
