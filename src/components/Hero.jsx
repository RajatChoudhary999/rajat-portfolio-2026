import { profile, socials, stats } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
      <div>
        <Reveal>
          <span className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm text-[var(--color-text-muted)]">
            {profile.title} | {profile.location}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
            Building client-ready digital products across web, backend, and mobile.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-8 flex flex-wrap gap-3">
          {profile.roles.map((role) => (
            <span key={role} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white">
              {role}
            </span>
          ))}
        </Reveal>

        <Reveal delay={420} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-surface-900)] transition hover:-translate-y-0.5"
          >
            Explore work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/[0.12] px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]"
          >
            Hire for a project
          </a>
        </Reveal>

        <Reveal delay={520} className="mt-10 flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {social.label} / {social.value}
            </a>
          ))}
        </Reveal>
      </div>

      <Reveal delay={180} className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">Pitch Snapshot</p>
            <h2 className="mt-3 font-display text-3xl text-white">{profile.name}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{profile.summary}</p>
          </div>
          <div className="hidden h-14 w-14 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffe2a6,transparent_35%),linear-gradient(135deg,#f26838,#57c1b8)] md:block" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-black/[0.12] p-5">
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[rgba(255,186,73,0.3)] bg-[rgba(242,104,56,0.08)] p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">Client Fit</p>
          <p className="mt-3 text-base leading-7 text-white">
            {profile.availability}
          </p>
        </div>
      </Reveal>
    </section>
  );
}



