"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  fullWidth,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative py-32 md:py-44 transition-all duration-1000",
        fullWidth ? "px-0" : "px-6 lg:px-12",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16",
        className
      )}
    >
      {!fullWidth && (
        <div className="mx-auto max-w-7xl">{children}</div>
      )}
      {fullWidth && children}
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-12 bg-primary" />
      <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary">
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
      {children}
    </h2>
  );
}
