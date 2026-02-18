"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Get the grid color from CSS custom properties
    const computedStyle = getComputedStyle(document.documentElement);
    const gridColor = computedStyle.getPropertyValue("--color-grid").trim() || "#bcc8d4";

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    // Wave configuration — multiple sine waves for depth
    const waves = [
      { amplitude: 40, frequency: 0.003, speed: 0.008, opacity: 0.08, yOffset: 0.2 },
      { amplitude: 30, frequency: 0.004, speed: -0.006, opacity: 0.06, yOffset: 0.35 },
      { amplitude: 50, frequency: 0.002, speed: 0.005, opacity: 0.07, yOffset: 0.5 },
      { amplitude: 25, frequency: 0.005, speed: -0.009, opacity: 0.05, yOffset: 0.65 },
      { amplitude: 35, frequency: 0.003, speed: 0.007, opacity: 0.06, yOffset: 0.8 },
    ];

    function draw() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const wave of waves) {
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.globalAlpha = wave.opacity;
        ctx.lineWidth = 1;

        const baseY = canvas.height * wave.yOffset;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * wave.amplitude * 0.4;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
