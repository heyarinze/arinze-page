"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LOGO_SIZE = 128;
const HOLD_MS = 700;
const SHRINK_MS = 800;
const FAILSAFE_MS = 4000;

export default function SplashScreen() {
  const [phase, setPhase] = useState<"hold" | "shrink" | "done">("hold");
  const logoRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts: number[] = [];

    const shrink = () => {
      if (cancelled || startedRef.current) return;
      startedRef.current = true;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const logo = logoRef.current;
      const target = document.getElementById("nav-logo");
      if (!reduceMotion && logo && target) {
        const from = logo.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        logo.style.transform = `translate(${dx}px, ${dy}px) scale(${
          to.width / from.width
        })`;
      }
      setPhase("shrink");
      timeouts.push(window.setTimeout(() => setPhase("done"), SHRINK_MS));
    };

    const start = () => {
      timeouts.push(window.setTimeout(shrink, HOLD_MS));
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    // Never leave the page trapped behind the splash
    timeouts.push(window.setTimeout(shrink, FAILSAFE_MS));

    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // While the splash is up, lock scrolling and hide the nav logo so the
  // shrinking splash logo reads as the same element landing in the nav.
  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    const navLogo = document.getElementById("nav-logo");
    if (navLogo) navLogo.style.visibility = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (navLogo) navLogo.style.visibility = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] ${
        phase === "shrink" ? "pointer-events-none" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-out ${
          phase === "shrink" ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={logoRef}
          className="transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
        >
          <Image
            src="/favicon.ico"
            alt=""
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            priority
            className="w-full h-full rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
