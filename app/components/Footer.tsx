export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-semibold">ScaleOS</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">
              Growth infrastructure for SaaS — from first click to recurring
              revenue.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
            <a
              className="hover:text-[var(--text)] transition"
              href="#how-it-works"
            >
              How it works
            </a>
            <a className="hover:text-[var(--text)] transition" href="#systems">
              Systems
            </a>
            <a className="hover:text-[var(--text)] transition" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-[var(--text)] transition" href="#audit">
              Audit
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} ScaleOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
