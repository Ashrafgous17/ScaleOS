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
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24"
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={p.highlight ? "" : "h-full"}>
            {/* Highlighted plan gets gradient border wrapper */}
            {p.highlight ? (
              <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[var(--brand)] via-[var(--brand-2)] to-[#8B5CF6]">
                <div className="relative rounded-3xl bg-[var(--bg)] p-7 shadow-glow overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 radial-glow opacity-35" />

                  <PlanHeader p={p} />
                  <PlanBody p={p} highlight />

                  <div className="relative mt-7 grid gap-3">
                    <a
                      href="#install"
                      className="shine inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium text-white
                      bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition focus-ring"
                    >
                      Install Growth Plan
                    </a>
                    <a
                      href="#audit"
                      className="shine inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium
                      border border-[var(--border)] text-[var(--text)] hover:bg-black/5 transition focus-ring"
                    >
                      Get a Free Growth Audit
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass shine rounded-3xl border border-[var(--border)] p-7 shadow-soft h-full transition hover:-translate-y-0.5">
                <PlanHeader p={p} />
                <PlanBody p={p} />

                <div className="mt-7 grid gap-3">
                  <a
                    href="#install"
                    className="shine inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium
                    border border-[var(--border)] text-[var(--text)] hover:bg-black/5 transition focus-ring"
                  >
                    Choose {p.name}
                  </a>
                  <a
                    href="#audit"
                    className="shine inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium
                    border border-[var(--border)] text-[var(--text)] hover:bg-black/5 transition focus-ring"
                  >
                    Get a Free Growth Audit
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 glass rounded-3xl border border-[var(--border)] p-7">
        <div className="text-sm font-semibold">What you actually get</div>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          A growth roadmap, funnel architecture, automation systems, and
          execution — aligned to revenue metrics like activation rate,
          trial-to-paid, retention, and LTV.
        </p>
      </div>
    </section>
  );
}

function PlanHeader({ p }: { p: Plan }) {
  return (
    <div className="relative">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-[var(--text-muted)]">{p.forWho}</div>
          <div className="mt-2 text-xl font-semibold">
            {p.highlight ? (
              <span className="grad-text-animate">{p.name}</span>
            ) : (
              p.name
            )}
          </div>
        </div>

        {p.highlight && (
          <span
            className="px-3 py-1 rounded-full text-xs border border-[color:rgba(79,70,229,0.35)]
            bg-[color:rgba(79,70,229,0.10)]"
          >
            Most popular
          </span>
        )}
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div className="text-3xl font-semibold">{p.price}</div>
      </div>

      <div className="mt-2 text-xs text-[var(--text-muted)]">
        3-month minimum • then monthly
      </div>
    </div>
  );
}

function PlanBody({ p, highlight }: { p: Plan; highlight?: boolean }) {
  return (
    <div className="relative mt-6">
      <ul className="space-y-3">
        {p.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 text-sm text-[var(--text-secondary)]"
          >
            <span
              className={[
                "mt-1 h-2 w-2 rounded-full",
                highlight
                  ? "bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow"
                  : "bg-[var(--success)]",
              ].join(" ")}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
