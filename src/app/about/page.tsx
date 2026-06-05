
'use client';

import {Navbar} from '@/components/sections/Navbar';
import {Footer} from '@/components/sections/Footer';

export default function AboutPage() {
  const team = [
    {
      initials: 'AK',
      name: 'Arjun Kapoor',
      role: 'Co-founder and CEO',
      bio: 'Former teacher. Built Trunkie after spending two years managing a school in Pune.',
    },
    {
      initials: 'PS',
      name: 'Priya Sinha',
      role: 'Co-founder and CTO',
      bio: 'Built data systems at scale. Obsessed with making software disappear.',
    },
    {
      initials: 'RV',
      name: 'Rahul Verma',
      role: 'Head of Product',
      bio: 'Grew up in government schools. Knows what is missing.',
    },
    {
      initials: 'NK',
      name: 'Neha Krishnan',
      role: 'Head of Growth',
      bio: 'Spent five years working with school networks across South India.',
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="bg-white pt-48 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline font-black text-[52px] md:text-[72px] leading-tight text-navy">
              We started because we saw the chaos firsthand.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Trunkie was built by people who grew up in Indian schools, frustrated by how far behind the systems were.
            </p>
          </div>
          <div className="flex justify-center">
            <svg viewBox="0 0 200 150" className="w-80 h-auto">
              <path d="M20 120 L100 20 L180 120 Z" className="fill-yellow" />
              <rect x="40" y="80" width="120" height="60" className="fill-navy" />
              <rect x="60" y="100" width="20" height="20" fill="white" />
              <rect x="120" y="100" width="20" height="20" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32">
        <div className="container mx-auto px-6 max-w-[720px] text-center">
          <p className="text-muted font-body text-[19px] leading-[1.85] mb-16">
            India has 1.5 million schools and over 300 million students. The teachers in those schools are among the
            most dedicated people in the country. But the systems they work with are decades behind. Attendance is taken
            on paper. Fees are tracked in Excel. Parents are notified on WhatsApp. Trunkie exists to fix that.
          </p>
          <div className="text-left border-l-4 border-yellow pl-8 max-w-[600px] mx-auto">
            <blockquote className="font-headline font-black text-navy text-[32px] italic leading-tight">
              "India has some of the world's most dedicated teachers. They deserve tools that match their commitment."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-navy py-32 text-white">
        <div className="container mx-auto px-6 max-w-[720px]">
          <h2 className="font-headline font-black text-white text-[42px] mb-16">What we believe.</h2>
          <div className="flex flex-col">
            {[
              {
                id: '01',
                title: 'Schools should run on insight, not intuition.',
                desc: 'Data should be available to every principal, every day, without asking anyone for a report.',
              },
              {
                id: '02',
                title: 'Every child deserves a teacher who is not buried in paperwork.',
                desc: 'When teachers spend less time on admin, they spend more time teaching. It is that simple.',
              },
              {
                id: '03',
                title: 'Technology in education should be invisible.',
                desc: 'Good software does not announce itself. It just makes things work.',
              },
            ].map((belief, idx) => (
              <div key={idx} className="border-t border-white/10 py-10 grid grid-cols-[48px_1fr] gap-6">
                <span className="text-yellow text-[13px] font-black pt-1">{belief.id}</span>
                <div>
                  <h3 className="text-white font-black text-xl mb-2">{belief.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-headline font-black text-navy text-[42px] mb-20">The team.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {team.map((member, idx) => (
              <div key={idx}>
                <div className="w-20 h-20 bg-yellow rounded-full mx-auto flex items-center justify-center text-navy font-black text-2xl font-headline">
                  {member.initials}
                </div>
                <h4 className="font-headline font-black text-navy text-lg mt-6">{member.name}</h4>
                <div className="text-muted font-bold font-body text-sm mt-1">{member.role}</div>
                <p className="text-muted font-body text-[13px] mt-4 max-w-[180px] mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
