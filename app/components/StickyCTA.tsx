export default function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-3">
      <div className="glass border border-[var(--border)] rounded-2xl p-2 shadow-soft">
        <div className="flex gap-2">
          <a
            href="#audit"
            className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:bg-white/5 transition"
          >
            Free Audit
          </a>
          <a
            href="#install"
            className="flex-1 text-center px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow hover:opacity-95 transition"
          >
            Install
          </a>
        </div>
      </div>
    </div>
  );
}
