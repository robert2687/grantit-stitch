import { cn } from "@/lib/utils";

const agents = [
  {
    id: 1,
    name: "Alpha-Vantage Core",
    description:
      "Processing EU Environmental Directives and Tier 1 regional distributions.",
    status: "Running",
    statusColor: "tertiary",
    icon: "psychology",
    load: 64,
    uptime: "99.9%",
  },
  {
    id: 2,
    name: "Sentinel-Compliance",
    description:
      "Cross-referencing global sanctions and regulatory updates for RMD26.",
    status: "Syncing",
    statusColor: "secondary",
    icon: "shield_with_heart",
    load: 88,
    uptime: "98.4%",
  },
  {
    id: 3,
    name: "Fiscal-Gatekeeper",
    description:
      "Awaiting manual verification for transfers exceeding $5.0M threshold.",
    status: "Attention",
    statusColor: "error",
    icon: "payments",
    queued: 12,
    latency: "4s",
    load: 35,
  },
  {
    id: 4,
    name: "Review-Orchestrator",
    description:
      "Generative synthesis of quarterly reports and impact analytics.",
    status: "Standby",
    statusColor: "neutral",
    icon: "summarize",
    idle: "2h",
    autoResume: "ON",
    load: 0,
  },
];

const statusStyles = {
  tertiary: {
    border: "border-l-tertiary-fixed-dim",
    badge: "bg-tertiary-container text-on-tertiary-container",
    progress: "bg-tertiary-fixed-dim",
  },
  secondary: {
    border: "border-l-secondary",
    badge: "bg-secondary-fixed text-on-secondary-fixed-variant",
    progress: "bg-secondary",
  },
  error: {
    border: "border-l-error",
    badge: "bg-error-container text-on-error-container",
    progress: "bg-error",
  },
  neutral: {
    border: "border-l-on-primary-fixed-variant",
    badge: "bg-surface-container-high text-on-surface-variant",
    progress: "bg-outline",
  },
};

export function AgentGrid() {
  return (
    <div className="col-span-12 xl:col-span-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Orchestration Agents
          </h2>
          <p className="text-sm text-outline">
            Real-time status of automated grant processing units.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
        >
          View All Network
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {agents.map((agent) => {
          const styles =
            statusStyles[agent.statusColor as keyof typeof statusStyles];
          return (
            <div
              key={agent.id}
              className={cn(
                "rounded-xl border-l-4 bg-surface-container-low p-6 transition-transform hover:-translate-y-1",
                styles.border
              )}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-lg bg-surface-container-lowest p-2">
                  <span className="material-symbols-outlined text-primary-container">
                    {agent.icon}
                  </span>
                </div>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-tighter",
                    styles.badge
                  )}
                >
                  {agent.status}
                </span>
              </div>
              <h5 className="mb-1 font-headline text-lg font-bold">
                {agent.name}
              </h5>
              <p className="mb-6 text-xs leading-relaxed text-outline">
                {agent.description}
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold text-outline-variant">
                {agent.queued !== undefined ? (
                  <>
                    <span>QUEUED: {agent.queued}</span>
                    <span>LATENCY: {agent.latency}</span>
                  </>
                ) : agent.idle !== undefined ? (
                  <>
                    <span>IDLE: {agent.idle}</span>
                    <span>AUTO-RESUME: {agent.autoResume}</span>
                  </>
                ) : (
                  <>
                    <span>LOAD: {agent.load}%</span>
                    <span>UPTIME: {agent.uptime}</span>
                  </>
                )}
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div
                  className={cn("h-full transition-all", styles.progress)}
                  style={{ width: `${agent.load}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
