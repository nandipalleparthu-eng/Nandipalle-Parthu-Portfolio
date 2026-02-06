"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
      const sections = ["hero", "about", "skills", "projects", "achievements", "resume", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-2xl font-black uppercase tracking-tighter text-foreground transition-colors hover:text-primary"
        >
          NP
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary ml-0.5 mb-1" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "relative text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status indicator */}
        <div className="hidden items-center gap-2 md:flex">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Open to work
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={cn(
              "block h-px w-7 bg-foreground transition-transform duration-500",
              mobileOpen && "translate-y-[5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-foreground transition-opacity duration-500",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-foreground transition-transform duration-500",
              mobileOpen && "-translate-y-[5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-700 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-8">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              }}
              className={cn(
                "transition-all duration-500",
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-black uppercase tracking-tight text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
