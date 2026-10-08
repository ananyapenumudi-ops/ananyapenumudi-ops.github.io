import { Download, Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { Sparkle } from '@/components/Sparkle';
import { links } from '@/data';

export function Contact() {
  return (
    <>
      <section className="contact on-dark" id="contact">
        <div className="contact-echo outline-text" aria-hidden="true">
          <span data-drift="8">SAY HELLO · SAY HELLO</span>
          <span data-drift="-8">SAY HELLO · SAY HELLO</span>
        </div>
        <div className="wrap" style={{ position: 'relative', width: '100%' }}>
          <Sparkle size={48} className="twinkle" />
          <h2 data-reveal style={{ marginTop: 18 }}>Let's build something that <em>senses, thinks & reacts.</em></h2>
          <div className="contact-ctas" data-reveal>
            <a className="pill pill-mustard" href={`mailto:${links.email}`} data-magnetic><Mail /> {links.email}</a>
            <a className="pill pill-cream" href={links.linkedin} target="_blank" rel="noopener" data-magnetic><Linkedin /> LinkedIn</a>
            <a className="pill pill-cream" href={links.github} target="_blank" rel="noopener" data-magnetic><Github /> GitHub</a>
            <a className="pill pill-orange" href={links.resume} download data-magnetic><Download /> Resume</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Ananya Penumudi</span>
        <span>Built with React, Three.js & GSAP</span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </>
  );
}
