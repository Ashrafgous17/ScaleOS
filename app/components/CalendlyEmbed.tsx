export default function CalendlyEmbed() {
  // Replace with your real Calendly URL when ready
  const calendlyUrl = "https://calendly.com/your-link/intro-call";

  return (
    <section
      className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24"
      id="book"
    >
      <div className="glass rounded-3xl border border-[var(--border)] p-6 md:p-10 overflow-hidden">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Book a call
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            15–25 minutes. We’ll review your funnel and share a simple Growth OS
            plan.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white/5 overflow-hidden">
          <iframe
            title="Calendly Booking"
            src={calendlyUrl}
            className="w-full h-[760px] md:h-[720px]"
            frameBorder={0}
          />
        </div>

        <div className="mt-4 text-xs text-[var(--text-muted)]">
          If the embed looks empty, replace the Calendly URL with your real
          scheduling link.
        </div>
      </div>
    </section>
  );
}
