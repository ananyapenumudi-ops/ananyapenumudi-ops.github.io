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
          <p className="sec-note" data-reveal>Ten ideas on my workbench, each with its own mascot. Hover (or tap) a strip to peek. Some are silly, some are serious, and all of them are things I'd love to make.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <HoverExpand_001 images={ideas} initialActive={0} />
      </div>
      <p className="scrap-credit">Hover gallery adapted from <a href="https://skiper-ui.com" target="_blank" rel="noopener">Skiper UI</a></p>
    </section>
  );
}
