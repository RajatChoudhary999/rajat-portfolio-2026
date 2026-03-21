import { socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.09 3.3 9.4 7.88 10.92.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.21.7-3.89-1.37-3.89-1.37-.52-1.35-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.76 1.19 1.76 1.19 1.02 1.77 2.68 1.26 3.33.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.29-5.25-5.72 0-1.27.45-2.31 1.18-3.13-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0c2.19-1.5 3.15-1.19 3.15-1.19.63 1.6.24 2.78.12 3.07.73.82 1.18 1.86 1.18 3.13 0 4.44-2.69 5.43-5.26 5.72.41.35.78 1.03.78 2.09 0 1.51-.01 2.72-.01 3.09 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.78 2.65 4.78 6.09V21h-4v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94V21h-4Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.25-8.28L.8 2h6.4l4.43 5.85L18.9 2Zm-1.1 18h1.72L6.27 3.9H4.42Z" />
    </svg>
  );
}

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
};

const accentMap = {
  GitHub: "from-white/[0.16] to-white/[0.03]",
  LinkedIn: "from-sky-400/[0.24] to-white/[0.03]",
  X: "from-[rgba(255,186,73,0.24)] to-white/[0.03]",
};

export default function SocialSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle eyebrow="Social Presence" title="Across code, network, and conversation." />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {socials.map((social, index) => {
          const Icon = iconMap[social.label];

          return (
            <Reveal
              key={social.label}
              delay={index * 100}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${accentMap[social.label]} p-7 transition duration-300 hover:-translate-y-1`}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/[0.08] blur-2xl transition duration-300 group-hover:scale-125" />
              <div className="relative flex min-h-[220px] flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl border border-white/10 bg-black/[0.18] p-4 text-white">
                    <Icon />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    {social.label}
                  </span>
                </div>

                <div>
                  <div className="h-px w-16 bg-white/20" />
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-3 text-lg font-semibold text-white transition group-hover:text-[var(--color-accent)]"
                  >
                    Open profile
                    <span className="text-2xl">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
