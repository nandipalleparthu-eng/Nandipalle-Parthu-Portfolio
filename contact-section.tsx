"use client";

import { useState } from "react";
import { SectionWrapper, SectionLabel } from "./section-wrapper";
import { ArrowUpRight, Send } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "nandipalleparthu@karunya.edu",
    href: "mailto:nandipalleparthu@karunya.edu",
  },
  {
    label: "LinkedIn",
    value: "nandipalle-parthu-ai",
    href: "https://www.linkedin.com/in/nandipalle-parthu-ai",
  },
  {
    label: "GitHub",
    value: "nandipalleparthu-eng",
    href: "https://github.com/nandipalleparthu-eng",
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {"Let's"}
            <br />
            <span className="text-gradient">connect</span>
          </h2>

          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to collaborate on something meaningful."}
          </p>

          {/* Contact links */}
          <div className="mt-12 flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border/30 py-5 transition-colors hover:border-primary/30"
              >
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-1">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {link.value}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:rotate-0 -rotate-45" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex flex-col justify-center">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-16 w-16 flex items-center justify-center border border-primary/30 mb-6">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground mb-2">
                Sent
              </h3>
              <p className="text-sm text-muted-foreground">
                {"I'll get back to you soon."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="NANDIPALLE PARTHU"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground text-lg font-heading font-semibold focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="nandipalleparthu@karunya.edu"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground text-lg font-heading font-semibold focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  defaultValue="INSPIRE AND BUILD"
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground font-heading font-semibold focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group self-start flex items-center gap-3 border border-primary/50 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Send Message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
