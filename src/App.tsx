import { useCallback, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSiteMotion, setScrollLocked, startSmoothScroll } from '@/lib/motion';
import { Loader } from '@/sections/Loader';
import { Nav } from '@/sections/Nav';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Resume } from '@/sections/Resume';
import { Work } from '@/sections/Work';
import { Projects } from '@/sections/Projects';
import { Activities } from '@/sections/Activities';
import { Contact } from '@/sections/Contact';

export default function App() {
  const [ready, setReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  useEffect(() => {
    startSmoothScroll();
    setScrollLocked(true);
    const cleanup = initSiteMotion();
    // images and fonts change layout; re-measure once they're in
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    return () => { cleanup(); window.removeEventListener('load', refresh); };
  }, []);

  const onLoaded = useCallback(() => {
    setScrollLocked(false);
    setReady(true);
    setLoaderGone(true);
    // triggers were created by sibling components in mount order; put them in page order
    requestAnimationFrame(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });
  }, []);

  return (
    <>
      {!loaderGone && <Loader onDone={onLoaded} />}
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Resume />
        <Work />
        <Projects />
        <Activities />
        <Contact />
      </main>
    </>
  );
}
