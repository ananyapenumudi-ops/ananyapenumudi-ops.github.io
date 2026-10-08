import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ZoomSliderComp } from '@/components/ui/zoom-slider';
import { sliderItems } from '@/data';

// Mirrors the slider's own card width so one scroll "screen" moves a fixed number of cards.
const cardStep = () => (window.innerWidth < 640 ? 260 : window.innerWidth < 1025 ? 500 : 680);

export function Work() {
  const root = useRef<HTMLElement>(null);
  const offset = useRef(0);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const n = sliderItems.length;
    // Pin the section and turn vertical scroll into a full lap of the slider.
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top top',
      end: () => `+=${window.innerHeight * 3.2}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        offset.current = self.progress * (n - 1) * cardStep();
        setCurrent(Math.min(n, Math.round(self.progress * (n - 1)) + 1));
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section className="work" id="work" ref={root}>
      <div className="work-head">
        <h2 className="sec-title mustard">Selected work</h2>
        <p>Scroll to explore · drag to browse · hover for details</p>
      </div>
      <div className="work-count" aria-hidden="true">
        {String(current).padStart(2, '0')}<small> / {String(sliderItems.length).padStart(2, '0')}</small>
      </div>
      <ZoomSliderComp sliderData={sliderItems} externalOffset={offset} className="bg-[#151513]" size={0.95} />
    </section>
  );
}
