type Plan = {
  name: string;
  price: string;
  forWho: string;
  bullets: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Launch",
    price: "$1.5K–$2.5K/mo",
    forWho: "Early-stage Micro-SaaS / Bootstrapped SaaS",
    bullets: [
      "Growth foundation + funnel map",
      "Core SEO + content system setup",
      "Trial onboarding + activation emails",
      "Basic trial → paid flow",
      "Light automation + dashboard basics",
    ],
  },
  {
    name: "Growth",
    price: "$3.5K–$5.5K/mo",
    forWho: "SaaS ready to scale acquisition + conversions",
    highlight: true,
    bullets: [
      "SEO + demand gen content engine",
      "Google Search Ads + landing pages",
      "Full lifecycle email system",
      "CRM + segmentation + lead scoring",
      "CRO + experiments + dashboards",
    ],
  },
  {
    name: "Scale",
    price: "$6K–$10K/mo",
    forWho: "Serious growth teams / expansion stage SaaS",
    bullets: [
      "Dedicated growth lead",
      "Advanced funnels + attribution thinking",
      "Retention engineering + churn prevention",
      "Expansion / upsell systems",
      "Experimentation engine + ops layer",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="pricing"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Flat monthly pricing.
          <span className="block text-[var(--text-secondary)] mt-2">
            Choose the plan that fits your stage.
          </span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          No hourly billing. No per-channel retainers. One system, one roadmap,
          one execution engine.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-2xl border p-6 shadow-soft",
              p.highlight
                ? "border-[color:rgba(79,70,229,0.40)] bg-[color:rgba(79,70,229,0.10)]"
                : "border-[var(--border)] glass",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {p.forWho}
                </div>
              </div>
              {p.highlight && (
                <span className="px-2.5 py-1 rounded-full text-xs border border-[color:rgba(79,70,229,0.45)] bg-white/5">
                  Most popular
                </span>
              )}
            </div>

            <div className="mt-5 text-2xl font-semibold">{p.price}</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">
              3-month minimum • then monthly
            </div>

            <ul className="mt-5 space-y-3">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#install"
                className={[
                  "inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium transition",
                  p.highlight
                    ? "text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95"
                    : "border border-[var(--border)] text-[var(--text)] hover:bg-white/5",
                ].join(" ")}
              >
                {p.highlight ? "Install Growth Plan" : `Choose ${p.name}`}
              </a>

              <a
                href="#audit"
                className="inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:bg-white/5 transition"
              >
                Get a Free Growth Audit
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl border border-[var(--border)] p-6">
        <div className="text-sm font-medium">What you actually get</div>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          A growth roadmap, funnel architecture, automation systems, and
          execution — aligned to revenue metrics like activation rate,
          trial-to-paid, retention, and LTV.
        </p>
      </div>
    </section>
  );
}
