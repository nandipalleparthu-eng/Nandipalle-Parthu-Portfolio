"use client";

import { useEffect, useState } from "react";

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExit(true), 300);
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-all duration-1000 ${
        exit ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Name reveal */}
      <div className="relative overflow-hidden">
        <h1
          className="font-heading text-5xl font-black uppercase tracking-tighter text-foreground sm:text-7xl"
          style={{
            clipPath: `inset(0 ${100 - Math.min(count, 100)}% 0 0)`,
            transition: "clip-path 0.3s ease-out",
          }}
        >
          PARTHU
        </h1>
      </div>

      {/* Counter */}
      <div className="mt-8 flex items-end gap-1">
        <span className="font-heading text-6xl font-black tabular-nums text-gradient sm:text-8xl">
          {Math.min(count, 100)}
        </span>
        <span className="mb-2 text-lg text-muted-foreground font-heading sm:text-xl">
          %
        </span>
      </div>

      {/* Progress line */}
      <div className="mt-6 h-px w-48 bg-border">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${Math.min(count, 100)}%` }}
        />
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Loading experience
      </p>
    </div>
  );
}
