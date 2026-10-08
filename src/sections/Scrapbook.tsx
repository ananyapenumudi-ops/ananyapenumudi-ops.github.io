import { HoverExpand_001 } from '@/components/ui/hover-expand';
import { ideas } from '@/data';

export function Scrapbook() {
  return (
    <section className="sec scrap" id="ideas">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-kicker" data-reveal>the idea board</span>
            <h2 className="sec-title" data-reveal>Things I want to build next</h2>
          </div>
          <p className="sec-note" data-reveal>Ten unrelated things I'd love to make: half hardware, half software, all a little silly. Hover (or tap) a strip to peek.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <HoverExpand_001 images={ideas} initialActive={0} />
      </div>
    </section>
  );
}
