const systems = [
  {
    title: "Growth Foundation",
    desc: "ICP, positioning, messaging, funnel map, offer architecture.",
  },
  {
    title: "Acquisition Engine",
    desc: "SEO, content systems, demand gen, Google Ads, landing pages.",
  },
  {
    title: "Activation Engine",
    desc: "Onboarding, trial journeys, nudges, product-led activation loops.",
  },
  {
    title: "Monetization Engine",
    desc: "Trial → paid flows, pricing optimization, upgrade journeys.",
  },
  {
    title: "Retention Engine",
    desc: "Lifecycle email, churn prevention, re-engagement, expansion.",
  },
  {
    title: "Automation Layer",
    desc: "CRM, scoring, segmentation, event triggers, dashboards.",
  },
];

export default function Solution() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="systems"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow" />
            The ScaleOS System
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
            We install a complete{" "}
            <span className="grad-text">Growth Operating System</span>
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            Not campaigns. Not random tasks. A unified revenue machine that
            connects acquisition → activation → monetization → retention —
            powered by automation.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition"
            >
              See Pricing
            </a>
            <a
              href="#audit"
              className="inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:bg-white/5 transition"
            >
              Get a Free Audit
            </a>
          </div>

          <div className="mt-7 text-xs text-[var(--text-muted)]">
            You get one unified system: traffic → trial → paid → retention —
            with automation doing the heavy lifting.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {systems.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl border border-[var(--border)] p-5"
            >
              <div className="text-sm font-medium">{s.title}</div>
              <div className="mt-2 text-xs text-[var(--text-secondary)]">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
