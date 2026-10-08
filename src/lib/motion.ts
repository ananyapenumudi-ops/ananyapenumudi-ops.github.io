import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function scrollToTarget(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
}

/** Reveals, scroll progress, custom cursor and magnetic buttons: everything page-wide. */
export function initSiteMotion() {
  const cleanups: (() => void)[] = [];
  const reduced = reducedMotion();

  const ctx = gsap.context(() => {
    if (!reduced) {
      // poster tiles drop onto the page like stickers
      gsap.fromTo('.poster > *',
        { opacity: 0, y: 60, scale: 0.85, rotate: () => gsap.utils.random(-8, 8) },
        { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.6)', stagger: { each: 0.07, from: 'center' }, delay: 0.1, clearProps: 'transform' });

      document.documentElement.classList.add('js');
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, rotate: 0, duration: 0.9, ease: 'back.out(1.4)', stagger: 0.08, overwrite: true }),
      });

      // project art drifts gently as it scrolls past
      gsap.utils.toArray<HTMLElement>('.proj-art > img').forEach((img) => {
        gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    }

    const bar = document.querySelector<HTMLElement>('.scroll-progress');
    if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  });

  if (finePointer() && !reduced) {
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
      const over = (e: PointerEvent) => ring.classList.toggle('hover', !!(e.target as HTMLElement).closest('a, button, [data-hover]'));
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
