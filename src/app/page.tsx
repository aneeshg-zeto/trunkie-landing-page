
import {Navbar} from '@/components/sections/Navbar';
import {Hero} from '@/components/sections/Hero';
import {TrustBar} from '@/components/sections/TrustBar';
import {ProblemSection} from '@/components/sections/ProblemSection';
import {SolutionSection} from '@/components/sections/SolutionSection';
import {StatsSection} from '@/components/sections/StatsSection';
import {GyanISection} from '@/components/sections/GyanISection';
import {AudienceSection} from '@/components/sections/AudienceSection';
import {Testimonials} from '@/components/sections/Testimonials';
import {AppDownload} from '@/components/sections/AppDownload';
import {RecognitionSection} from '@/components/sections/RecognitionSection';
import {CTASection} from '@/components/sections/CTASection';
import {Footer} from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <GyanISection />
      <AudienceSection />
      <Testimonials />
      <AppDownload />
      <RecognitionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
