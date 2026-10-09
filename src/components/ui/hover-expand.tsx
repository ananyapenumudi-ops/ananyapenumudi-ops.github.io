'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface HoverExpandItem {
  src: string;
  alt: string;
  code: string;
  title?: string;
  caption?: string;
}

/** Horizontal on wide screens, a vertical accordion on phones. */
function useNarrow(breakpoint = 760) {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [breakpoint]);
  return narrow;
}

export const HoverExpand_001 = ({
  images,
  className,
  initialActive = 1,
}: {
  images: HoverExpandItem[];
  className?: string;
  initialActive?: number;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(initialActive);
  const narrow = useNarrow();
  const strip = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1100);

  useEffect(() => {
    if (!strip.current) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(strip.current);
    return () => ro.disconnect();
  }, []);

  // Pixel sizes (framer can't tween calc()) scaled so the strip always fits its container.
  const GAP = 4;
  const open = narrow ? 352 : Math.min(384, width * 0.42);
  const closed = narrow ? 52 : Math.max(18, (width - open - GAP * (images.length - 1)) / (images.length - 1));

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn('relative w-full max-w-6xl px-5', className)}
    >
      <div ref={strip} className={cn('flex w-full justify-center gap-1', narrow ? 'flex-col' : 'items-center')}>
        {images.map((image, index) => {
          const active = activeImage === index;
          return (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={narrow ? { height: 52, width: '100%' } : { width: 40, height: 320 }}
              animate={narrow ? { height: active ? open : closed, width: '100%' } : { width: active ? open : closed, height: 384 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
              data-hover
            >
              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute z-[1] h-full w-full bg-gradient-to-t from-black/55 via-black/5 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.12 }}
                    className="absolute z-[2] flex h-full w-full flex-col items-start justify-end p-5 text-left"
                  >
                    <p className="text-xs text-white/70">{image.code}</p>
                    {image.title && <p className="mt-1 text-lg font-bold leading-tight text-white">{image.title}</p>}
                    {image.caption && <p className="mt-1 text-sm leading-snug text-white/85">{image.caption}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
              <img src={image.src} className="size-full object-cover" alt={image.alt} draggable={false} width={400} height={500} loading="lazy" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Adapted from Skiper UI (https://skiper-ui.com) by @gurvinder-singh02:
 * responsive sizing, a vertical layout on phones, and title/caption text.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 */
