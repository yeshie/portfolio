import Image from "next/image";
import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, GithubIcon } from "../icons";
import { Reveal } from "../ui/reveal";
import { Section } from "../ui/section";
import { TiltCard } from "../ui/tilt-card";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title={
        <>
          Things I&apos;ve <span className="text-gradient">built</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} className={p.featured ? "md:col-span-2" : ""}>
            <TiltCard className="h-full">
              <div className={`flex h-full flex-col ${p.featured ? "md:flex-row" : ""}`}>
                {/* Preview: screenshot if provided, otherwise a gradient placeholder */}
                <div
                  className={`relative aspect-[16/9] overflow-hidden border-b border-line ${
                    p.featured ? "md:aspect-auto md:w-3/5 md:border-b-0 md:border-r" : ""
                  }`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized={p.image.endsWith(".svg")}
                      sizes={p.featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                      className={`${p.featured ? "bg-butter object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  ) : null}
                  {!p.image && (
                    <div className="absolute inset-0 bg-gradient-to-br from-pink via-surface to-lavender">
                      <div className="bg-grid absolute inset-0" />
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-5xl font-semibold text-fg/10 transition-transform duration-700 group-hover:scale-110">
                        {p.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`flex flex-1 flex-col p-6 ${p.featured ? "md:p-8" : ""}`}>
                  {p.featured && (
                    <span className="mb-3 w-fit rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-medium">{p.title}</h3>
                  <p className={`mt-3 leading-relaxed text-muted ${p.highlights ? "" : "flex-1"}`}>{p.description}</p>
                  {p.highlights && (
                    <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  {(p.live || p.repos) && (
                    <div className="relative z-20 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {p.live && (
                        <a href={p.live} target="_blank" className="inline-flex items-center gap-1 hover:text-accent">
                          Live <ArrowUpRightIcon width={16} height={16} />
                        </a>
                      )}
                      {p.repos?.map((r) => (
                        <a
                          key={r.href}
                          href={r.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-accent"
                        >
                          <GithubIcon width={16} height={16} /> {r.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
