'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import { Mascot } from '@/components/ui/Mascot';

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
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/85 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Mascot size={32} />
          <div className="flex flex-col">
            <span className="text-2xl font-black text-yellow font-display leading-none transition-transform group-hover:scale-105">
              Trunkie
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-navy hover:text-yellow transition-colors font-display"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/demo"
            className="bg-yellow text-navy px-8 py-3 rounded-full font-bold text-[15px] shadow-sm hover:shadow-md transition-all active:scale-95 font-display"
          >
            Book a Demo
          </Link>
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
                  className="text-xl font-bold text-navy font-display"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border w-full my-2" />
              <Link
                href="/demo"
                className="bg-yellow text-navy px-6 py-4 rounded-xl font-bold text-center font-display"
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
