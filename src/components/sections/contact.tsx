"use client";

import { useState } from "react";
import { profile, socials } from "@/data/portfolio";
import { CheckIcon, CopyIcon, socialIcons } from "../icons";
import { Reveal } from "../ui/reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-16 text-center sm:px-12 md:py-24">
          <div aria-hidden className="bg-grid absolute inset-0" />
          <div aria-hidden className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-pink blur-[100px]" />

          <div className="relative">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">05 — Contact</p>
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s build something <span className="text-gradient">great</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted">
              Have a project in mind or an opportunity to discuss? My inbox is always open.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition hover:opacity-90"
              >
                Say hello
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-sm text-muted transition hover:border-accent/40 hover:text-fg"
              >
                {copied ? <CheckIcon width={16} height={16} className="text-emerald-600" /> : <CopyIcon width={16} height={16} />}
                {copied ? "Copied!" : profile.email}
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="rounded-full border border-line p-3 text-muted transition hover:-translate-y-1 hover:border-accent/50 hover:text-fg"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
