import type { CSSProperties } from "react";

/**
 * Markup (components stay Server Components):
 * - `data-reveal`: the element enters on its own (opacity + offset).
 * - `data-reveal="stagger"`: the container stays put; its direct children enter staggered.
 * - Each section's CSS Module tunes the motion with `--reveal-x`, `--reveal-y`, `--reveal-duration`,
 *   `--reveal-delay`, `--reveal-step`, `--reveal-clip-from` and `--reveal-clip-to`.
 */
export const REVEAL_ARMED_ATTRIBUTE = "data-reveal-armed";
export const REVEAL_READY_ATTRIBUTE = "data-reveal-ready";
export const REVEALED_ATTRIBUTE = "data-revealed";

/** Position in a sequence revealed together (headline, lead, CTA...). */
export const revealOrder = (i: number) => ({ "--i": i }) as CSSProperties;
