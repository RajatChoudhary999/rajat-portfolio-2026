export default function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base text-[var(--color-text-muted)] sm:text-lg">{copy}</p> : null}
    </div>
  );
}


