import { navigation, profile } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(15,13,11,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-xl text-white">
          Rajat<span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--color-text-muted)] transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] hover:text-[var(--color-surface-900)]"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
