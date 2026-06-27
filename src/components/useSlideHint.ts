"use client";

import { useEffect, useRef } from "react";

/**
 * Returns a ref for a horizontal scroll container. The first time it scrolls
 * into view, it gently peeks sideways and back a couple of times to signal
 * that it's draggable. Snap is temporarily disabled so the small nudge isn't
 * snapped away. Respects prefers-reduced-motion.
 */
export function useSlideHint<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let played = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played) return;
        played = true;
        observer.disconnect();

        const snapBackup = el.style.scrollSnapType;
        const peek = (left: number) => el.scrollTo({ left, behavior: "smooth" });

        timers.push(
          setTimeout(() => {
            el.style.scrollSnapType = "none";
            peek(96);
          }, 450),
          setTimeout(() => peek(0), 1050),
          setTimeout(() => peek(64), 1550),
          setTimeout(() => peek(0), 2100),
          setTimeout(() => {
            el.style.scrollSnapType = snapBackup;
          }, 2700)
        );
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return ref;
}
