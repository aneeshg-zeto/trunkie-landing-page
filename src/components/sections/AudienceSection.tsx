'use client';

import {motion} from 'framer-motion';

export function AudienceSection() {
  return (
    <section className="bg-mist py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline font-black text-navy text-[36px] md:text-[48px] mb-4">
            Built for everyone in the school.
          </h2>
          <p className="text-muted font-body text-lg">One platform, every role.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{y: -6}}
            className="bg-white rounded-2xl p-10 border border-border shadow-lg transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow" />
            <h3 className="font-headline font-black text-navy text-xl md:text-2xl mb-4 mt-2">
              For Principals and Admins
            </h3>
            <p className="text-muted font-body text-base leading-relaxed mb-8">
              Full visibility into attendance, fees, and performance. Make decisions with data, not guesswork.
            </p>
            <ul className="space-y-4">
              {['Complete fee oversight', 'Real-time attendance', 'Staff management', 'Academic analytics'].map(
                (item) => (
                  <li key={item} className="flex items-center text-navy font-bold text-sm">
                    <span className="w-1 h-1 bg-yellow mr-2" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{y: -6}}
            className="bg-white rounded-2xl p-10 border border-border shadow-lg transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-navy" />
            <h3 className="font-headline font-black text-navy text-xl md:text-2xl mb-4 mt-2">For Parents</h3>
            <p className="text-muted font-body text-base leading-relaxed mb-8">
              Stay connected to your child's school day without calling anyone. Get updates when they matter.
            </p>
            <ul className="space-y-4">
              {['Attendance alerts', 'Fee payment online', 'Progress reports', 'Direct teacher messaging'].map(
                (item) => (
                  <li key={item} className="flex items-center text-navy font-bold text-sm">
                    <span className="w-1 h-1 bg-yellow mr-2" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Card 3 - For Students */}
          <motion.div
            whileHover={{y: -6}}
            className="bg-navy rounded-2xl p-10 shadow-xl transition-all relative overflow-hidden text-white"
          >
            <span className="text-yellow text-[11px] font-bold tracking-[0.2em] uppercase font-body block mb-2">
              FOR STUDENTS
            </span>
            <div className="flex flex-col mb-8">
              <h3 className="font-headline font-black text-white text-xl md:text-2xl mt-2">
                Empowered Learning
              </h3>
              <p className="text-white/60 font-body text-base mt-4 leading-relaxed">
                Tools that make learning interactive, rewarding, and clear. No more guesswork on performance.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8 space-y-4">
              {[
                'AI-Powered Learning Coach',
                'Personalized Progress Tracking',
                'Gamified Badges & Rewards',
                'One-Click Digital Library'
              ].map((item) => (
                <div key={item} className="flex items-center text-white font-bold text-sm">
                  <span className="w-1 h-1 bg-yellow mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
