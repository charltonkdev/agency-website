import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from '@/components/Services';
import LenisScroll from '@/components/ui/LenisScroll';

export default function Home() {
  return (
    <main className='flex relative min-h-screen flex-col items-center justify-between overflow-x-hidden'>
      <LenisScroll />
      <Hero />
      <About />
      <Services />
    </main>
  );
}
