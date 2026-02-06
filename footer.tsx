"use client";

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl py-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {/* Big name */}
        <div>
          <h2 className="font-heading text-5xl font-black uppercase tracking-tighter text-foreground/5 md:text-7xl">
            PARTHU
          </h2>
        </div>

        {/* Info */}
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex items-center gap-6">
            {[
              {
                label: "GH",
                href: "https://github.com/nandipalleparthu-eng",
              },
              {
                label: "LI",
                href: "https://www.linkedin.com/in/nandipalle-parthu-ai",
              },
              {
                label: "EM",
                href: "mailto:nandipalleparthu@karunya.edu",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
            {"© "}
            {new Date().getFullYear()} Nandipalle Parthu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
