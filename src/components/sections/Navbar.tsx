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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {name: 'Product', href: '/product'},
    {name: 'Experience', href: '/experience'},
    {name: 'Partners', href: '/partners'},
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 pointer-events-none">
        <nav
          className={cn(
            'pointer-events-auto max-w-7xl mx-auto h-14 rounded-2xl transition-all duration-300',
            'backdrop-blur-xl border'
          )}
          style={{
            background: isScrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.45)',
            borderColor: 'rgba(255,255,255,0.55)',
            boxShadow: isScrolled
              ? '0 8px 32px rgba(15,31,61,0.10), inset 0 1px 0 rgba(255,255,255,0.7)'
              : '0 4px 24px rgba(15,31,61,0.06), inset 0 1px 0 rgba(255,255,255,0.5)',
          }}
        >
          <div className="relative px-6 h-full flex items-center">
            <Link href="/" className="no-underline relative z-10">
              <span
                className="font-display font-bold text-[22px] text-[#0F1F3D] tracking-[-0.02em]"
              >
                Trunkie
              </span>
            </Link>

            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-display font-medium text-[15px] text-[#0F1F3D] hover:text-[#F5C842] transition-colors no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-4 relative z-10">
              <motion.div
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.97}}
                className="hidden md:block"
              >
                <Link
                  href="/demo"
                  className="inline-block font-display font-semibold text-[14px] text-[#0F1F3D] px-5 py-2.5 rounded-full no-underline"
                  style={{
                    background: 'linear-gradient(180deg, #FAD84A 0%, #F5C842 100%)',
                    boxShadow: '0 4px 14px rgba(245,200,66,0.40), inset 0 1px 0 rgba(255,255,255,0.35)',
                  }}
                >
                  Book a Demo
                </Link>
              </motion.div>

              <button
                className="md:hidden text-[#0F1F3D]"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{y: '-100%'}}
            animate={{y: 0}}
            exit={{y: '-100%'}}
            transition={{duration: 0.35, ease: 'easeInOut'}}
            className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-8 text-[#0F1F3D]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-[32px] text-[#0F1F3D] no-underline"
              >
                {link.name}
              </Link>
            ))}

            <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block font-display font-semibold text-[14px] text-[#0F1F3D] px-5 py-2.5 rounded-full no-underline"
                style={{
                  background: 'linear-gradient(180deg, #FAD84A 0%, #F5C842 100%)',
                  boxShadow: '0 4px 14px rgba(245,200,66,0.40), inset 0 1px 0 rgba(255,255,255,0.35)',
                }}
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
