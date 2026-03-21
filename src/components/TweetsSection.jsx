import { socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import XTimeline from "@/components/XTimeline";

export default function TweetsSection() {
  const twitter = socials.find((social) => social.label === "X");
  const username = twitter.value.replace("@", "");

  return (
    <section id="tweets" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle eyebrow="Tweets" title="Live posts, reactions, and public activity on X." />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <Reveal className="glass-panel rounded-[2rem] p-7 lg:sticky lg:top-24">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">X Profile</p>
          <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl text-white">
            X
          </div>
          <a
            href={twitter.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-surface-900)] transition hover:-translate-y-0.5"
          >
            Open X
          </a>
        </Reveal>

        <Reveal delay={120} className="glass-panel min-h-[720px] rounded-[2rem] p-4 sm:p-6">
          <XTimeline username={username} profileUrl={twitter.href} />
        </Reveal>
      </div>
    </section>
  );
}
