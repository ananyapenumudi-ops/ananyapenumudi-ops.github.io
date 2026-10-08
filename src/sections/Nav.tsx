import { useEffect, useState } from 'react';
import { scrollToTarget } from '@/lib/motion';

const LINKS = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['ideas', 'Ideas'],
  ['bits', 'Resume'],
] as const;

export function FlowerMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="20" cy="9" rx="6.5" ry="9" fill="#d81e2c" transform={`rotate(${a} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="6" fill="#f2b632" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // highlight whichever section sits in the middle of the screen
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    [...LINKS.map(([id]) => id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(`#${id}`);
  };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="brand" onClick={(e) => go(e, 'top')} data-magnetic>
        <FlowerMark /> ananya
      </a>
      <nav className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={(e) => go(e, id)}>{label}</a>
        ))}
        <a href="#contact" className="pill pill-red pill-sm" onClick={(e) => go(e, 'contact')} data-magnetic>Say hi!</a>
      </nav>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
