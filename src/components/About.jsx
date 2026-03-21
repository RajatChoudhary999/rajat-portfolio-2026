import { certifications, education, profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Positioning"
          title="A clear view of strengths, credentials, and impact."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass-panel rounded-[2rem] p-7">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
            Highlights
          </p>
          <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-muted)]">
            {profile.highlights.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-white/[0.88]"
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
              Education
            </p>
            <h3 className="mt-4 font-display text-2xl text-white">
              {education.school}
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              {education.degree}
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {education.period} | {education.location}
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
              Certifications
            </p>
            <div className="mt-5 space-y-4">
              {certifications.map((certificate) => (
                <div
                  key={certificate.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {certificate.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
