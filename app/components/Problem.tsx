const pains = [
  "Disconnected channels with no system",
  "Low trial-to-paid conversion",
  "Leads not nurtured → revenue lost",
  "No lifecycle automation or scoring",
  "Churn and weak retention loops",
  "Unclear funnel leaks & attribution",
];

export default function Problem() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="problem"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          SaaS doesn’t fail because of bad products.
          <span className="block text-[var(--text-secondary)] mt-2">
            It fails because of broken growth systems.
          </span>
        </h2>

        <p className="mt-4 text-[var(--text-secondary)]">
          You don’t have a marketing problem. You have a systems problem —
          fragmented acquisition, weak activation, missing automation, and leaky
          conversion paths.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p) => (
          <div
            key={p}
            className="glass rounded-2xl border border-[var(--border)] p-5"
          >
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/5 border border-[var(--border)] flex items-center justify-center">
                <span className="text-sm">✦</span>
              </div>

              <div>
                <div className="text-sm font-medium">{p}</div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  ScaleOS maps the leak, installs the fix, and automates the
                  journey.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
