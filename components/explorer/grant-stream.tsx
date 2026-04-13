import { cn } from "@/lib/utils";

const grants = [
  {
    id: 1,
    title: "Neural Sovereignty: Ethical Scaling for European LLMs",
    description:
      "Research grant focusing on distributed training infrastructure and ethical alignment protocols for sovereign AI clusters. Targeted at high-performance computing centers.",
    fitScore: 98,
    fitLabel: "Perfect Match",
    fitStyle: "tertiary",
    deadline: "OCT 24, 2024",
    funding: "2.4M",
    fundingCurrency: "EUR",
    source: "EU Commission",
    tier: "Tier 1",
    featured: true,
  },
  {
    id: 2,
    title: "Decentralized Cloud Infrastructure for Edge AI",
    description:
      "Development of latency-optimized middleware for edge-based machine learning inference. Priority given to open-source frameworks.",
    fitScore: 84,
    fitLabel: "Strong Match",
    fitStyle: "secondary",
    deadline: "NOV 12, 2024",
    funding: "850,000",
    fundingCurrency: "USD",
    source: "NIST Research",
    tier: "Cloud Tech",
    featured: false,
  },
  {
    id: 3,
    title: "Privacy-Preserving Federated Learning Prototypes",
    description:
      "Advancing differential privacy in cross-device learning environments. Focus on medical data sovereignty.",
    fitScore: 72,
    fitLabel: "Moderate",
    fitStyle: "neutral",
    deadline: "DEC 01, 2024",
    funding: "1.2M",
    fundingCurrency: "USD",
    source: "DARPA",
    tier: "Defense",
    featured: false,
    bookmarked: true,
  },
];

const fitStyles = {
  tertiary: {
    score: "text-primary-container",
    badge: "bg-tertiary-container text-on-tertiary-container",
  },
  secondary: {
    score: "text-on-primary-fixed-variant",
    badge: "bg-secondary-fixed text-on-secondary-fixed-variant",
  },
  neutral: {
    score: "text-on-primary-fixed-variant",
    badge: "bg-surface-container-high text-on-surface-variant",
  },
};

export function GrantStream() {
  return (
    <div className="col-span-12 space-y-6 lg:col-span-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">
          Global Grant Stream
        </h2>
        <div className="flex items-center gap-4 text-xs font-bold text-outline">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>{" "}
            Verified
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>{" "}
            Processing
          </span>
        </div>
      </div>

      {grants.map((grant) => {
        const styles = fitStyles[grant.fitStyle as keyof typeof fitStyles];
        return (
          <article
            key={grant.id}
            className={cn(
              "rounded-xl transition-all duration-300",
              grant.featured
                ? "bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-1 group"
                : "bg-surface-container-lowest hover:shadow-[0_12px_40px_rgba(19,27,46,0.06)]"
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-6 p-6 md:flex-row",
                grant.featured && "rounded-[0.5rem] bg-surface-container-lowest"
              )}
            >
              <div className="flex flex-col items-center justify-center border-r-0 border-outline-variant/20 pr-0 md:w-32 md:border-r md:pr-6">
                <div
                  className={cn(
                    "font-headline text-3xl font-black",
                    styles.score
                  )}
                >
                  {grant.fitScore}%
                </div>
                <div className="text-[10px] font-bold uppercase tracking-tighter text-outline-variant">
                  Strategic Fit
                </div>
                <div
                  className={cn(
                    "mt-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase",
                    styles.badge
                  )}
                >
                  {grant.fitLabel}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3
                    className={cn(
                      "font-headline text-xl font-bold text-on-surface transition-colors",
                      grant.featured && "group-hover:text-secondary"
                    )}
                  >
                    {grant.title}
                  </h3>
                  <span
                    className={cn(
                      "material-symbols-outlined cursor-pointer text-outline",
                      grant.featured && "group-hover:text-primary-container",
                      grant.bookmarked && "text-primary-container"
                    )}
                    style={
                      grant.bookmarked
                        ? { fontVariationSettings: "'FILL' 1" }
                        : undefined
                    }
                  >
                    bookmark
                  </span>
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
                  {grant.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-outline">
                      calendar_today
                    </span>
                    <span className="text-xs font-bold text-on-surface-variant">
                      DEADLINE: {grant.deadline}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-outline">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface-variant">
                      {grant.fundingCurrency === "EUR" ? "EUR" : "$"}
                      {grant.funding} TOTAL FUNDING
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="rounded-full bg-surface-container-low px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-outline">
                      {grant.source}
                    </span>
                    <span className="rounded-full bg-surface-container-low px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-outline">
                      {grant.tier}
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
