import { profile, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(242,104,56,0.16),rgba(87,193,184,0.16))] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">Contact</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          Need a full stack engineer who can move from product idea to shipped system?
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.84]">
          Rajat is positioned for full stack, frontend, backend, and mobile engagements. The portfolio is designed to support direct outreach from clients, founders, and hiring teams.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-white px-6 py-3 font-semibold text-[var(--color-surface-900)] transition hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Download resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/[0.84]">
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}



