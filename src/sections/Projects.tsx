import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { images, projects } from '@/data';
import { reducedMotion } from '@/lib/motion';

const FILTERS = [
  ['all', 'All'],
  ['iot', 'IoT & Embedded'],
  ['ai', 'AI'],
  ['systems', 'Systems & Safety'],
  ['web', 'Web'],
] as const;

const GALLERY_CAPTIONS = ['3D titration bench', 'Elio, the AI tutor', 'Student dashboard', 'pH titration curve', 'Viva arcade', 'Lab notebook'];

type Project = (typeof projects)[number];

function Links({ p }: { p: Project }) {
  if (!p.links.length) return null;
  return (
    <div className="pcard-links">
      {p.links.map((l) => (
        <a key={l.url} className="pill pill-mustard pill-sm" href={l.url} target="_blank" rel="noopener" data-magnetic>
          {l.label} <ArrowUpRight />
        </a>
      ))}
    </div>
  );
}

function Elementium({ p, hidden }: { p: Project; hidden: boolean }) {
  const gallery = 'gallery' in p && p.gallery ? p.gallery : [p.image];
  const [shot, setShot] = useState(0);
  const img = useRef<HTMLImageElement>(null);

  // auto-advance the screenshots until someone picks one
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || reducedMotion()) return;
    const t = window.setInterval(() => setShot((s) => (s + 1) % gallery.length), 3200);
    return () => clearInterval(t);
  }, [auto, gallery.length]);

  useEffect(() => {
    if (img.current && !reducedMotion()) gsap.fromTo(img.current, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' });
  }, [shot]);

  return (
    <article className={`pcard feature${hidden ? ' hidden' : ''}`} data-cat={p.cat.join(' ')}>
      <div className="pcard-img">
        <img ref={img} src={gallery[shot]} alt={`Elementium AI: ${GALLERY_CAPTIONS[shot] ?? 'screenshot'}`} />
        <span className="pill pill-mustard pill-sm feature-caption">{GALLERY_CAPTIONS[shot]}</span>
        <div className="thumbs">
          {gallery.map((g, i) => (
            <button key={g} className={i === shot ? 'on' : ''} aria-label={`Show ${GALLERY_CAPTIONS[i]}`} onClick={() => { setAuto(false); setShot(i); }}>
              <img src={g} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <div className="pcard-body">
        <img className="feature-logo" src={images.elLogo} alt="Elementium logo" loading="lazy" />
        <span className="pcard-kicker">Featured · {p.kicker}</span>
        <h3>Elementium AI: an intelligent virtual chemistry lab</h3>
        <p className="body">{p.body}</p>
        <p className="body" style={{ marginTop: 10 }}>
          Built for a whole class at once: a rule-based engine enforces safe experimental order, an observation notebook
          records every reading, and results such as water hardness in ppm CaCO₃ are calculated automatically at the endpoint.
        </p>
        <div className="pcard-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="pcard-foot">
          <span className="pcard-date">{p.date}</span>
          <Links p={p} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const grid = useRef<HTMLDivElement>(null);
  const shown = (p: Project) => filter === 'all' || (p.cat as readonly string[]).includes(filter);
  const feature = projects.find((p) => p.title.startsWith('Elementium'))!;
  const rest = projects.filter((p) => p !== feature);

  useEffect(() => {
    if (reducedMotion() || !grid.current) return;
    const cards = grid.current.querySelectorAll('.pcard:not(.hidden)');
    gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'expo.out', clearProps: 'transform' });
    ScrollTrigger.refresh();
  }, [filter]);

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="proj-head">
          <h2 className="sec-title" data-reveal>Things I've built</h2>
          <div className="filters" role="group" aria-label="Filter projects" data-reveal>
            {FILTERS.map(([key, label]) => (
              <button key={key} className={filter === key ? 'active' : ''} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
        </div>
        <div className="proj-grid" ref={grid}>
          <Elementium p={feature} hidden={!shown(feature)} />
          {rest.map((p, i) => (
            <article key={p.title} className={`pcard${shown(p) ? '' : ' hidden'}`}>
              <div className="pcard-img">
                <span className="pill pill-mustard pill-sm pcard-num">{String(i + 2).padStart(2, '0')}</span>
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <div className="pcard-body">
                <span className="pcard-kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p className="body">{p.body}</p>
                <div className="pcard-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="pcard-foot">
                  <span className="pcard-date">{p.date}</span>
                  <Links p={p} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
