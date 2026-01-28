"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  website: string;
  stage: string;
  goal: string;
};

type Errors = Partial<Record<keyof FormState, string>> & { form?: string };

const STAGES = [
  "Pre-launch",
  "Launched (early users)",
  "Growing (need predictable acquisition)",
  "Scaling (need conversion + retention)",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidUrl(url: string) {
  try {
    const u = new URL(url.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function GrowthAudit() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    stage: STAGES[1]!,
    goal: "",
  });

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined, form: undefined }));
  }

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidEmail(form.email) &&
      isValidUrl(form.website) &&
      !!form.stage.trim()
    );
  }, [form]);

  function validate(): Errors {
    const e: Errors = {};

    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!isValidEmail(form.email))
      e.email = "Please enter a valid email address.";
    if (!isValidUrl(form.website))
      e.website = "Please enter a valid website URL (https://...).";
    if (!form.stage.trim()) e.stage = "Please select your company stage.";

    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;

    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("idle");
        setErrors({
          form: data?.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ form: "Network error. Please try again." });
    }
  }

  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24"
      id="audit"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
            Free Growth Audit
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
            Get a Growth OS audit for your SaaS
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            We’ll identify funnel leaks and opportunities across acquisition,
            activation, monetization, and retention — and send back a clear
            OS-style roadmap.
          </p>

          <div className="mt-7 grid gap-3">
            <Bullet>Trial → paid conversion opportunities</Bullet>
            <Bullet>Lifecycle flows + automation recommendations</Bullet>
            <Bullet>SEO + demand gen quick wins</Bullet>
            <Bullet>Offer/pricing page conversion improvements</Bullet>
          </div>

          <div className="mt-6 text-xs text-[var(--text-muted)]">
            Required fields: name, email, website, stage.
          </div>
        </div>

        <div className="glass rounded-3xl border border-[var(--border)] p-7 shadow-soft">
          <div className="text-sm font-semibold">Request your audit</div>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            We’ll reply within 24–48 hours with next steps.
          </p>

          {errors.form && (
            <div className="mt-5 rounded-2xl border border-[color:rgba(239,68,68,0.35)] bg-[color:rgba(239,68,68,0.08)] px-4 py-3 text-sm text-[var(--text)]">
              {errors.form}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
            <Field label="Your name" required error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                className={inputClass(!!errors.name)}
                placeholder="Gouse Basha"
                autoComplete="name"
                required
              />
            </Field>

            <Field label="Work email" required error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                className={inputClass(!!errors.email)}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </Field>

            <Field
              label="Website / product link"
              required
              error={errors.website}
            >
              <input
                value={form.website}
                onChange={(e) => onChange("website", e.target.value)}
                className={inputClass(!!errors.website)}
                placeholder="https://your-saas.com"
                required
              />
            </Field>

            <Field label="Company stage" required error={errors.stage}>
              <select
                value={form.stage}
                onChange={(e) => onChange("stage", e.target.value)}
                className={selectClass(!!errors.stage)}
                required
              >
                {STAGES.map((s) => (
                  <option key={s} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Your #1 goal (optional)" error={errors.goal}>
              <textarea
                value={form.goal}
                onChange={(e) => onChange("goal", e.target.value)}
                className={textareaClass(false)}
                placeholder="e.g. improve trial-to-paid, reduce churn, scale SEO, build lifecycle flows..."
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={[
                "shine inline-flex justify-center items-center px-6 py-3 rounded-2xl text-sm font-medium text-white transition focus-ring cursor-pointer",
                status !== "idle"
                  ? "opacity-60 cursor-not-allowed bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)]"
                  : "bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95",
              ].join(" ")}
            >
              {status === "idle" && "Request Free Audit"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Request received ✓"}
            </button>
            {status === "idle" && !canSubmit && (
              <div className="text-xs text-[var(--text-muted)]">
                Fill in <span className="text-[var(--text)]">name</span>,{" "}
                <span className="text-[var(--text)]">email</span>,{" "}
                <span className="text-[var(--text)]">website</span>, and{" "}
                <span className="text-[var(--text)]">stage</span> to submit.
              </div>
            )}
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
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs text-[var(--text-secondary)]">
        {label}{" "}
        {required ? (
          <span className="text-[color:rgba(239,68,68,0.9)]">*</span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="text-xs text-[color:rgba(239,68,68,0.95)]">
          {error}
        </span>
      ) : null}
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

function inputClass(error: boolean) {
  return [
    "w-full rounded-2xl border px-4 py-3 text-sm bg-white/5 text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring",
    error ? "border-[color:rgba(239,68,68,0.45)]" : "border-[var(--border)]",
  ].join(" ");
}

function selectClass(error: boolean) {
  return [
    "w-full rounded-2xl border px-4 py-3 text-sm bg-[color:rgba(255,255,255,0.70)] text-[var(--text)] focus-ring",
    error ? "border-[color:rgba(239,68,68,0.45)]" : "border-[var(--border)]",
  ].join(" ");
}

function textareaClass(error: boolean) {
  return [
    "w-full min-h-[96px] rounded-2xl border px-4 py-3 text-sm bg-white/5 text-[var(--text)] placeholder:text-[var(--text-muted)] focus-ring",
    error ? "border-[color:rgba(239,68,68,0.45)]" : "border-[var(--border)]",
  ].join(" ");
}
