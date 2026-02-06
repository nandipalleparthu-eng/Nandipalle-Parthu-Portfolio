"use client";

export function MarqueeBand() {
  const items = [
    "AI & MACHINE LEARNING",
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "GAME DEVELOPMENT",
    "PYTHON",
    "REACT",
    "NEXT.JS",
    "CREATIVE CODE",
  ];

  const row = items.map((t, i) => (
    <span key={i} className="flex items-center gap-8 whitespace-nowrap">
      <span className="font-heading text-4xl font-black uppercase tracking-tight text-foreground/10 md:text-6xl">
        {t}
      </span>
      <span className="h-3 w-3 rotate-45 bg-primary/30" />
    </span>
  ));

  return (
    <div className="relative overflow-hidden border-y border-border/30 py-8">
      <div className="flex animate-marquee gap-8">
        {row}
        {row}
      </div>
    </div>
  );
}
