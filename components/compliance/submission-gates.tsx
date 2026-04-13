import { cn } from "@/lib/utils/index";

const gates = [
  {
    id: 1,
    number: "01",
    name: "Eligibility Check",
    status: "complete",
    date: "Verified 14/10/2023",
  },
  {
    id: 2,
    number: "02",
    name: "Technical Review",
    status: "complete",
    date: "Verified 28/10/2023",
  },
  {
    id: 3,
    number: "03",
    name: "Compliance Audit",
    status: "in-progress",
    date: "Ongoing - 65% Complete",
  },
  {
    id: 4,
    number: "04",
    name: "Final Submission",
    status: "pending",
    date: "Scheduled: 15/11/2023",
  },
];

const statusStyles = {
  complete: {
    border: "border-l-on-tertiary-container",
    badge: "bg-on-tertiary-container",
    icon: "check",
    textColor: "text-on-tertiary-container",
    bg: "bg-surface-container-lowest",
  },
  "in-progress": {
    border: "border-l-secondary",
    badge: "bg-secondary animate-pulse",
    icon: "sync",
    textColor: "text-secondary",
    bg: "bg-surface-container-lowest",
  },
  pending: {
    border: "border-l-outline-variant",
    badge: "",
    icon: "",
    textColor: "text-outline",
    bg: "bg-surface-container-low opacity-60",
  },
};

export function SubmissionGates() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline">
            Process Overview
          </span>
          <h3 className="font-headline text-2xl font-bold">Submission Gates</h3>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest text-secondary hover:underline">
          View Roadmap
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {gates.map((gate) => {
          const styles = statusStyles[gate.status as keyof typeof statusStyles];
          return (
            <div
              key={gate.id}
              className={cn(
                "relative border-l-4 p-6",
                styles.border,
                styles.bg
              )}
            >
              {styles.badge && (
                <div
                  className={cn(
                    "absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-on-primary",
                    styles.badge
                  )}
                >
                  <span className="material-symbols-outlined text-sm">
                    {styles.icon}
                  </span>
                </div>
              )}
              <p
                className={cn(
                  "mb-2 text-[10px] font-bold uppercase",
                  styles.textColor
                )}
              >
                Gate {gate.number}
              </p>
              <h4 className="text-sm font-bold">{gate.name}</h4>
              <p className="mt-2 text-xs text-on-surface-variant">
                {gate.date}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
