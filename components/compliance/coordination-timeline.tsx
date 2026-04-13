export function CoordinationTimeline() {
  return (
    <div className="space-y-6">
      <h3 className="font-headline text-xl font-bold">Coordination</h3>
      <div className="space-y-6 bg-surface-container-low p-6">
        <div className="relative space-y-8 pl-8 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-0.5 before:bg-outline-variant">
          {/* Event 1 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-surface-container-low bg-primary-container">
              <span className="h-1.5 w-1.5 rounded-full bg-on-primary"></span>
            </div>
            <div>
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-bold">Consortium Meeting</h4>
                <span className="bg-on-primary px-2 py-0.5 text-[9px] font-bold">
                  LIVE
                </span>
              </div>
              <p className="mt-1 text-xs text-on-surface-variant">
                Reviewing technical section 4.2 with regional partners.
              </p>
              <div className="-space-x-2 mt-3 flex">
                <div className="h-6 w-6 rounded-full border-2 border-surface-container-low bg-slate-300"></div>
                <div className="h-6 w-6 rounded-full border-2 border-surface-container-low bg-slate-400"></div>
                <div className="h-6 w-6 rounded-full border-2 border-surface-container-low bg-slate-500"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface-container-low bg-surface-container-high text-[8px] font-bold">
                  +8
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-surface-container-low bg-outline-variant">
              <span className="h-1.5 w-1.5 rounded-full bg-surface-container-high"></span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface-variant">
                Validator Verification
              </h4>
              <p className="mt-1 text-xs text-outline">
                External audit scheduled for completion tomorrow.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-surface-container-low bg-outline-variant">
              <span className="h-1.5 w-1.5 rounded-full bg-surface-container-high"></span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface-variant">
                Gate 04 Sign-off
              </h4>
              <p className="mt-1 text-xs text-outline">
                Final approval required by Chief Administrative Officer.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-outline-variant/20 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Partner Engagement
            </span>
            <span className="text-sm font-bold text-on-tertiary-container">
              92%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
            <div className="h-full w-[92%] bg-on-tertiary-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
