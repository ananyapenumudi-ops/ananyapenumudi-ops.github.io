import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { images, inTheLab, projects, type Project } from '@/data';
import { reducedMotion } from '@/lib/motion';

function Gallery({ shots }: { shots: NonNullable<Project['gallery']> }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || reducedMotion()) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % shots.length), 3200);
    return () => clearInterval(t);
  }, [auto, shots.length]);

  return (
    <div className="gallery">
      <div className="gallery-main">
        <span className="pill pill-mustard pill-sm">{shots[i].caption}</span>
        <img key={shots[i].src} src={shots[i].src} alt={`Elementium: ${shots[i].caption}`} className="animate-[fadeIn_.5s_ease]" />
      </div>
      <div className="gallery-thumbs">
        {shots.map((s, n) => (
          <button key={s.src} className={n === i ? 'on' : ''} aria-label={`Show ${s.caption}`} onClick={() => { setAuto(false); setI(n); }}>
            <img src={s.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p, index, flip }: { p: Project; index: number; flip: boolean }) {
  return (
    <article className={`proj theme-${p.theme}${flip ? ' flip' : ''}${p.status ? ' concept' : ''}`} data-reveal>
      <div className="proj-art">
        <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
        {p.status && <span className="stamp">{p.status}</span>}
        <img src={p.art} alt="" loading="lazy" />
      </div>
      <div className="proj-body">
        {p.slug === 'elementium' && <img className="el-logo" src={images.elLogo} alt="Elementium logo" loading="lazy" />}
        <span className="proj-kicker">{p.kicker}</span>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
        {p.more && <p>{p.more}</p>}
        {p.gallery && <Gallery shots={p.gallery} />}
        <div className="proj-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="proj-foot">
          <span className="proj-date">{p.date}</span>
          <div className="proj-links">
            {p.links.map((l) => (
              <a key={l.url} className="pill pill-red pill-sm" href={l.url} target="_blank" rel="noopener" data-magnetic>
                {l.label} <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-kicker" data-reveal>selected work</span>
            <h2 className="sec-title" data-reveal>Things I've built</h2>
          </div>
          <p className="sec-note" data-reveal>Three projects I'm proudest of: one about keeping trains apart, one about making chemistry click, and one about making data truly disappear.</p>
        </div>

        {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} flip={i % 2 === 1} />)}

        <div className="lab-head" data-reveal>
          <h3>In the lab</h3>
          <p>Ideas on my workbench that aren't built yet. They're labelled honestly so you know what's real.</p>
        </div>
        {inTheLab.map((p, i) => <ProjectCard key={p.slug} p={p} index={projects.length + i} flip={false} />)}
      </div>
    </section>
  );
}
