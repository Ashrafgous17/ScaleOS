const rows = [
  { a: "Channel-focused delivery", b: "System-focused revenue infrastructure" },
  { a: "Campaigns & tasks", b: "Growth engines & automation" },
  {
    a: "Disconnected efforts",
    b: "Unified funnel (traffic → trial → paid → retention)",
  },
  {
    a: "Output-driven reporting",
    b: "Outcome-driven optimization (activation, conversion, retention)",
  },
  { a: "Short-term spikes", b: "Compounding growth over time" },
];

export default function Differentiation() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24"
      id="differentiation"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Old marketing vs{" "}
          <span className="grad-text-animate">Growth Infrastructure</span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          This isn’t agency marketing. This is system engineering for SaaS
          growth.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Typical agencies */}
        <div className="glass rounded-3xl border border-[var(--border)] p-6">
          <div className="mb-5">
            <div className="text-xs text-[var(--text-muted)]">
              Traditional model
            </div>
            <div className="text-lg font-semibold">Typical Agencies</div>
          </div>

          <div className="grid gap-4">
            {rows.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border)] bg-white/5 p-4"
              >
                <div className="text-sm text-[var(--text-secondary)]">
                  {r.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ScaleOS */}
        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[var(--brand)] via-[var(--brand-2)] to-[#8B5CF6]">
          <div className="relative rounded-3xl bg-[var(--bg)] p-6 shadow-glow">
            <div className="pointer-events-none absolute inset-0 radial-glow opacity-40 rounded-3xl" />

            <div className="relative mb-5">
              <div className="text-xs text-[var(--text-muted)]">
                Growth OS model
              </div>
              <div className="text-lg font-semibold">
                <span className="grad-text-animate">ScaleOS</span>
              </div>
            </div>

            <div className="relative grid gap-4">
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[color:rgba(79,70,229,0.25)]
                  bg-gradient-to-br from-[color:rgba(79,70,229,0.10)] to-[color:rgba(6,182,212,0.10)]
                  p-4"
                >
                  <div className="text-sm font-medium text-[var(--text)]">
                    {r.b}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="relative mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-[color:rgba(79,70,229,0.35)]
              bg-[color:rgba(79,70,229,0.10)] text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)]" />
              System-first growth model
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-[var(--text-muted)]">
        Campaigns create spikes. Systems create compounding growth.
      </div>
    </section>
  );
}
