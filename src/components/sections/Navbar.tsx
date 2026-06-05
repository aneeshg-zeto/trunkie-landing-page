
'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import {cn} from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Product', href: '/product'},
    {name: 'Experience', href: '/experience'},
    {name: 'Partners', href: '/partners'},
    {name: 'About', href: '/about'},
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className="text-2xl font-black text-yellow font-headline leading-tight transition-transform group-hover:scale-105">
            Trunkie
          </span>
          <span className="text-[10px] font-bold text-navy opacity-60 tracking-[0.1em] font-headline">
            INDIA'S #1 SCHOOL PLATFORM
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-navy hover:text-yellow transition-colors font-body"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[15px] font-bold text-navy hover:underline">Sign In</button>
            <Link
              href="/demo"
              className="bg-yellow text-navy px-6 py-3 rounded-full font-black text-[15px] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-navy"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border w-full my-2" />
              <button className="text-left font-bold text-navy">Sign In</button>
              <Link
                href="/demo"
                className="bg-yellow text-navy px-6 py-4 rounded-xl font-black text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
