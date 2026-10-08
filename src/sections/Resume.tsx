import { Sparkle } from '@/components/Sparkle';
import { education, experience, languages, skillGroups } from '@/data';

const CODE_BADGES = ['C', 'C++', 'Py', 'Java', 'JS', 'R', 'SQL', 'HTML', 'CSS'];
const group = (name: string) => skillGroups.find((g) => g.name === name)?.items ?? [];
const startYear = (date: string) => date.match(/\d{4}/)?.[0] ?? date;

export function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="wrap">
        <div className="resume-grid">
          <div>
            <h2 className="sec-title mustard" data-reveal>Education</h2>
            <ul className="tl">
              {education.map((e) => (
                <li key={e.school}>
                  <Sparkle size={18} />
                  <span className="yr">{e.date.replace(' – ', '–').replace('Present', 'now')}</span>
                  <div>
                    <h4>{e.school}</h4>
                    <p>{e.degree}</p>
                    <span className="score">{e.score}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="resume-echo outline-text" aria-hidden="true">
              <span data-drift="6">RESUME</span><span data-drift="-6">RESUME</span>
            </div>
            <h2 className="sec-title mustard" data-reveal style={{ position: 'relative', marginTop: 'clamp(0px, 9vw, 150px)' }}>Technical skills</h2>
            <div className="skills-cols">
              <div data-reveal>
                <h5>Coding</h5>
                <div className="badges">{CODE_BADGES.map((b) => <span className="badge-sq" key={b} data-hover>{b}</span>)}</div>
              </div>
              <div data-reveal>
                <h5>Hardware & IoT</h5>
                <div className="mini-list">{group('IoT & Embedded').map((s) => <div key={s}>{s}</div>)}</div>
              </div>
            </div>
            <div className="chip-row" data-reveal>
              {[...group('Systems Engineering'), ...group('AI & Vision')].map((s) => (
                <span className="pill pill-ink pill-sm" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="exp-band">
        <div className="wrap exp-row">
          <div className="exp-card" data-reveal>
            <h2 className="sec-title">Experience</h2>
            <ul className="tl">
              {experience.map((x) => (
                <li key={x.org}>
                  <Sparkle size={18} />
                  <span className="yr">{startYear(x.date)}</span>
                  <div>
                    <h4>{x.role}</h4>
                    <p>{x.org} · {x.date}</p>
                    <ul>{x.points.slice(0, 1).map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ul>
            <div className="chip-row">
              {['#SystemsThinking', '#Prototyping', '#Documentation', '#SafetyFirst'].map((t) => (
                <span className="pill pill-sm" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="exp-side">
            <div data-reveal>
              <h2 className="sec-title">Languages</h2>
              <div className="lang-row">{languages.map((l) => <h5 key={l}>{l}</h5>)}</div>
            </div>
            <div data-reveal>
              <h2 className="sec-title">Data, cloud & tools</h2>
              <div className="chip-row">
                {[...group('Data & Cloud'), ...group('Design & Tools')].map((s) => (
                  <span className="pill pill-line pill-sm" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
