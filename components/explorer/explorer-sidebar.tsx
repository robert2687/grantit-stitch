import { Grant } from "@/lib/api/types";

interface ExplorerSidebarProps {
  grants?: Grant[];
}

export function ExplorerSidebar({ grants = [] }: ExplorerSidebarProps) {
  const highFitGrants = grants.filter((g) => g.fitScore >= 80);
  const criticalDeadlines = grants.filter((g) => {
    const deadline = new Date(g.deadline);
    const now = new Date();
    const daysUntil = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntil <= 30 && daysUntil > 0;
  });

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
              <div className="font-headline text-3xl font-black">{grants.length}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                Grants Found
              </div>
            </div>
            <div className="text-right">
              <div className="font-headline text-xl font-bold text-tertiary-fixed">
                {highFitGrants.length}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                High Fit
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-on-primary/10">
            <div className="h-full bg-tertiary-fixed" style={{width: `${highFitGrants.length > 0 ? (highFitGrants.length / grants.length) * 100 : 0}%`}}></div>
          </div>
          <p className="text-[11px] font-medium leading-relaxed opacity-70">
            {criticalDeadlines.length} opportunities have deadlines approaching within 30 days.
          </p>
        </div>
      </div>

      {/* Recent Signals */}
      <div className="rounded-xl bg-surface-container-low p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Live Signals
        </h3>
        <div className="space-y-6">
          {criticalDeadlines.length > 0 ? (
            criticalDeadlines.slice(0, 3).map((grant) => {
              const deadline = new Date(grant.deadline);
              const now = new Date();
              const daysUntil = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              
              return (
                <div key={grant.id} className="flex gap-4">
                  <div className={`mt-1.5 h-2 w-2 rounded-full ${daysUntil <= 14 ? 'bg-error shadow-[0_0_8px_rgba(186,26,26,0.4)]' : daysUntil <= 21 ? 'bg-secondary' : 'bg-on-tertiary-container'}`}></div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">
                      Deadline: {grant.name.substring(0, 30)}
                    </p>
                    <p className="mt-1 text-[10px] text-on-surface-variant">
                      {daysUntil} days remaining. Fit score: {grant.fitScore}%
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-[10px] text-on-surface-variant">
              No critical deadlines in the next 30 days.
            </p>
          )}
        </div>
        <button className="mt-6 w-full rounded-lg border border-outline-variant/30 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-surface-container-highest">
          View All Signals
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
              {highFitGrants.length}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Critical
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">
              {criticalDeadlines.length}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Average Fit
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">
              {grants.length > 0 ? Math.round(grants.reduce((sum, g) => sum + g.fitScore, 0) / grants.length) : 0}%
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-outline">
              Total Funding
            </p>
            <p className="font-headline text-2xl font-bold text-on-surface">
              {grants.length > 0 ? `${(grants.reduce((sum, g) => sum + g.fundingAmount, 0) / 1000000).toFixed(1)}M` : '0'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
