export function ProposalHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-background/80 px-8 font-headline text-lg font-semibold text-on-primary-fixed backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button className="p-2 transition-opacity hover:opacity-80">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="font-black tracking-tight">
          Grant Explorer{" "}
          <span className="mx-2 text-outline-variant/40">|</span>{" "}
          <span className="text-base font-medium text-on-primary-fixed-variant">
            Proposal Studio
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center rounded-full border border-outline-variant/10 bg-surface-container-low px-4 py-1.5">
          <span className="font-label mr-3 text-xs uppercase tracking-widest text-on-primary-fixed-variant">
            Draft Status:
          </span>
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 text-[10px] font-bold text-on-secondary-fixed-variant">
            IN REVIEW
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-on-primary-fixed-variant">
              notifications
            </span>
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-xs font-bold text-on-primary">
            EV
          </div>
        </div>
      </div>
    </header>
  );
}
