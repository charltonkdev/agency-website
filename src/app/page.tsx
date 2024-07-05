'use client'
import { useEffect, useState } from 'react';
import Lenis from 'lenis'
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <About />
    </main>
  );
}
