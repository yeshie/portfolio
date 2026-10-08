import { profile } from "@/data/portfolio";
import { Reveal } from "../ui/reveal";
import { Section } from "../ui/section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          A bit <span className="text-gradient">about me</span>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.1}>
              <div className={`rounded-2xl border border-line p-5 md:p-6 ${["bg-pink", "bg-lavender", "bg-butter"][i % 3]}`}>
                <div className="text-gradient text-3xl font-semibold md:text-5xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted md:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
