import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">{eyebrow}</p>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
