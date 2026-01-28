export default function OSCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 blur-2xl opacity-60 radial-glow" />

      <div className="glass rounded-2xl border border-[var(--border)] shadow-soft p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">ScaleOS</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">
              Revenue system map
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs border border-[var(--border)] bg-white/5 text-[var(--text-secondary)]">
            Live
          </span>
        </div>

        <div className="mt-5 grid gap-3">
          <Row title="Acquisition" meta="SEO • Content • Ads" />
          <Row title="Activation" meta="Onboarding • Nudges" />
          <Row title="Monetization" meta="Trial → Paid • Pricing" />
          <Row title="Retention" meta="Lifecycle • Churn Prevention" />
          <Row title="Automation" meta="CRM • Scoring • Segments" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <MiniStat label="Activation" value="+18%" />
          <MiniStat label="Trial → Paid" value="+12%" />
          <MiniStat label="Churn" value="↓ 9%" />
        </div>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-white/5 p-4">
          <div className="text-xs text-[var(--text-muted)]">Outcome</div>
          <div className="mt-1 text-sm text-[var(--text-secondary)]">
            A unified funnel that compounds: traffic → trials → revenue →
            retention.
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow" />
        <span className="text-sm">{title}</span>
      </div>
      <span className="text-xs text-[var(--text-muted)]">{meta}</span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white/5 p-3">
      <div className="text-xs text-[var(--text-muted)]">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
