import { useEffect, useState } from 'react';
import { Sparkle } from '@/components/Sparkle';
import { images, links, roles } from '@/data';
import { reducedMotion, scrollToTarget } from '@/lib/motion';

function useTypedRoles() {
  const [text, setText] = useState('');
  useEffect(() => {
    if (reducedMotion()) { setText(roles[0]); return; }
    let r = 0, i = 0, deleting = false;
    let timer: number;
    const step = () => {
      const word = roles[r];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let wait = deleting ? 30 : 65;
      if (!deleting && i === word.length) { deleting = true; wait = 1700; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; wait = 300; }
      timer = window.setTimeout(step, wait);
    };
    timer = window.setTimeout(step, 900);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

// Each hero mascot is a shortcut to the section it belongs to.
const MascotTile = ({ cls, src, target, label }: { cls: string; src: string; target: string; label: string }) => (
  <a
    href={`#${target}`}
    className={`tile ${cls}`}
    aria-label={`Jump to ${label}`}
    onClick={(e) => { e.preventDefault(); scrollToTarget(`#${target}`); }}
  >
    <img src={src} alt="" width={400} height={500} />
  </a>
);

const Wavy = ({ text, label, className }: { text: string; label: string; className: string }) => (
  <span className={className}>
    <span className="sr-only">{label}</span>
    {text.split('').map((c, i) => (
      <span key={i} aria-hidden="true" style={{ ['--i' as string]: i }}>{c}</span>
    ))}
  </span>
);

export function Hero() {
  const role = useTypedRoles();

  return (
    <section className="hero" id="top">
      <div className="poster">
        <MascotTile cls="t-a" src={images.flask} target="elementium" label="Elementium AI" />
        <MascotTile cls="t-b tilt-r" src={images.duck} target="contact" label="say hi" />
        <MascotTile cls="t-c" src={images.flower} target="ideas" label="the idea board" />
        <MascotTile cls="t-d tilt-r" src={images.frog} target="about" label="about me" />

        <div className="tile t-title">
          <Sparkle className="star" size={30} />
          <Sparkle className="star" size={18} />
          <span className="hello-small">hi there, I'm</span>
          <h1><Wavy text="ANANYA" label="Ananya Penumudi" className="wavy" /></h1>
          <div className="surname" aria-hidden="true">Penumudi</div>
          <p className="typed">an <b>{role}</b><span className="caret">|</span></p>
          <div className="hero-ctas">
            <a href="#projects" className="pill pill-red" onClick={(e) => { e.preventDefault(); scrollToTarget('#projects'); }} data-magnetic>See my work</a>
            <a href={links.resume} className="pill pill-cream" download data-magnetic>Resume ↓</a>
          </div>
        </div>

        <MascotTile cls="t-e" src={images.daisy} target="ideas" label="the idea board" />
        <MascotTile cls="t-f tilt-r" src={images.cat} target="ideas" label="the idea board" />
        <MascotTile cls="t-g" src={images.train} target="kavach" label="the KAVACH thesis" />
        <MascotTile cls="t-h tilt-r" src={images.tomato} target="ideas" label="the idea board" />
      </div>

      <div className="ribbon" aria-hidden="true">
        <div className="ribbon-track">
          {[0, 1].map((k) => (
            <span key={k}>
              embedded systems <i>✿</i> edge AI <i>✿</i> safety-critical design <i>✿</i> 3D web <i>✿</i> chai <i>✿</i> cute mascots <i>✿</i>{' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
