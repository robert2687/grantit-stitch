export function ExplorerSidebar() {
  return (
    <aside className="col-span-12 space-y-6 lg:col-span-4">
      {/* Scanner Intelligence Card */}
      <div className="rounded-xl bg-primary-container p-6 text-on-primary">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-primary/60">
          Scanner Intelligence
        </h3>
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-headline text-3xl font-black">142</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                New Grants Analyzed
              </div>
            </div>
            <div className="text-right">
              <div className="font-headline text-xl font-bold text-tertiary-fixed">
                +12%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                Weekly Vol
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-on-primary/10">
            <div className="h-full w-3/4 bg-tertiary-fixed"></div>
          </div>
          <p className="text-[11px] font-medium leading-relaxed opacity-70">
            The AI model has flagged 3 critical opportunities matching your
            &ldquo;High Performance Compute&rdquo; profile in the last 4 hours.
          </p>
        </div>
      </div>

      {/* Recent Signals */}
      <div className="rounded-xl bg-surface-container-low p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Live Signals
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-error shadow-[0_0_8px_rgba(186,26,26,0.4)]"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">
                Deadline Alert: Quantum Init
              </p>
              <p className="mt-1 text-[10px] text-on-surface-variant">
                Proposal window closing in 48 hours. Eligibility confirmed.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-on-tertiary-container"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">
                New Funding Pool: OECD AI
              </p>
              <p className="mt-1 text-[10px] text-on-surface-variant">
                Multi-year initiative for global governance frameworks.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-secondary"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">
                Status Update: Horizon Europe
              </p>
              <p className="mt-1 text-[10px] text-on-surface-variant">
                Your preliminary score increased to 92% after new CV upload.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full rounded-lg border border-outline-variant/30 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-surface-container-highest">
          View Signal History
        </button>
      </div>

      {/* Quick Stats */}
      <div className="rounded-xl bg-surface-container-lowest p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Your Profile Match
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              High Fits
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">
              23
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Bookmarked
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">
              12
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Applied
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">8</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Pending
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">5</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
