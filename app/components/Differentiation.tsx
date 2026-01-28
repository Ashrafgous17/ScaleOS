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
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="differentiation"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Agencies run campaigns.
          <span className="block text-[var(--text-secondary)] mt-2">
            We build growth infrastructure.
          </span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          ScaleOS is not “marketing help.” It’s a complete Growth Operating
          System installed inside your SaaS.
        </p>
      </div>

      <div className="mt-10 glass rounded-2xl border border-[var(--border)] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[var(--border)] bg-white/5">
            <div className="text-xs text-[var(--text-muted)]">
              Typical agencies
            </div>
            <div className="mt-1 text-lg font-semibold">Campaign delivery</div>
          </div>
          <div className="p-5 md:p-6 bg-[color:rgba(79,70,229,0.10)]">
            <div className="text-xs text-[var(--text-muted)]">ScaleOS</div>
            <div className="mt-1 text-lg font-semibold">
              <span className="grad-text">Growth Operating System</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {rows.map((r, i) => (
            <div key={i} className="grid md:grid-cols-2">
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[var(--border)]">
                <div className="text-sm text-[var(--text-secondary)]">
                  {r.a}
                </div>
              </div>
              <div className="p-5 md:p-6 bg-white/5">
                <div className="text-sm text-[var(--text)]">{r.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
