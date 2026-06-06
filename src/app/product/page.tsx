'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';
import {CTASection} from '@/components/sections/CTASection';
import {motion} from 'framer-motion';

export default function ProductPage() {
  const categories = [
    {
      label: 'STUDENT LEARNING',
      features: [
        'AI Generated Question Papers',
        'AI Generated Assignments and Homework',
        'AI Smart Test',
        'AI Post Exam Analysis',
        'AI Post Assignment Analysis',
        'AI Generated Chapter Summaries',
        'AI Generated Learning Tips',
        'AI Performance Prediction',
        'Genius Zone',
        'Digital Library',
        'Class Recordings',
        'Badges and Gamification'
      ]
    },
    {
      label: 'ADMINISTRATION',
      features: [
        'Fee Management',
        'Library Management',
        'Transport Management',
        'Attendance Management',
        'Timetable Management',
        'Academic Calendar',
        'Exam Management',
        'Report Cards',
        'ID Card Management',
        'TC Management',
        'Class Management',
        'To-Do Tracker'
      ]
    },
    {
      label: 'STAFF AND TEACHING',
      features: [
        'Teacher and Staff Management',
        'AI Generated Teaching Tips',
        'AI Syllabus Planning',
        'Conduct Control',
        'Teacher Comparison',
        'Comprehensive Guide List'
      ]
    },
    {
      label: 'PARENT AND COMMUNICATION',
      features: [
        'Notifications and Announcements',
        'In-Built Messaging and Communication',
        'Multiple Children Management',
        'Student Suggestions',
        'Connect Zone',
        'Visitor Access Management'
      ]
    },
    {
      label: 'SAFETY AND GOVERNANCE',
      features: [
        'Vigilance Zone',
        'Grievance Management',
        'AI Insights',
        'End to End Analytics'
      ]
    },
    {
      label: 'AI TOOLS',
      features: [
        'AI Avatar',
        'AI Language Coach',
        'AI Performance Prediction',
        'AI Insights'
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="bg-cream pt-48 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-display font-bold text-[52px] md:text-[72px] leading-tight text-navy">
              One platform.
              <br />
              Every corner of your school.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Trunkie replaces every fragmented tool your school uses with one connected system.
            </p>
          </div>
          <div className="relative flex justify-center">
            <motion.div
              animate={{rotate: 360}}
              transition={{duration: 100, repeat: Infinity, ease: 'linear'}}
              className="relative w-80 h-80"
            >
              <div className="absolute inset-0 bg-yellow/20 rounded-3xl rotate-12" />
              <div className="absolute inset-0 bg-navy/10 rounded-full scale-90" />
              <div className="absolute inset-0 border-2 border-yellow/15 rounded-3xl -rotate-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-[42px] text-navy">Everything your school needs.</h2>
            <p className="text-muted font-body text-base mt-3 max-w-2xl mx-auto">
              Over 40 features built for every role in the school. No third-party tools needed.
            </p>
            <div className="mt-8">
              <div className="font-display font-bold text-[48px] text-yellow leading-none">40+</div>
              <div className="text-muted font-body text-[14px] mt-1">features in one platform</div>
            </div>
          </div>

          <div className="space-y-24">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <span className="font-display font-semibold text-yellow text-[11px] uppercase tracking-widest mb-6 block">
                  {cat.label}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      whileHover={{ y: -2 }}
                      className="bg-white border border-border rounded-xl px-5 py-4 flex items-center shadow-sm"
                    >
                      <span className="font-display font-semibold text-navy text-[15px]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
