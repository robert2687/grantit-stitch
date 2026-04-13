export function ReadinessHero() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Readiness Score */}
      <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-primary-container p-8 text-on-primary md:col-span-8">
        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-primary-container">
            Submission Readiness Dashboard
          </span>
          <div className="mt-6 flex items-baseline gap-4">
            <h2 className="font-headline text-[5rem] font-extrabold leading-none tracking-tighter">
              84%
            </h2>
            <div className="flex flex-col">
              <span className="flex items-center gap-1 font-bold text-on-tertiary-container">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +12%
              </span>
              <span className="text-xs font-medium text-on-primary-container">
                From last week
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-8 grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-on-primary-container">
              Documents
            </p>
            <p className="font-headline text-xl font-bold">18/22</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-on-primary-container">
              Approvals
            </p>
            <p className="font-headline text-xl font-bold">09/12</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-on-primary-container">
              Time Left
            </p>
            <p className="font-headline text-xl font-bold">08 Days</p>
          </div>
        </div>
        {/* Abstract Background Graphic */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10">
          <div className="h-full w-full bg-gradient-to-bl from-tertiary-fixed to-transparent"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col justify-between bg-surface-container-low p-8 md:col-span-4">
        <div>
          <h3 className="mb-4 font-headline text-xl font-bold">
            Urgent Actions
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-1 text-error">
                warning
              </span>
              <div>
                <p className="text-sm font-bold">Signature Required</p>
                <p className="text-xs text-on-surface-variant">
                  Appendix IV: Global Risk Assessment
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-1 text-secondary">
                pending
              </span>
              <div>
                <p className="text-sm font-bold">Financial Audit</p>
                <p className="text-xs text-on-surface-variant">
                  Awaiting external validator response
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-primary-container py-3 text-sm font-bold tracking-wide text-on-primary transition-opacity hover:opacity-90">
          EXECUTE SUBMISSION
        </button>
      </div>
    </section>
  );
}
