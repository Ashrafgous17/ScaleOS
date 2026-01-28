const steps = [
  {
    title: "Diagnose",
    desc: "We map your funnel, identify leaks, and audit acquisition, activation, and lifecycle.",
  },
  {
    title: "Design",
    desc: "We architect your Growth OS: journeys, automation, offers, and conversion paths.",
  },
  {
    title: "Install",
    desc: "We implement funnels, flows, tracking, CRM, email systems, and dashboards.",
  },
  {
    title: "Optimize",
    desc: "We improve conversion, activation, retention, and CAC/LTV with systematic experiments.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="how-it-works"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          How ScaleOS works
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          Install the system first, then compound growth through continuous
          optimization.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className="glass rounded-2xl border border-[var(--border)] p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{s.title}</div>
              <div className="text-xs text-[var(--text-muted)]">0{idx + 1}</div>
            </div>

            <div className="mt-3 text-xs text-[var(--text-secondary)]">
              {s.desc}
            </div>

            <div className="mt-5 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]"
                style={{ width: `${(idx + 1) * 25}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
