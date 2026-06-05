
'use client';

import {useEffect} from 'react';
import Lenis from '@studio-freight/lenis';

export function Providers({children}: {children: React.ReactNode}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      duration: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
