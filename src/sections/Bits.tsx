import { activities, certifications, education, experience, languages, memberships, skills } from '@/data';

// deterministic little tilts so the stickers look hand-placed
const tilt = (i: number) => `${((i * 37) % 9) - 4}deg`;

export function Bits() {
  return (
    <section className="sec bits" id="bits">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-kicker" data-reveal>the resume, but nicer</span>
            <h2 className="sec-title" data-reveal>Boring-but-important bits</h2>
          </div>
        </div>

        <div className="bits-grid">
          <div className="panel" data-reveal>
            <h3>Experience</h3>
            {experience.map((x) => (
              <div className="ticket" key={x.org}>
                <span className="when">{x.date}</span>
                <div>
                  <h4>{x.role}</h4>
                  <div className="org">{x.org}</div>
                  <p>{x.points[0]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="panel" data-reveal>
            <h3>Education</h3>
            {education.map((e) => (
              <div className="ticket" key={e.school}>
                <span className="when">{e.date}</span>
                <div>
                  <h4>{e.school}</h4>
                  <div className="org">{e.degree}</div>
                  <span className="score">{e.score}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="panel span" data-reveal>
            <h3>Toolbox</h3>
            <div className="stickers">
              {skills.map((s, i) => <span key={s} style={{ ['--r' as string]: tilt(i) }}>{s}</span>)}
            </div>
          </div>

          <div className="panel" data-reveal>
            <h3>Hackathons & clubs</h3>
            {activities.map((a) => (
              <div className={`ticket${'highlight' in a && a.highlight ? ' hl' : ''}`} key={a.title}>
                <span className="when">{a.year}</span>
                <div><h4>{a.title}</h4><p>{a.desc}</p></div>
              </div>
            ))}
            {memberships.map((m) => (
              <div className="ticket" key={m.title}>
                <span className="when">Now</span>
                <div><h4>{m.title}</h4><p>{m.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="panel" data-reveal>
            <h3>Certificates</h3>
            {certifications.map((c) => (
              <div className="ticket" key={c.title}>
                <span className="when">{c.date.split(' ').slice(-1)[0]}</span>
                <div><h4>{c.title}</h4><p>{c.org}</p></div>
              </div>
            ))}
            <h3 style={{ marginTop: 22 }}>I speak</h3>
            <div className="stickers">
              {languages.map((l, i) => <span key={l} style={{ ['--r' as string]: tilt(i + 3) }}>{l}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
