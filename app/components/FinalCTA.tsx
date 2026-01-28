export default function FinalCTA() {
  return (
    <section className="container mx-auto px-5 sm:px-6 lg:px-8 pb-20">
      <div className="rounded-2xl border border-[var(--border)] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] opacity-90" />
        <div className="absolute inset-0 radial-glow opacity-70" />

        <div className="relative p-6 md:p-10">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white max-w-3xl">
            Ready to install your Growth Operating System?
          </h3>
          <p className="mt-4 text-white/80 max-w-2xl">
            Stop running random campaigns. Build a unified revenue system that
            turns traffic into trials, trials into paid users, and paid users
            into long-term retention.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#install"
              className="inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium bg-black/30 border border-white/20 text-white hover:bg-black/40 transition"
            >
              Install Growth OS
            </a>
            <a
              href="#audit"
              className="inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium bg-white text-black hover:opacity-95 transition"
            >
              Get a Free Growth Audit
            </a>
          </div>

          <div className="mt-6 text-xs text-white/70">
            Flat monthly • 3-month minimum • system-first growth • automation
            included
          </div>
        </div>
      </div>
    </section>
  );
}
