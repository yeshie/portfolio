import { skills } from "@/data/portfolio";
import { Reveal } from "../ui/reveal";
import { Section } from "../ui/section";

const pastels = ["bg-pink", "bg-lavender", "bg-butter", "bg-mint", "bg-sky", "bg-peach"];

export function Skills() {
  const all = Object.values(skills).flat();

  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={
        <>
          Tools I <span className="text-gradient">work with</span>
        </>
      }
    >
      {/* Infinite scrolling strip */}
      <div className="relative -mx-5 mb-14 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] sm:-mx-8">
        <div className="animate-marquee flex w-max gap-3">
          {[...all, ...all].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2 font-mono text-sm text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <div className={`group h-full rounded-2xl border border-line p-6 transition hover:border-accent/40 ${pastels[i % pastels.length]}`}>
              <h3 className="mb-5 flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-lg bg-surface/80 px-3 py-1.5 text-sm text-muted transition group-hover:text-fg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
