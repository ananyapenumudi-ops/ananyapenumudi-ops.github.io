import { Cpu, FileText, Mail, MapPin, Search, ShieldCheck, Download } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { links, traits } from '@/data';

const TRAIT_ICONS = [ShieldCheck, Cpu, FileText];

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <h2 className="hello" data-reveal>Hello,<br />I'm Ananya!</h2>
            <p data-reveal>
              I'm a <strong>B.Tech Computer Science (IoT)</strong> student at VNRVJIET who lives somewhere between a
              soldering iron and a Python notebook. I trained at <strong>BHEL Bengaluru</strong>, wrote a thesis on{' '}
              <strong>KAVACH</strong>, India's Automatic Train Protection system, and I build assistive tech: an AI
              wheelchair that brakes before it collides, a fall detector that calls for help, and a wellness band that
              reads emotion from biometrics.
            </p>
            <p data-reveal>
              My style? Calm, structured and a little obsessive about details. I like problems where a wrong answer has
              real consequences, so I care about clean architecture, functional safety and documentation people can
              actually use. And I like my work to feel warm and human, which is why my lab software has a mascot.
            </p>
            <div className="about-ctas" data-reveal>
              <a className="pill pill-orange" href={links.linkedin} target="_blank" rel="noopener" data-magnetic>
                <Search /> linkedin.com/in/ananya-penumudi
              </a>
              <a className="pill pill-ink" href={links.resume} download data-magnetic>
                <Download /> Resume
              </a>
            </div>
          </div>

          <div className="portrait" data-reveal>
            <span className="pill pill-mustard tag-float a">B.Tech CSE–IoT · CGPA 8.92</span>
            <span className="pill pill-mustard tag-float b">Hyderabad, India</span>
            <div className="portrait-card">
              <img src="./photo.jpg" alt="Portrait of Ananya Penumudi" data-parallax="-6" onError={(e) => e.currentTarget.remove()} />
              <div className="photo-fallback">AP</div>
            </div>
            <div className="contact-card">
              <h3>Contact</h3>
              <div className="row"><MapPin /> Hyderabad, India</div>
              <a href={`mailto:${links.email}`}><Mail /> {links.email}</a>
              <a href={links.github} target="_blank" rel="noopener"><Github /> github.com/ananyapenumudi-ops</a>
              <a href={links.linkedin} target="_blank" rel="noopener"><Linkedin /> in/ananya-penumudi</a>
            </div>
          </div>
        </div>

        <div className="traits">
          {traits.map((t, i) => {
            const Icon = TRAIT_ICONS[i];
            return (
              <div className="trait" key={t.title} data-reveal>
                <div className="trait-icon"><Icon /></div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
