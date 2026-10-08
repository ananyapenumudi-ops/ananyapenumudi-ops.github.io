import { ArrowUpRight } from 'lucide-react';
import { images, inTheLab, projects, type Project } from '@/data';

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
          <h3>Also on the bench</h3>
          <p>A bigger idea I'm still designing. It's labelled honestly so you know it isn't built yet.</p>
        </div>
        {inTheLab.map((p, i) => <ProjectCard key={p.slug} p={p} index={projects.length + i} flip={false} />)}
      </div>
    </section>
  );
}
