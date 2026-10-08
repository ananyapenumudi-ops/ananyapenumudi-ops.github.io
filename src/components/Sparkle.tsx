import { cn } from '@/lib/utils';

/** Four-point star used as the site's motif (logo, bullets, decorations). */
export function Sparkle({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg className={cn('sparkle', className)} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 0c.9 6.4 4.9 10.6 12 12-7.1 1.4-11.1 5.6-12 12-.9-6.4-4.9-10.6-12-12C7.1 10.6 11.1 6.4 12 0z" />
    </svg>
  );
}
