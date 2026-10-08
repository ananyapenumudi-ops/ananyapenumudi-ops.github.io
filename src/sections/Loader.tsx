import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkle } from '@/components/Sparkle';
import { reducedMotion } from '@/lib/motion';

export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reducedMotion()) { onDone(); return; }
    const ctx = gsap.context(() => {
      const n = { v: 0 };
      gsap.timeline({ onComplete: onDone })
        .from('.loader-star', { scale: 0, rotate: -270, duration: 1, ease: 'back.out(1.6)' })
        .to(n, {
          v: 100, duration: 1.6, ease: 'power2.inOut',
          onUpdate: () => { if (count.current) count.current.textContent = String(Math.round(n.v)).padStart(2, '0'); },
        }, 0)
        .to('.loader-star', { rotate: 180, scale: 14, duration: 0.9, ease: 'expo.in' }, '>-0.1')
        .to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '>-0.25');
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader-top"><span>Ananya Penumudi</span><span>Portfolio · 2026</span></div>
      <Sparkle className="loader-star" size={90} />
      <div className="loader-count" ref={count}>00</div>
    </div>
  );
}
