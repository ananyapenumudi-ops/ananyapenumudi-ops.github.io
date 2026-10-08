import { HoverExpand_001 } from '@/components/ui/hover-expand';
import { scrapbook } from '@/data';

export function Scrapbook() {
  return (
    <section className="sec scrap" id="scrapbook">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-kicker" data-reveal>the scrapbook</span>
            <h2 className="sec-title" data-reveal>Bits & pieces</h2>
          </div>
          <p className="sec-note" data-reveal>Hover (or tap) a strip to peek: real screenshots from my projects, mixed with the little characters who keep me company.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <HoverExpand_001 images={scrapbook} initialActive={1} />
      </div>
      <p className="scrap-credit">Hover gallery adapted from <a href="https://skiper-ui.com" target="_blank" rel="noopener">Skiper UI</a></p>
    </section>
  );
}
