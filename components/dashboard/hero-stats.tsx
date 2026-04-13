interface HeroStatsProps {
  stats?: {
    totalFundingAvailable: number;
    totalGrantsUnderReview: number;
    activeProposals: number;
    averageFitScore: number;
  };
  loading?: boolean;
}

export function HeroStats({ stats, loading }: HeroStatsProps) {
  const totalFunding = stats ? (stats.totalFundingAvailable / 1000000).toFixed(1) : '24.8';
  const growth = '+12.4';
  const grantCount = stats?.totalGrantsUnderReview || 142;
  const compliance = stats ? stats.averageFitScore : 98;

  return (
    <section className="grid grid-cols-12 gap-8">
      {/* Main Stats Card */}
      <div className="col-span-12 lg:col-span-8">
        <h2 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant">
          Global Landscape Overview
        </h2>
        <div className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-xl bg-primary-container p-10 text-on-primary">
          <div className="absolute right-0 top-0 p-8">
            <span className="material-symbols-outlined text-9xl text-on-primary/20">
              public
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="mb-4 font-headline text-[3.5rem] font-extrabold leading-none tracking-tight">
              ${totalFunding}B
            </h3>
            <p className="max-w-md font-body text-lg leading-relaxed text-on-primary-container">
              Total funding managed across {grantCount} grants. Current portfolio performing at{" "}
              <span className="font-bold text-tertiary-fixed">{growth}%</span>{" "}
              above annual benchmark.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-on-primary px-6 py-2.5 text-sm font-bold text-primary-container transition-opacity hover:opacity-90">
              Deploy Funds
            </button>
            <button className="rounded-lg border border-on-primary/20 bg-on-primary/5 px-6 py-2.5 text-sm font-bold backdrop-blur-md transition-colors hover:bg-on-primary/10">
              Strategic View
            </button>
          </div>
        </div>
      </div>

      {/* Side Stats */}
      <div className="col-span-12 flex flex-col gap-8 lg:col-span-4">
        <div className="ambient-shadow flex flex-1 flex-col justify-between rounded-xl bg-surface-container-lowest p-8">
          <div>
            <span className="material-symbols-outlined mb-4 text-3xl text-secondary">
              analytics
            </span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Grants Under Review
            </p>
            <h4 className="font-headline text-3xl font-bold text-on-surface">
              {loading ? '...' : grantCount}
            </h4>
          </div>
          <div className="border-t border-outline-variant/10 pt-4">
            <p className="flex items-center gap-1 text-xs font-bold text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
              {stats?.activeProposals || 0} ACTIVE PROPOSALS
            </p>
          </div>
        </div>
        <div className="ambient-shadow flex flex-1 flex-col justify-between rounded-xl bg-surface-container-lowest p-8">
          <div>
            <span className="material-symbols-outlined mb-4 text-3xl text-tertiary-fixed-dim">
              history_edu
            </span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Avg Fit Score
            </p>
            <h4 className="font-headline text-3xl font-bold text-on-surface">
              {loading ? '...' : compliance}%
            </h4>
          </div>
          <div className="border-t border-outline-variant/10 pt-4">
            <p className="flex items-center gap-1 text-xs font-bold uppercase text-on-primary-fixed-variant">
              Risk Threshold: Minimal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
