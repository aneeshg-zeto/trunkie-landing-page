
'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';
import {CTASection} from '@/components/sections/CTASection';
import {motion} from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  FileText,
  IndianRupee,
  MessageSquare,
  Calendar,
  BarChart2,
  UserCheck,
  TrendingUp,
} from 'lucide-react';

export default function ProductPage() {
  const replacements = [
    {old: 'WhatsApp Groups', new: 'Parent Communication Bridge'},
    {old: 'Excel Registers', new: 'Automated Attendance System'},
    {old: 'Separate Fee Apps', new: 'Integrated Fee Collection'},
    {old: 'Paper Timetables', new: 'Smart Timetable Builder'},
    {old: 'Standalone LMS', new: 'Connected Learning System'},
  ];

  const features = [
    {
      icon: <BookOpen className="text-yellow" size={24} />,
      title: 'Learning Management',
      desc: 'A complete system for lessons, assignments, and assessments.',
    },
    {
      icon: <FileText className="text-yellow" size={24} />,
      title: 'Exam Paper Generator',
      desc: 'Create question papers in minutes using topic and difficulty settings.',
    },
    {
      icon: <IndianRupee className="text-yellow" size={24} />,
      title: 'Fee Tracking',
      desc: 'Collect, track, and reconcile every payment in one dashboard.',
    },
    {
      icon: <MessageSquare className="text-yellow" size={24} />,
      title: 'Parent Bridge',
      desc: 'Real-time updates directly to parents, no WhatsApp needed.',
    },
    {
      icon: <Calendar className="text-yellow" size={24} />,
      title: 'Timetable Builder',
      desc: 'Automated scheduling that respects teacher availability and room capacity.',
    },
    {
      icon: <BarChart2 className="text-yellow" size={24} />,
      title: 'Progress Reports',
      desc: 'Student performance reports generated automatically, shared instantly.',
    },
    {
      icon: <UserCheck className="text-yellow" size={24} />,
      title: 'Attendance System',
      desc: 'Digital attendance with instant parent notification.',
    },
    {
      icon: <TrendingUp className="text-yellow" size={24} />,
      title: 'Analytics Dashboard',
      desc: 'School-wide data in one view for leadership decisions.',
    },
  ];

  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="bg-cream pt-48 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline font-black text-[52px] md:text-[72px] leading-tight text-navy">
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

      {/* Replacement Section */}
      <section className="bg-navy py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
          <h2 className="font-headline font-black text-white text-[36px] md:text-[48px] leading-tight">
            Stop paying for five tools that never talk to each other.
          </h2>
          <div className="flex flex-col gap-8">
            {replacements.map((item, idx) => (
              <div key={idx} className="grid grid-cols-[1fr_40px_1fr] items-center gap-4">
                <span className="text-white/40 line-through font-body text-sm md:text-base">{item.old}</span>
                <ArrowRight className="text-yellow mx-auto" size={16} />
                <span className="text-white font-bold font-body text-sm md:text-base">{item.new}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-cream py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-0">
            {[
              {
                id: '01',
                title: 'Sign up and onboard yourself',
                desc: 'Your school is live in under four hours. No IT team needed. No consultant required.',
              },
              {
                id: '02',
                title: 'Everyone connects from day one',
                desc: 'Students, teachers, and parents all have access immediately.',
              },
              {
                id: '03',
                title: 'GyanI starts learning',
                desc: "The intelligence layer begins understanding your school's patterns and surfaces insights automatically.",
              },
            ].map((step, idx) => (
              <div key={idx} className="py-16 border-t border-border flex flex-col md:flex-row gap-8">
                <span className="text-yellow font-headline font-black text-[80px] leading-none shrink-0">
                  {step.id}
                </span>
                <div className="pt-4">
                  <h3 className="text-navy font-headline font-black text-[28px] mb-4">{step.title}</h3>
                  <p className="text-muted font-body text-lg leading-relaxed max-w-[520px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-headline font-black text-[32px] md:text-[42px] text-navy mb-20">
            Everything in one place.
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="border border-border rounded-2xl p-8 hover:bg-mist/30 transition-colors">
                <div className="mb-4">{f.icon}</div>
                <h4 className="font-headline font-black text-navy text-lg mb-2">{f.title}</h4>
                <p className="text-muted font-body text-sm leading-relaxed">{f.desc}</p>
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
