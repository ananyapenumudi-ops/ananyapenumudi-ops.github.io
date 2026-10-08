import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkle } from '@/components/Sparkle';
import { links, roles } from '@/data';
import { createParticles } from '@/particles.js';
import { reducedMotion, scrollToTarget } from '@/lib/motion';

const WORD = 'PORTFOLIO';

function useTypedRoles(active: boolean) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (!active) return;
    if (reducedMotion()) { setText(roles[0]); return; }
    let r = 0, i = 0, deleting = false;
    let timer: number;
    const step = () => {
      const word = roles[r];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let wait = deleting ? 30 : 60;
      if (!deleting && i === word.length) { deleting = true; wait = 1800; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; wait = 300; }
      timer = window.setTimeout(step, wait);
    };
    timer = window.setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [active]);
  return text;
}

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const role = useTypedRoles(ready);

  // 3D particle orb that morphs through sphere → chip → helix → atom → knot
  useEffect(() => {
    if (!canvas.current) return;
    const reduced = reducedMotion();
    const p = createParticles(canvas.current, { mobile: window.innerWidth < 760, reduced });
    const seq = [0, 1, 2, 3, 4, 3, 2, 1];
    let k = 0;
    const timer = reduced ? 0 : window.setInterval(() => { k = (k + 1) % seq.length; p.setMorph(seq[k]); }, 3600);
    const onMove = (e: PointerEvent) => {
      const r = canvas.current!.getBoundingClientRect();
      p.setMouse(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1));
    };
    const section = root.current!;
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', p.clearMouse);
    return () => {
      clearInterval(timer);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', p.clearMouse);
      p.destroy();
    };
  }, []);

  // hidden until the loader finishes
  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set('.hero-title .ch', { yPercent: 110, opacity: 0 });
      gsap.set('.hero-echo span', { xPercent: 30, opacity: 0 });
      gsap.set('.hero-photo', { clipPath: 'inset(100% 0 0 0)' });
      gsap.set('.hero-photo img, .hero-photo .photo-fallback', { scale: 1.3 });
      gsap.set('.hero-star, .scroll-btn', { scale: 0 });
      gsap.set('.hero-side, .hero-band-inner > *', { opacity: 0, y: 30 });
      gsap.set('.hero-orb', { opacity: 0, scale: 0.6 });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!ready || reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .to('.hero-title .ch', { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.05 })
        .to('.hero-photo', { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'expo.inOut' }, 0.15)
        .to('.hero-photo img, .hero-photo .photo-fallback', { scale: 1, duration: 1.6 }, 0.3)
        .to('.hero-echo span', { xPercent: 0, opacity: 1, duration: 1.4, stagger: 0.1 }, 0.3)
        .to('.hero-orb', { opacity: 1, scale: 1, duration: 1.8 }, 0.4)
        .to('.hero-side, .hero-band-inner > *', { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.6)
        .to('.hero-star, .scroll-btn', { scale: 1, duration: 1, stagger: 0.1, ease: 'back.out(2)' }, 0.8);

      // scroll-out: title lifts, photo sinks
      gsap.to('.hero-title', { yPercent: -30, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-photo', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.utils.toArray<HTMLElement>('.hero-echo span').forEach((el, i) => {
        gsap.to(el, { xPercent: i % 2 ? 12 : -12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      });
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section className="hero" id="hero" ref={root}>
      <div className="hero-stage">
        <div className="hero-orb"><canvas ref={canvas} /></div>

        <h1 className="hero-title" aria-label="Portfolio">
          {WORD.split('').map((c, i) => <span className="ch" key={i} aria-hidden="true">{c}</span>)}
        </h1>
        <div className="hero-echo outline-text" aria-hidden="true">
          <span>{WORD}</span><span>{WORD}</span><span>{WORD}</span>
        </div>

        <div className="hero-photo">
          <img src="./photo.jpg" alt="Portrait of Ananya Penumudi" onError={(e) => e.currentTarget.remove()} />
          <div className="photo-fallback">AP<small>Ananya Penumudi</small></div>
        </div>
        <Sparkle className="hero-star star-a twinkle" size={42} />
        <Sparkle className="hero-star star-b twinkle" size={26} />

      </div>

      <div className="hero-band">
        <a href="#about" className="scroll-btn" onClick={(e) => { e.preventDefault(); scrollToTarget('#about'); }} data-magnetic>Scroll<br />down</a>
        <div className="hero-band-inner">
          <p className="hero-blurb">I love hardware that thinks. I approach problems like a systems engineer, start from the failure modes, and look for the simplest design that keeps people safe.<br /><br />B.Tech CSE (IoT) · VNRVJIET · BHEL Bengaluru trainee</p>
          <div className="hero-side">
            <div className="hero-socials">
              <a href={links.github} target="_blank" rel="noopener"><b>GH:</b> /ananyapenumudi-ops</a>
              <a href={links.linkedin} target="_blank" rel="noopener"><b>LI:</b> /ananya-penumudi</a>
              <a href={`mailto:${links.email}`}><b>@:</b> {links.email}</a>
            </div>
            <p className="hero-role" aria-live="off">{role}<span className="caret">|</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
