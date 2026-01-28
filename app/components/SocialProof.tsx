export default function SocialProof() {
  return (
    <section className="container mx-auto px-5 sm:px-6 lg:px-8 -mt-8 pb-10">
      <div className="glass rounded-2xl border border-[var(--border)] px-6 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--text-secondary)]">
            Trusted by founders building the next generation of SaaS{" "}
            <span className="text-[var(--text-muted)]">
              (logos coming soon)
            </span>
          </p>

          <div className="flex flex-wrap gap-2">
            {["B2B SaaS", "Micro-SaaS", "AI SaaS", "Dev Tools", "API SaaS"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-[var(--border)] bg-white/5 text-xs text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-xl border border-[var(--border)] bg-white/5 flex items-center justify-center text-xs text-[var(--text-muted)]"
            >
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
