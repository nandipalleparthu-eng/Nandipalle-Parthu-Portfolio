"use client";

import { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "AI & ML Enthusiast",
  "Game Developer",
  "Web Developer",
  "UI/UX Designer",
  "Python Programmer",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleTyping = useCallback(() => {
    const fullText = roles[currentRole];
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      if (displayText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2500);
        return;
      }
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [currentRole, displayText, isDeleting]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isDeleting ? 30 : 70);
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 lg:px-12"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent glow - subtle bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[200px]" />

      {/* Top spacer */}
      <div className="pt-32" />

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        {/* Overline */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="h-px w-8 bg-primary" />
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Portfolio 2026
          </span>
        </div>

        {/* Giant name */}
        <div className="overflow-hidden">
          <h1
            className={`font-heading text-[clamp(3rem,12vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-foreground transition-all duration-1000 delay-500 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
          >
            NANDI
            <br />
            <span className="text-gradient">PALLE</span>
            <br />
            PARTHU
          </h1>
        </div>

        {/* Role + tagline row */}
        <div
          className={`mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-3">
            {/* Typed role */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-heading text-lg font-semibold text-foreground md:text-xl">
                {displayText}
              </span>
              <span className="inline-block w-px h-5 bg-primary animate-pulse" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Inspire & Build
            </p>
          </div>

          {/* Social links - vertical */}
          <div className="flex gap-6 md:flex-col md:items-end md:gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/nandipalleparthu-eng",
                label: "GH",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/nandipalle-parthu-ai",
                label: "LI",
              },
              {
                icon: Mail,
                href: "mailto:nandipalleparthu@karunya.edu",
                label: "EM",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="text-[10px] uppercase tracking-[0.2em] hidden md:inline">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl border-t border-border/50 py-6 flex items-center justify-between transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll to explore
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Coimbatore, IN
          </span>
        </div>
        <a
          href="#projects"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary transition-all hover:gap-4"
        >
          View work
          <span className="inline-block transition-transform group-hover:translate-x-1">
            {"->"}
          </span>
        </a>
      </div>
    </section>
  );
}
