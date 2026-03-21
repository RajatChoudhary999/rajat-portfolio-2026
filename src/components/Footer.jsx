import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 pt-4 text-sm text-[var(--color-text-muted)] sm:px-8">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} | Full Stack Software Engineer</p>
        <p>React, Node.js, TypeScript, React Native, AWS.</p>
      </div>
    </footer>
  );
}



