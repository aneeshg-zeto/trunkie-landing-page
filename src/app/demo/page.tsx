
'use client';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function DemoPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-white pt-36 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
          >
            <h1 className="font-headline font-black text-[52px] md:text-[64px] leading-tight text-navy">
              Let's get your school moving.
            </h1>
            <p className="mt-8 text-lg text-muted font-body leading-[1.7] max-w-[460px]">
              Fill out the form and our team will get in touch within 24 hours to show you Trunkie in action.
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            className="bg-cream p-8 md:p-12 rounded-[32px] border border-border shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Arjun Kapoor" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">School Name</Label>
                  <Input id="school" placeholder="Delhi Public School" className="bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="arjun@school.com" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Anything else?</Label>
                <Textarea id="message" placeholder="Tell us about your school size or specific needs..." className="bg-white" rows={4} />
              </div>
              <Button className="w-full bg-yellow text-navy hover:bg-yellow/90 font-black h-14 rounded-2xl text-xl shadow-lg transition-transform hover:scale-[1.02]">
                Request Free Demo →
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
