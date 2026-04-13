import { cn } from "@/lib/utils/index";
import { Grant } from "@/lib/api/types";

interface GrantStreamProps {
  grants: Grant[];
  loading?: boolean;
}

const fitStyles = {
  high: {
    score: "text-primary-container",
    badge: "bg-tertiary-container text-on-tertiary-container",
    label: "Perfect Match",
  },
  medium: {
    score: "text-on-primary-fixed-variant",
    badge: "bg-secondary-fixed text-on-secondary-fixed-variant",
    label: "Strong Match",
  },
  low: {
    score: "text-on-primary-fixed-variant",
    badge: "bg-surface-container-high text-on-surface-variant",
    label: "Moderate",
  },
};

function getFitStyle(fitScore: number) {
  if (fitScore >= 85) return fitStyles.high;
  if (fitScore >= 70) return fitStyles.medium;
  return fitStyles.low;
}

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M`;
  }
  return `${(amount / 1000).toFixed(0)}K`;
}

function formatDeadline(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).toUpperCase();
}

export function GrantStream({ grants, loading }: GrantStreamProps) {
  if (loading) {
    return (
      <div className="col-span-12 space-y-6 lg:col-span-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 rounded-lg bg-surface-container-low" />
          ))}
        </div>
      </div>
    );
  }

  if (grants.length === 0) {
    return (
      <div className="col-span-12 space-y-6 lg:col-span-8">
        <div className="rounded-lg bg-surface-container-lowest p-8 text-center">
          <p className="text-on-surface-variant">No grants found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 space-y-6 lg:col-span-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">
          Global Grant Stream
        </h2>
        <div className="flex items-center gap-4 text-xs font-bold text-outline">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>
            Verified
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            Processing
          </span>
        </div>
      </div>

      {grants.map((grant, index) => {
        const styles = getFitStyle(grant.fitScore);
        const isFeatured = index === 0;

        return (
          <article
            key={grant.id}
            className={cn(
              "rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg",
              isFeatured
                ? "bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-1 group"
                : "bg-surface-container-lowest"
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-6 p-6 md:flex-row",
                isFeatured && "rounded-[0.5rem] bg-surface-container-lowest"
              )}
            >
              <div className="flex flex-col items-center justify-center border-r-0 border-outline-variant/20 pr-0 md:w-32 md:border-r md:pr-6">
                <div className={cn("font-headline text-3xl font-black", styles.score)}>
                  {grant.fitScore}%
                </div>
                <div className="text-[10px] font-bold uppercase tracking-tighter text-outline-variant">
                  Strategic Fit
                </div>
                <div className={cn("mt-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase", styles.badge)}>
                  {styles.label}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3
                    className={cn(
                      "font-headline text-xl font-bold text-on-surface transition-colors",
                      isFeatured && "group-hover:text-secondary"
                    )}
                  >
                    {grant.name}
                  </h3>
                  <span className={cn("material-symbols-outlined cursor-pointer text-outline", isFeatured && "group-hover:text-primary-container")}>
                    bookmark
                  </span>
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
                  {grant.reasonForRelevance}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-outline">calendar_today</span>
                    <span className="text-xs font-bold text-on-surface-variant">
                      DEADLINE: {formatDeadline(grant.deadline)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-outline">payments</span>
                    <span className="text-xs font-bold text-on-surface-variant">
                      EUR {formatCurrency(grant.fundingAmount)} TOTAL FUNDING
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="rounded-full bg-surface-container-low px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-outline">
                      {grant.region}
                    </span>
                    <span className="rounded-full bg-surface-container-low px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-outline">
                      {grant.supportedThemes[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
