import { cn } from "@/lib/utils";

const deadlines = [
  {
    id: 1,
    month: "Oct",
    day: "24",
    title: "Annual G8 Compliance Audit",
    description: "Final submission of regional grant audits for RMD26-HQ.",
    priority: "HIGH PRIORITY",
    priorityStyle: "bg-error-container text-on-error-container",
    monthColor: "text-error",
  },
  {
    id: 2,
    month: "Nov",
    day: "02",
    title: "Pacific-Basin Proposal Window",
    description:
      "Opening for Tier 2 infrastructure development applications.",
    priority: "UPCOMING",
    priorityStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    monthColor: "text-secondary",
  },
  {
    id: 3,
    month: "Nov",
    day: "15",
    title: "Quarterly Disbursal Cycle",
    description: "Automated batch processing for approved healthcare grants.",
    priority: "ROUTINE",
    priorityStyle: "bg-tertiary-container text-on-tertiary-container",
    monthColor: "text-on-tertiary-container",
  },
  {
    id: 4,
    month: "Dec",
    day: "01",
    title: "Agent Logic Update V4.2",
    description: "Scheduled maintenance and neural weights recalibration.",
    priority: "MAINTENANCE",
    priorityStyle: "bg-surface-container-high text-on-surface-variant",
    monthColor: "text-outline",
    faded: true,
  },
];

export function CriticalDeadlines() {
  return (
    <div className="col-span-12 xl:col-span-4">
      <div className="ambient-shadow h-full rounded-xl bg-surface-container-lowest p-8">
        <h2 className="mb-6 font-headline text-xl font-bold text-on-surface">
          Critical Deadlines
        </h2>
        <div className="zebra-striping space-y-6">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className={cn(
                "flex items-start gap-4 rounded-lg p-4",
                deadline.faded && "opacity-50"
              )}
            >
              <div className="flex-shrink-0 text-center">
                <p
                  className={cn(
                    "text-xs font-bold uppercase",
                    deadline.monthColor
                  )}
                >
                  {deadline.month}
                </p>
                <p className="font-headline text-2xl font-black leading-none text-on-surface">
                  {deadline.day}
                </p>
              </div>
              <div>
                <h6 className="text-sm font-bold text-on-surface">
                  {deadline.title}
                </h6>
                <p className="mt-1 text-xs text-outline">
                  {deadline.description}
                </p>
                <span
                  className={cn(
                    "mt-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold",
                    deadline.priorityStyle
                  )}
                >
                  {deadline.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 w-full rounded-lg border border-outline-variant/30 py-3 text-sm font-bold text-on-primary-fixed transition-colors hover:bg-surface-container-low">
          Manage Calendar
        </button>
      </div>
    </div>
  );
}
