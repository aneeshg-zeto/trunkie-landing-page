'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';
import {CTASection} from '@/components/sections/CTASection';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    label: 'STUDENT LEARNING',
    headline: 'STUDENT LEARNING',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-white',
    featureBg: 'bg-mist',
    features: [
      'AI Generated Question Papers',
      'AI Smart Test',
      'AI Post Exam Analysis',
      'AI Generated Chapter Summaries',
      'AI Generated Learning Tips',
      'AI Performance Prediction',
      'Genius Zone',
      'Digital Library',
    ],
  },
  {
    label: 'CLASSROOM AND ADMIN',
    headline: 'CLASSROOM AND ADMIN',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-mist',
    featureBg: 'bg-white',
    features: [
      'Attendance Management',
      'Timetable Management',
      'Class Management',
      'Exam Management',
      'Report Cards',
      'Academic Calendar',
      'To-Do Tracker',
      'Class Recordings',
    ],
  },
  {
    label: 'FEES AND OPERATIONS',
    headline: 'FEES AND OPERATIONS',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-white',
    featureBg: 'bg-mist',
    features: [
      'Fee Management',
      'Library Management',
      'Transport Management',
      'ID Card Management',
      'TC Management',
      'Visitor Access Management',
    ],
  },
  {
    label: 'STAFF AND TEACHING',
    headline: 'STAFF AND TEACHING',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-mist',
    featureBg: 'bg-white',
    features: [
      'Teacher and Staff Management',
      'AI Generated Teaching Tips',
      'AI Syllabus Planning',
      'Conduct Control',
      'Teacher Comparison',
      'Comprehensive Guide List',
    ],
  },
  {
    label: 'PARENT AND COMMUNICATION',
    headline: 'PARENT AND COMMUNICATION',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-white',
    featureBg: 'bg-mist',
    features: [
      'In-Built Messaging and Communication',
      'Notifications and Announcements',
      'Multiple Children Management',
      'Student Suggestions',
      'Connect Zone',
      'Visitor Access Management',
    ],
  },
  {
    label: 'SAFETY AND INTELLIGENCE',
    headline: 'SAFETY AND INTELLIGENCE',
    description: 'Over 40 features built for every role in the school. No third-party tools needed.',
    bg: 'bg-mist',
    featureBg: 'bg-white',
    features: [
      'Vigilance Zone',
      'Grievance Management',
      'End to End Analytics',
      'AI Insights',
      'Badges and Gamification',
      'AI Post Assignment Analysis',
    ],
  },
];

const featureCardStyle = {
  boxShadow: '0 2px 8px rgba(15,31,61,0.06), inset 0 1px 0 rgba(255,255,255,1)',
};

export default function ProductPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-cream pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-display font-bold text-[52px] md:text-[72px] leading-tight text-[#0F1F3D]">
              One platform.
              <br />
              Every corner of your school.
            </h1>
            <p className="mt-8 font-body text-lg text-[#5A6478] leading-[1.7] max-w-[460px]">
              Trunkie replaces every fragmented tool your school uses with one connected system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-block font-display font-semibold text-[16px] text-[#0F1F3D] px-7 py-3.5 rounded-full no-underline"
                style={{
                  background: 'linear-gradient(180deg, #FAD84A 0%, #F5C842 100%)',
                  boxShadow: '0 4px 14px rgba(245,200,66,0.40), inset 0 1px 0 rgba(255,255,255,0.35)',
                }}
              >
                Explore Features
              </a>
              <Link
                href="/demo"
                className="inline-block font-display font-semibold text-[16px] text-[#0F1F3D] px-7 py-3.5 rounded-full border-2 border-[#0F1F3D] no-underline"
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{y: [0, -14, 0]}}
              transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
            >
              <Image
                src="/assets/explorer-removebg-preview.png"
                alt="Trunkie Explorer"
                width={380}
                height={420}
                style={{objectFit: 'contain'}}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features header */}
      <section id="features" className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="font-display font-bold text-[48px] text-[#0F1F3D]">Everything your school needs.</h2>
          <p className="font-body text-[17px] text-[#5A6478] mt-3">
            Over 40 features built for every role in the school. No third-party tools needed.
          </p>
        </div>
      </section>

      {categories.map((cat, idx) => (
          <section
            key={cat.label}
            className={`${cat.bg} py-16 ${idx === categories.length - 1 ? 'pb-16' : ''}`}
          >
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-display font-bold text-[13px] text-[#F5C842] tracking-widest uppercase">
                  {cat.label}
                </span>
                <h3 className="font-display font-bold text-[36px] text-[#0F1F3D] mt-2">{cat.headline}</h3>
                <p className="font-body text-[16px] text-[#5A6478] mt-3 max-w-[360px] leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.features.map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={{borderColor: '#F5C842', backgroundColor: '#FFFBEB'}}
                    transition={{duration: 0.2}}
                    className={`${cat.featureBg} border border-[#DDE1EB] rounded-xl px-4 py-3 flex items-center gap-2`}
                    style={featureCardStyle}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#F5C842] flex-shrink-0" />
                    <span className="font-body text-[14px] font-semibold text-[#0F1F3D]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

      <CTASection />
      <Footer />
    </main>
  );
}
