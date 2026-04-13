import { cn } from "@/lib/utils";

interface Deadline {
  grantId: string;
  grantName: string;
  deadline: string;
  daysUntilDeadline: number;
  priority: string;
}

interface CriticalDeadlinesProps {
  deadlines?: Deadline[];
  loading?: boolean;
}

function getPriorityStyle(priority: string) {
  switch (priority) {
    case 'critical':
      return {
        badge: "bg-error-container text-on-error-container",
        text: "CRITICAL",
      };
    case 'high':
      return {
        badge: "bg-secondary-fixed text-on-secondary-fixed-variant",
        text: "HIGH PRIORITY",
      };
    case 'medium':
      return {
        badge: "bg-tertiary-container text-on-tertiary-container",
        text: "MODERATE",
      };
    default:
      return {
        badge: "bg-surface-container-high text-on-surface-variant",
        text: "LOW PRIORITY",
      };
  }
}

export function CriticalDeadlines({ deadlines, loading }: CriticalDeadlinesProps) {
  const displayDeadlines = deadlines || [];
  if (loading) {
    return (
      <div className="col-span-12 xl:col-span-4">
        <div className="ambient-shadow h-full rounded-xl bg-surface-container-lowest p-8 animate-pulse">
          <div className="h-6 w-1/2 rounded bg-surface-container-low mb-6" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded bg-surface-container-low" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 xl:col-span-4">
      <div className="ambient-shadow h-full rounded-xl bg-surface-container-lowest p-8">
        <h2 className="mb-6 font-headline text-xl font-bold text-on-surface">
          Critical Deadlines
        </h2>
        <div className="zebra-striping space-y-6">
          {displayDeadlines.length === 0 ? (
            <p className="text-sm text-outline">No critical deadlines in the next 30 days.</p>
          ) : (
            displayDeadlines.map((deadline) => {
              const dateObj = new Date(deadline.deadline);
              const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
              const day = String(dateObj.getDate()).padStart(2, "0");
              const style = getPriorityStyle(deadline.priority);

              return (
                <div
                  key={deadline.grantId}
                  className="flex items-start gap-4 rounded-lg p-4 hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex-shrink-0 text-center">
                    <p className="text-xs font-bold uppercase text-secondary">
                      {month}
                    </p>
                    <p className="font-headline text-2xl font-black leading-none text-on-surface">
                      {day}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-on-surface">
                      {deadline.grantName.substring(0, 40)}
                    </h6>
                    <p className="mt-1 text-xs text-outline">
                      {deadline.daysUntilDeadline} days remaining
                    </p>
                    <span className={cn("mt-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold", style.badge)}>
                      {style.text}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <button className="mt-8 w-full rounded-lg border border-outline-variant/30 py-3 text-sm font-bold text-on-primary-fixed transition-colors hover:bg-surface-container-low">
          Manage Calendar
        </button>
      </div>
    </div>
  );
}
