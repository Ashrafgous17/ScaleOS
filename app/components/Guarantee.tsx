export default function Guarantee() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="guarantee"
    >
      <div className="glass rounded-2xl border border-[var(--border)] p-6 md:p-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 radial-glow opacity-50" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-white/5 text-xs text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
            Risk reversal
          </div>

          <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            If we don’t deliver a clear Growth OS roadmap in 30 days —
            <span className="block text-[var(--text-secondary)] mt-2">
              you don’t pay the full fee.
            </span>
          </h3>

          <p className="mt-4 text-[var(--text-secondary)] max-w-3xl">
            You’ll see exactly what we’re building: funnel map, lifecycle
            journeys, automation plan, acquisition strategy, and the execution
            roadmap tied to conversion + retention metrics.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#audit"
              className="inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition"
            >
              Get a Free Growth Audit
            </a>
            <a
              href="#install"
              className="inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:bg-white/5 transition"
            >
              Install Growth OS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
