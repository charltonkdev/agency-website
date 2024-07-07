'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const LenisScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Adjust this value to change the scroll speed (default is 1.2)
      easing: (t) => t ** 0.5, // Customize the easing function if needed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
