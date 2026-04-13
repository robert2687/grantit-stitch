import { cn } from "@/lib/utils";

interface Agent {
  name: string;
  status: string;
  tasksCompleted: number;
  efficiency: number;
  lastUpdate: string;
}

interface AgentGridProps {
  agents?: Agent[];
  loading?: boolean;
}

const statusStyles = {
  processing: {
    border: "border-l-tertiary-fixed-dim",
    badge: "bg-tertiary-container text-on-tertiary-container",
    progress: "bg-tertiary-fixed-dim",
  },
  active: {
    border: "border-l-secondary",
    badge: "bg-secondary-fixed text-on-secondary-fixed-variant",
    progress: "bg-secondary",
  },
  idle: {
    border: "border-l-on-primary-fixed-variant",
    badge: "bg-surface-container-high text-on-surface-variant",
    progress: "bg-outline",
  },
};

const iconMap: Record<string, string> = {
  'Scanner': 'search',
  'Evaluator': 'assessment',
  'Composer': 'edit_note',
  'Monitor': 'monitor_heart',
};

export function AgentGrid({ agents, loading }: AgentGridProps) {
  const displayAgents = agents || [];
  if (loading) {
    return (
      <div className="col-span-12 xl:col-span-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 rounded-lg bg-surface-container-low" />
          ))}
        </div>
      </div>
    );
  }

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
        {displayAgents.map((agent, idx) => {
          const statusKey = (agent.status.toLowerCase()) as keyof typeof statusStyles;
          const styles = statusStyles[statusKey] || statusStyles.processing;
          const iconName = iconMap[agent.name.split(' ')[0]] || 'psychology';
          
          return (
            <div
              key={idx}
              className={cn(
                "rounded-xl border-l-4 bg-surface-container-low p-6 transition-transform hover:-translate-y-1",
                styles.border
              )}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-lg bg-surface-container-lowest p-2">
                  <span className="material-symbols-outlined text-primary-container">
                    {iconName}
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
                {agent.tasksCompleted} tasks completed at {agent.efficiency}% efficiency
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold text-outline-variant">
                <span>TASKS: {agent.tasksCompleted}</span>
                <span>EFFICIENCY: {agent.efficiency}%</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div
                  className={cn("h-full transition-all", styles.progress)}
                  style={{ width: `${agent.efficiency}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
