"use client";

import { useEffect } from "react";
import { REVEAL_READY_ATTRIBUTE, REVEALED_ATTRIBUTE } from "./reveal";

/**
 * A single IntersectionObserver for the whole page: marks `data-revealed` the first time
 * each `[data-reveal]` enters the viewport, then stops observing it. No React state, so
 * scrolling never re-renders. The page is one static route, so elements are collected once on mount.
 */
export function RevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Anything already above the viewport (reload mid-page) is revealed immediately.
          const alreadyPassed = entry.boundingClientRect.bottom < 0;
          if (!entry.isIntersecting && !alreadyPassed) continue;
          entry.target.setAttribute(REVEALED_ATTRIBUTE, "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    for (const target of document.querySelectorAll(`[data-reveal]:not([${REVEALED_ATTRIBUTE}])`)) {
      observer.observe(target);
    }
    document.documentElement.setAttribute(REVEAL_READY_ATTRIBUTE, "");

    return () => observer.disconnect();
  }, []);

  return null;
}
