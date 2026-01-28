import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[var(--bg)] bg-grid">
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full radial-glow blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-32 -left-40 h-[28rem] w-[28rem] rounded-full radial-glow blur-3xl opacity-40" />
      <div className="pointer-events-none absolute top-32 -right-40 h-[28rem] w-[28rem] rounded-full radial-glow blur-3xl opacity-40" />

      <Navbar />

      <section className="container mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[var(--text-secondary)] mx-auto">
          <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
          Growth infrastructure for SaaS & Micro-SaaS
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Install a <span className="grad-text">Growth Operating System</span>{" "}
          in your SaaS
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          From first click → free trial → paid user → retention → expansion. We
          build <span className="text-[var(--text)]">revenue systems</span>, not
          campaigns.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#install"
            className="inline-flex justify-center items-center px-7 py-3.5 rounded-2xl text-sm font-medium text-white 
            bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition focus-ring"
          >
            Install Growth OS
          </a>

          <a
            href="#audit"
            className="inline-flex justify-center items-center px-7 py-3.5 rounded-2xl text-sm font-medium 
            border border-[var(--border)] text-[var(--text)] hover:bg-black/5 transition focus-ring"
          >
            Get a Free Growth Audit
          </a>
        </div>

        {/* Trust microcopy */}
        <div className="mt-8 text-xs text-[var(--text-muted)]">
          Flat monthly pricing • System-first growth • Automation included • No
          long-term lock-ins
        </div>

        {/* Feature chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-[var(--text-muted)]">
          {[
            "SEO + Content",
            "Demand Generation",
            "Google Ads",
            "Lifecycle Email",
            "Marketing Automation",
            "Trial → Paid",
            "Retention Systems",
          ].map((t) => (
            <span key={t} className="glass px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
