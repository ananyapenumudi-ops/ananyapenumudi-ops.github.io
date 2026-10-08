import { Download, Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { images, links } from '@/data';

export function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-art" data-reveal><img src={images.duck} alt="Illustrated duck saying hi" loading="lazy" /></div>
          <div>
            <span className="sec-kicker" data-reveal>let's talk</span>
            <h2 className="say-hi" data-reveal aria-label="Say hi!">
              {'SAY HI!'.split('').map((c, i) => (
                <span key={i} className="wavy-letter" aria-hidden="true" style={{ ['--i' as string]: i }}>{c === ' ' ? ' ' : c}</span>
              ))}
            </h2>
            <p className="lead" data-reveal>Internships, collaborations, a project idea, or just to swap chai recommendations. My inbox is open.</p>
            <div className="contact-ctas" data-reveal>
              <a className="pill pill-red" href={`mailto:${links.email}`} data-magnetic><Mail /> {links.email}</a>
              <a className="pill pill-cream" href={links.linkedin} target="_blank" rel="noopener" data-magnetic><Linkedin /> LinkedIn</a>
              <a className="pill pill-cream" href={links.github} target="_blank" rel="noopener" data-magnetic><Github /> GitHub</a>
              <a className="pill pill-mustard" href={links.resume} download data-magnetic><Download /> Resume</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Ananya Penumudi · illustrations made for this site</span>
        <span>Hover gallery from <a href="https://skiper-ui.com" target="_blank" rel="noopener">Skiper UI</a></span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
