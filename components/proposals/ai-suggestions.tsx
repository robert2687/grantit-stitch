export function AISuggestions() {
  return (
    <section className="w-80 overflow-y-auto border-l border-outline-variant/10 bg-surface p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Improvement Suggestions
        </h3>
        <span className="rounded-full bg-tertiary-container px-2 py-0.5 text-[10px] font-bold text-on-tertiary-container">
          3 NEW
        </span>
      </div>

      <div className="space-y-6">
        {/* Suggestion 1 */}
        <div className="rounded-xl border border-outline-variant/5 bg-surface-container-lowest p-5 shadow-sm">
          <div className="mb-3 flex items-start gap-3">
            <span className="material-symbols-outlined text-lg text-secondary">
              lightbulb
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-primary-fixed">
                Clarify Scalability
              </h4>
              <p className="mt-1 text-xs text-on-primary-fixed-variant">
                The methodology section lacks specific metrics regarding the
                &ldquo;Global Synchronization&rdquo; phase.
              </p>
            </div>
          </div>
          <div className="mb-4 rounded-lg bg-surface-container-low p-3 text-[11px] italic leading-relaxed text-on-surface-variant">
            &ldquo;Suggest adding: &apos;The system is architected to handle up
            to 1.2M concurrent requests across 48 regional clusters...&apos;&rdquo;
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-lg bg-primary-container py-2 text-[10px] font-bold uppercase tracking-wider text-on-primary">
              Apply Fix
            </button>
            <button className="rounded-lg border border-outline-variant px-3 py-2 text-[10px] font-bold uppercase text-outline">
              Dismiss
            </button>
          </div>
        </div>

        {/* Suggestion 2 */}
        <div className="rounded-xl border border-outline-variant/5 bg-surface-container-lowest p-5 shadow-sm">
          <div className="mb-3 flex items-start gap-3">
            <span className="material-symbols-outlined text-lg text-on-tertiary-container">
              auto_fix_high
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-primary-fixed">
                Tone Adjustment
              </h4>
              <p className="mt-1 text-xs text-on-primary-fixed-variant">
                Change &ldquo;utilize&rdquo; to &ldquo;leverage&rdquo; for a
                more authoritative architectural tone.
              </p>
            </div>
          </div>
          <button className="w-full rounded-lg bg-surface-container-high py-2 text-[10px] font-bold uppercase tracking-wider text-on-primary-fixed">
            Rewrite Section
          </button>
        </div>

        {/* Reference Content Card */}
        <div className="group relative mt-8 overflow-hidden rounded-2xl bg-primary-container p-6">
          <div className="relative z-10">
            <h4 className="mb-2 text-sm font-bold text-on-primary">
              Grant Requirements
            </h4>
            <p className="mb-4 text-[11px] leading-relaxed text-on-primary/70">
              Section 4.b requires &ldquo;Explicit verification of data
              sovereignty protocols.&rdquo;
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-primary transition-all hover:gap-3"
            >
              View Full RFP
              <span className="material-symbols-outlined text-xs">
                arrow_forward
              </span>
            </a>
          </div>
          {/* Abstract Graphic */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-on-primary/5 blur-2xl transition-colors group-hover:bg-on-primary/10"></div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-12 border-t border-outline-variant/10 pt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase text-outline">
              Word Count
            </p>
            <p className="font-headline text-lg font-bold text-on-primary-fixed">
              842 / 1200
            </p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase text-outline">
              Time Spent
            </p>
            <p className="font-headline text-lg font-bold text-on-primary-fixed">
              4.2 hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
