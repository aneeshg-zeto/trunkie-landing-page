
'use client';

import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: 'cream' | 'mist' | 'navy' | 'white' | 'yellow';
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  bg = 'white',
}: SectionWrapperProps) {
  const bgStyles = {
    cream: 'bg-cream',
    mist: 'bg-mist',
    navy: 'bg-navy text-white',
    white: 'bg-white',
    yellow: 'bg-yellow text-navy',
  };

  return (
    <section id={id} className={cn('py-24 md:py-32 overflow-hidden', bgStyles[bg], className)}>
      <motion.div
        initial={{opacity: 0, y: 28}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-80px'}}
        transition={{duration: 0.65, ease: [0.22, 1, 0.36, 1]}}
        className={cn('container mx-auto px-6', containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
