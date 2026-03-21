import { featuredProjects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that connect backend depth with product execution."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.name} delay={index * 120} className="project-card rounded-[2rem] p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">Featured Repository</p>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-sm text-white transition hover:text-[var(--color-accent)]">
                View repo
              </a>
            </div>
            <h3 className="mt-5 font-display text-3xl text-white">{project.label}</h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/[0.84]">
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
