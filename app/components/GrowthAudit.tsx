"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  website: string;
  stage: string;
  goal: string;
};

const STAGES = [
  "Pre-launch",
  "Launched (early users)",
  "Growing (need predictable acquisition)",
  "Scaling (need conversion + retention)",
];

export default function GrowthAudit() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    stage: STAGES[1]!,
    goal: "",
  });

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.website.trim();
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    // Phase-4 default: no backend yet.
    // We'll just show "sent" and log payload so you can wire it later (API route, Sheets, HubSpot, etc.)
    setStatus("sending");
    try {
      console.log("Growth Audit Lead:", form);
      await new Promise((r) => setTimeout(r, 450));
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="audit"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
            Free Growth Audit
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
            Get a Growth OS audit for your SaaS
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            We’ll identify funnel leaks and opportunities across acquisition,
            activation, monetization, and retention — and send back a clear
            OS-style roadmap.
          </p>

          <div className="mt-6 grid gap-3">
            <Bullet>Trial → paid conversion opportunities</Bullet>
            <Bullet>Lifecycle flows + automation recommendations</Bullet>
            <Bullet>SEO + demand gen quick wins</Bullet>
            <Bullet>Offer/pricing page conversion improvements</Bullet>
          </div>

          <div className="mt-6 text-xs text-[var(--text-muted)]">
            No fluff. Actionable findings tied to metrics.
          </div>
        </div>

        <div className="glass rounded-2xl border border-[var(--border)] p-6 shadow-soft">
          <div className="text-sm font-semibold">Request your audit</div>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            We’ll reply within 24–48 hours with next steps.
          </p>

          <form onSubmit={onSubmit} className="mt-5 grid gap-4">
            <Field label="Your name">
              <input
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring"
                placeholder="Gouse Basha"
                required
              />
            </Field>

            <Field label="Work email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring"
                placeholder="you@company.com"
                required
              />
            </Field>

            <Field label="Website / product link">
              <input
                value={form.website}
                onChange={(e) => onChange("website", e.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring"
                placeholder="https://your-saas.com"
                required
              />
            </Field>

            <Field label="Company stage">
              <select
                value={form.stage}
                onChange={(e) => onChange("stage", e.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-[color:rgba(255,255,255,0.06)] px-4 py-3 text-sm text-[var(--text)] focus-ring"
              >
                {STAGES.map((s) => (
                  <option key={s} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Your #1 goal (optional)">
              <textarea
                value={form.goal}
                onChange={(e) => onChange("goal", e.target.value)}
                className="w-full min-h-[96px] rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring"
                placeholder="e.g. improve trial-to-paid, reduce churn, scale SEO, build lifecycle flows..."
              />
            </Field>

            <button
              type="submit"
              disabled={!canSubmit || status !== "idle"}
              className={[
                "inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium text-white transition focus-ring",
                !canSubmit || status !== "idle"
                  ? "opacity-60 cursor-not-allowed bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)]"
                  : "bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95",
              ].join(" ")}
            >
              {status === "idle" && "Request Free Audit"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Request received ✓"}
            </button>

            <div className="text-xs text-[var(--text-muted)]">
              By submitting, you agree to be contacted about the audit. No spam.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs text-[var(--text-secondary)]">{label}</span>
      {children}
    </label>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-sm text-[var(--text-secondary)]">
      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow" />
      <span>{children}</span>
    </div>
  );
}
