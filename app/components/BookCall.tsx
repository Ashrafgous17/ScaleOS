export default function BookCall() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="book"
    >
      <div className="glass rounded-2xl border border-[var(--border)] p-6 md:p-10 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full radial-glow blur-2xl opacity-60" />

        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Prefer a quick call?
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              We’ll review your funnel, trial experience, and lifecycle
              opportunities — then share the fastest path to install your Growth
              OS.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-[var(--text-secondary)]">
              <Line>15–25 min call</Line>
              <Line>Funnel + lifecycle review</Line>
              <Line>Action plan + next steps</Line>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white/5 p-6">
            <div className="text-sm font-semibold">Book a call</div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Paste your Calendly link here later. For now, this CTA can go to
              your contact page.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition focus-ring"
              >
                Book a Call
              </a>
              <a
                href="#audit"
                className="inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:bg-white/5 transition focus-ring"
              >
                Or Request the Free Audit
              </a>
            </div>

            <div className="mt-4 text-xs text-[var(--text-muted)]">
              Tip: add your Calendly URL to this button in Phase 5.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--success)]" />
      <span>{children}</span>
    </div>
  );
}
