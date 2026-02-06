"use client";

import { useEffect, useRef, useCallback } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
  speed: number;
}

export function KatanaCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const trail = useRef<Point[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dx = mouse.current.x - prevMouse.current.x;
    const dy = mouse.current.y - prevMouse.current.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    if (speed > 2) {
      trail.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        age: 0,
        speed: Math.min(speed, 80),
      });
    }

    // Update dot and ring positions
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
    }
    if (ringRef.current) {
      const rx = lerp(
        parseFloat(ringRef.current.dataset.x || "0"),
        mouse.current.x - 20,
        0.15
      );
      const ry = lerp(
        parseFloat(ringRef.current.dataset.y || "0"),
        mouse.current.y - 20,
        0.15
      );
      ringRef.current.dataset.x = String(rx);
      ringRef.current.dataset.y = String(ry);
      const scale = 1 + Math.min(speed * 0.008, 0.5);
      ringRef.current.style.transform = `translate(${rx}px, ${ry}px) scale(${scale})`;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw katana slash trail
    trail.current = trail.current.filter((p) => p.age < 1);

    for (let i = 1; i < trail.current.length; i++) {
      const p = trail.current[i];
      const pp = trail.current[i - 1];
      p.age += 0.03;

      const alpha = (1 - p.age) * 0.6;
      const width = (1 - p.age) * Math.min(p.speed * 0.15, 8);

      // Main slash line
      ctx.beginPath();
      ctx.moveTo(pp.x, pp.y);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = `hsla(160, 100%, 50%, ${alpha})`;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.stroke();

      // Outer glow
      ctx.beginPath();
      ctx.moveTo(pp.x, pp.y);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = `hsla(160, 100%, 70%, ${alpha * 0.3})`;
      ctx.lineWidth = width * 3;
      ctx.lineCap = "round";
      ctx.stroke();

      // Core white line
      if (width > 2) {
        ctx.beginPath();
        ctx.moveTo(pp.x, pp.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `hsla(160, 100%, 95%, ${alpha * 0.5})`;
        ctx.lineWidth = width * 0.3;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    prevMouse.current = { ...mouse.current };
    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouse);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
        aria-hidden="true"
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-2 w-2 rounded-full bg-primary"
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        data-x="0"
        data-y="0"
        className="pointer-events-none fixed top-0 left-0 z-[9997] h-10 w-10 rounded-full border border-primary/40 transition-[width,height] duration-300"
        aria-hidden="true"
      />
    </>
  );
}
