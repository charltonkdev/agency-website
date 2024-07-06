'use client'
import { useEffect } from 'react';
import Lenis from 'lenis'
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Adjust this value to change the scroll speed (default is 1.2)
      easing: (t) => t ** 0.5, // Customize the easing function if needed
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between overflow-x-hidden'>
      <Hero />
      <About />
    </main>
  );
}
