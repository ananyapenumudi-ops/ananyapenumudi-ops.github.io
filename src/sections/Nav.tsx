import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkle } from '@/components/Sparkle';
import { scrollToTarget } from '@/lib/motion';

const LINKS = [
  ['about', 'About me'],
  ['resume', 'Resume'],
  ['work', 'Work'],
  ['projects', 'Projects'],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    // Turn the bar cream once the green hero has scrolled away.
    const st = ScrollTrigger.create({
      trigger: '#hero', start: 'bottom 80px',
      onEnter: () => setScrolled(true), onLeaveBack: () => setScrolled(false),
    });
    const sections = [...LINKS.map(([id]) => id), 'contact'].map((id) =>
      ScrollTrigger.create({
        trigger: `#${id}`, start: 'top center', end: 'bottom center',
        onToggle: (self) => self.isActive && setActive(id),
      })
    );
    return () => { st.kill(); sections.forEach((s) => s.kill()); };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(`#${id}`);
  };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <a href="#hero" className="brand" onClick={(e) => go(e, 'hero')} data-magnetic>
        <Sparkle size={26} className="spin-slow" /> Ananya P.
      </a>
      <nav className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={(e) => go(e, id)}>{label}</a>
        ))}
        <a href="#contact" className="pill pill-mustard pill-sm" onClick={(e) => go(e, 'contact')} data-magnetic>Get in touch!</a>
      </nav>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
