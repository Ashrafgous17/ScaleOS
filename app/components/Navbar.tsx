"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Systems", href: "#systems" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[color:rgba(248,250,252,0.85)] backdrop-blur border-b border-[var(--border)]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow" />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">ScaleOS</div>
              <div className="text-xs text-[var(--text-muted)] -mt-0.5">
                Growth OS for SaaS
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--text-secondary)]">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-[var(--text)] transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#audit"
              className="px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-[var(--text)] hover:bg-white/5 transition"
            >
              Get a Growth Audit
            </a>
            <a
              href="#install"
              className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition"
            >
              Install Growth OS
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-[var(--border)] hover:bg-white/5 transition"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-4 space-y-3">
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 px-2 rounded-lg hover:bg-white/5 hover:text-[var(--text)] transition"
                  >
                    {n.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="#audit"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-[var(--text)] hover:bg-white/5 transition"
                >
                  Growth Audit
                </a>
                <a
                  href="#install"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition"
                >
                  Install
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
