import { Award, BarChart3, Bot, Users } from 'lucide-react';
import { Sparkle } from '@/components/Sparkle';
import { activities, certifications, memberships } from '@/data';

const CERT_ICONS = [Award, BarChart3, Bot];

export function Activities() {
  return (
    <section className="acts" id="activities">
      <div className="wrap acts-grid">
        <div>
          <h2 className="sec-title" data-reveal>Activities</h2>
          <ul className="tl">
            {activities.map((a) => (
              <li key={a.title} className={'highlight' in a && a.highlight ? 'hl' : ''}>
                <Sparkle size={18} />
                <span className="yr">{a.year}</span>
                <div><h4>{a.title}</h4><p>{a.desc}</p></div>
              </li>
            ))}
            {memberships.map((m) => (
              <li key={m.title}>
                <Sparkle size={18} />
                <span className="yr">Now</span>
                <div><h4>{m.title}</h4><p>{m.desc}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="sec-title" data-reveal>Certifications</h2>
          <div className="certs">
            {certifications.map((c, i) => {
              const Icon = CERT_ICONS[i] ?? Users;
              return (
                <div className="cert" key={c.title} data-reveal>
                  <div className="trait-icon"><Icon /></div>
                  <div><h4>{c.title}</h4><p>{c.org} · {c.date}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
