"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = barRef.current;
      if (!el) return;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      el.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{
          transform: "scaleX(0)",
          willChange: "transform",
          backgroundImage:
            "linear-gradient(to right, #E40303 0 16.666%, #FF8C00 16.666% 33.333%, #FFED00 33.333% 50%, #008026 50% 66.666%, #004DFF 66.666% 83.333%, #750787 83.333% 100%)",
        }}
      />
    </div>
  );
}
