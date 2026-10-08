import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let lenis: Lenis | null = null;

export function startSmoothScroll() {
  if (lenis || reducedMotion()) return lenis;
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  if (import.meta.env.DEV) (window as unknown as { __lenis: Lenis }).__lenis = lenis;
  return lenis;
}

export function scrollToTarget(target: string | HTMLElement) {
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
}

export function setScrollLocked(locked: boolean) {
  document.body.classList.toggle('is-loading', locked);
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}

/** Reveals, scroll progress, custom cursor and magnetic buttons: everything page-wide. */
export function initSiteMotion() {
  const cleanups: (() => void)[] = [];
  const reduced = reducedMotion();
  const ctx = gsap.context(() => {

  // fade-up reveals
  if (!reduced) {
    document.documentElement.classList.add('js');
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 88%',
      onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
    });
  }

  // timeline bullets pop in
  gsap.utils.toArray<HTMLElement>('.tl > li').forEach((li) => {
    if (reduced) return;
    gsap.from(li.querySelector('.sparkle'), {
      scale: 0, rotate: -180, duration: 0.8, ease: 'back.out(2)',
      scrollTrigger: { trigger: li, start: 'top 90%' },
    });
  });

  // outlined echo text drifts sideways with scroll
  gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((el) => {
    if (reduced) return;
    const amt = Number(el.dataset.drift) || 10;
    gsap.fromTo(el, { xPercent: -amt }, {
      xPercent: amt, ease: 'none',
      scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // parallax
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    if (reduced) return;
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax) || -15, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // scroll progress bar
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (bar) {
    gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  }

  });

  if (finePointer() && !reduced) {
    // custom cursor
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (dot && ring) {
      const dx = gsap.quickTo(dot, 'x', { duration: 0.08 });
      const dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
      const rx = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3' });
      const ry = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3' });
      const move = (e: PointerEvent) => {
        document.body.classList.add('cursor-on');
        dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
      };
      const over = (e: PointerEvent) => {
        const hit = (e.target as HTMLElement).closest('a, button, [data-hover]');
        ring.classList.toggle('hover', !!hit);
      };
      const leave = () => document.body.classList.remove('cursor-on');
      window.addEventListener('pointermove', move);
      document.addEventListener('pointerover', over);
      document.documentElement.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        window.removeEventListener('pointermove', move);
        document.removeEventListener('pointerover', over);
        document.documentElement.removeEventListener('pointerleave', leave);
      });
    }

    // magnetic pills
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      const my = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * 0.3);
        my((e.clientY - r.top - r.height / 2) * 0.4);
      };
      const reset = () => { mx(0); my(0); };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', reset);
      cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset); });
    });
  }

  return () => { ctx.revert(); cleanups.forEach((c) => c()); };
}
