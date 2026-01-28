"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is ScaleOS an agency?",
    a: "Not in the traditional sense. We don’t just run campaigns — we install a Growth Operating System: acquisition, activation, monetization, retention, and automation working together.",
  },
  {
    q: "How fast can we see results?",
    a: "You’ll get a clear Growth OS roadmap within 30 days. Activation and trial-to-paid improvements often show early; SEO and demand generation compound over time.",
  },
  {
    q: "Do you work with any SaaS?",
    a: "We fit best with B2B SaaS, Micro-SaaS, AI SaaS, dev tools, and product-led models with free trial or freemium motion.",
  },
  {
    q: "What tools do you support?",
    a: "We can work with common stacks like HubSpot, Customer.io, Mailchimp, PostHog, GA4, Segment, Zapier/Make, and your existing CRM/email stack.",
  },
  {
    q: "Do you do one-off projects?",
    a: "ScaleOS is designed as system installation + optimization, so we typically work on a flat monthly plan with a 3-month minimum to create compounding results.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24"
      id="faq"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          FAQ
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          Quick answers before you request the audit or book a call.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;

          return (
            <div
              key={f.q}
              className={[
                "glass rounded-2xl border border-[var(--border)] overflow-hidden transition",
                isOpen ? "shadow-soft" : "",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-6
                  hover:bg-black/5 transition focus-ring cursor-pointer"
              >
                <span className="text-sm md:text-base font-medium">{f.q}</span>

                <span className="shrink-0 h-9 w-9 rounded-xl border border-[var(--border)] bg-white/5 flex items-center justify-center">
                  <span className="text-sm text-[var(--text-secondary)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </span>
              </button>

              <div
                className="px-6 overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                style={{
                  maxHeight: isOpen ? 220 : 0,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {f.a}
                </div>
              </div>

              {isOpen && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[var(--border)]" />
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#audit"
                      className="shine inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium
                      text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition focus-ring"
                    >
                      Get a Free Growth Audit
                    </a>
                    <a
                      href="#pricing"
                      className="shine inline-flex justify-center items-center px-5 py-3 rounded-2xl text-sm font-medium
                      border border-[var(--border)] text-[var(--text)] hover:bg-black/5 transition focus-ring"
                    >
                      View Pricing
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
