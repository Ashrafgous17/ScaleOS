"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is ScaleOS an agency?",
    a: "Not in the traditional sense. We don’t just run campaigns — we install a Growth Operating System: acquisition, activation, monetization, retention, and automation working together.",
  },
  {
    q: "How fast can we see results?",
    a: "We typically deliver a clear roadmap within 30 days and start implementing immediately. Improvements to activation/trial-to-paid can happen quickly; SEO/demand gen compounds over time.",
  },
  {
    q: "Do you work with any SaaS?",
    a: "We fit best with B2B SaaS, Micro-SaaS, AI SaaS, Dev tools, and product-led models with a free trial or freemium motion.",
  },
  {
    q: "What tools do you support?",
    a: "We can work with common stacks like HubSpot, Mailchimp, Customer.io, Klaviyo (for SaaS), PostHog, GA4, Segment, Zapier/Make, and your existing CRM/email stack.",
  },
  {
    q: "Do you do one-off projects?",
    a: "ScaleOS is designed as a system install + optimization model, so we usually work on a flat monthly plan (3-month minimum) to create compounding results.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20"
      id="faq"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          FAQ
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          Quick answers before you book or request the audit.
        </p>
      </div>

      <div className="mt-10 glass rounded-2xl border border-[var(--border)] overflow-hidden">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={f.q}
              className="border-t first:border-t-0 border-[var(--border)]"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/5 transition focus-ring"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium">{f.q}</span>
                <span className="text-sm text-[var(--text-muted)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-[var(--text-secondary)]">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
