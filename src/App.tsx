import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSiteMotion } from '@/lib/motion';
import { Nav } from '@/sections/Nav';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Scrapbook } from '@/sections/Scrapbook';
import { Projects } from '@/sections/Projects';
import { Bits } from '@/sections/Bits';
import { Contact } from '@/sections/Contact';

export default function App() {
  useEffect(() => {
    const cleanup = initSiteMotion();
    // images and fonts change layout; re-measure once they're in
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    return () => { cleanup(); window.removeEventListener('load', refresh); };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Scrapbook />
        <Projects />
        <Bits />
        <Contact />
      </main>
    </>
  );
}
