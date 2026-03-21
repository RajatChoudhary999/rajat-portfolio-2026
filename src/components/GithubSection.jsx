import { featuredProjects, socials } from "@/data/portfolio";
import { useGithubData } from "@/hooks/useGithubData";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

function repoDescription(repo) {
  const localProject = featuredProjects.find(
    (project) => project.name === repo.name,
  );
  return (
    repo.description ||
    localProject?.summary ||
    "Repository from Rajat's public GitHub profile."
  );
}

function repoMeta(repo) {
  if (repo.stargazers_count && repo.stargazers_count > 0) {
    return `${repo.stargazers_count} stars`;
  }

  if (repo.updated_at) {
    return `Updated ${new Date(repo.updated_at).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })}`;
  }

  return "Featured";
}

export default function GithubSection() {
  const github = socials.find((social) => social.label === "GitHub");
  const username = github.value.replace("@", "");
  const { profile, repos, loading, error } = useGithubData(username);

  return (
    <section id="github" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionTitle eyebrow="GitHub" title="Repositories, activity, and public proof of work." />
      </Reveal>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Reveal className="glass-panel rounded-[2rem] p-7 lg:sticky lg:top-24">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
            Profile
          </p>
          {loading ? (
            <p className="mt-4 text-[var(--color-text-muted)]">
              Loading GitHub profile...
            </p>
          ) : error ? (
            <p className="mt-4 text-[var(--color-text-muted)]">{error}</p>
          ) : (
            <>
              <h3 className="mt-4 font-display text-3xl text-white">
                {profile?.name || username}
              </h3>
              <p className="mt-2 text-base text-white/[0.84]">
                {profile?.bio || "Full Stack Software Engineer"}
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold text-white">
                    {profile?.public_repos ?? 0}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Public repositories
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold text-white">
                    {profile?.followers ?? 0}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Followers
                  </p>
                </div>
              </div>
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Open GitHub
              </a>
            </>
          )}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {(repos.length ? repos : featuredProjects)
            .slice(0, 6)
            .map((repo, index) => (
              <Reveal
                key={repo.name}
                delay={index * 90}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {repo.name}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-accent-soft)]">
                    {repoMeta(repo)}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                  {repoDescription(repo)}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm text-[var(--color-text-muted)]">
                  <span>
                    {repo.language || repo.stack?.[0] || "Repository"}
                  </span>
                  <a
                    href={repo.html_url || repo.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition hover:text-[var(--color-accent)]"
                  >
                    Explore
                  </a>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
