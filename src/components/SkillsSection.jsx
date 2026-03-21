import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Capabilities"
          title="Across frontend, backend, mobile, and system design."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 100} className="glass-panel rounded-[2rem] p-7">
            <h3 className="font-display text-2xl text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[var(--color-text-muted)]">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
