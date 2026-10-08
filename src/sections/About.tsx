import { Download, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { links, traits } from '@/data';

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <span className="sec-kicker" data-reveal>about me</span>
            <h2 className="sec-title" data-reveal>Serious engineering, silly mascots</h2>
            <p className="lead" data-reveal style={{ marginTop: 22 }}>
              I'm a <strong>B.Tech CSE (IoT)</strong> student at VNRVJIET. I live somewhere between a soldering iron and a Python notebook.
            </p>
            <p data-reveal>
              I trained at <strong>BHEL Bengaluru</strong>, wrote a thesis on <strong>KAVACH</strong>, India's Automatic Train
              Protection system, and built <strong>Elementium</strong>, a 3D chemistry lab with an AI tutor and its own mascot.
            </p>
            <p data-reveal>
              I like serious problems where a wrong answer has consequences, and I like solving them in a way that feels warm and human.
              Careful architecture on the inside, a little bit of fun on the outside.
            </p>
            <div className="about-ctas" data-reveal>
              <a className="pill pill-red" href={links.linkedin} target="_blank" rel="noopener" data-magnetic><Linkedin /> LinkedIn</a>
              <a className="pill pill-cream" href={links.resume} download data-magnetic><Download /> Resume</a>
            </div>
          </div>

          <div className="contact-card" data-reveal>
            <h3>Find me</h3>
            <div className="row"><MapPin /> Hyderabad, India</div>
            <a href={`mailto:${links.email}`}><Mail /> {links.email}</a>
            <a href={links.github} target="_blank" rel="noopener"><Github /> github.com/ananyapenumudi-ops</a>
            <a href={links.linkedin} target="_blank" rel="noopener"><Linkedin /> in/ananya-penumudi</a>
          </div>
        </div>

        <div className="traits">
          {traits.map((t) => (
            <div className="trait" key={t.title} data-reveal>
              <div className="trait-art"><img src={t.art} alt="" loading="lazy" /></div>
              <div className="trait-body">
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
