import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Experience"
          title="From enterprise platforms to fintech product delivery."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {experience.map((role, index) => (
          <Reveal key={`${role.company}-${role.period}`} delay={index * 120} className="timeline-card rounded-[2rem] p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">{role.period}</p>
                <h3 className="mt-3 font-display text-3xl text-white">{role.title}</h3>
                <p className="mt-2 text-lg text-white/[0.86]">{role.company}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{role.meta}</p>
              </div>
              <span className="inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--color-text-muted)]">
                End-to-end ownership
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {role.bullets.map((bullet) => (
                <div key={bullet} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-5 text-sm leading-7 text-[var(--color-text-muted)]">
                  {bullet}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
