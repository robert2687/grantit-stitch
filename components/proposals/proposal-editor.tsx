"use client";

export function ProposalEditor() {
  return (
    <section className="flex flex-1 flex-col overflow-y-auto bg-surface-container-lowest p-12">
      <div className="mx-auto w-full max-w-3xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-2 font-headline text-4xl font-extrabold tracking-tight text-on-primary-fixed">
            Technical Methodology
          </h2>
          <p className="font-medium text-on-primary-fixed-variant">
            Define the core architectural and systemic approach for the
            deployment phase.
          </p>
        </div>

        {/* Content Area */}
        <div className="prose prose-slate max-w-none">
          <h3 className="mb-4 text-lg font-bold text-on-surface">
            1.1 System Architecture
          </h3>
          <p className="mb-6 leading-relaxed text-on-surface-variant">
            The proposed solution utilizes a decentralized mesh topology
            designed for high-availability in low-latency environments. By
            implementing a zero-trust security layer at the hardware abstraction
            level, the architecture ensures that all grant metadata remains
            immutable across all regional nodes.
          </p>
          <p className="mb-6 rounded-r-lg border-l-4 border-secondary bg-secondary-fixed/20 p-4 leading-relaxed text-on-surface-variant">
            We will utilize the Sovereign-6 protocol for cross-border
            reconciliation. This protocol has been benchmarked to provide
            99.999% uptime during peak transactional periods in the pilot phase.
            The integration of neural-net forecasting allows for predictive
            maintenance of the physical hardware nodes, reducing operational
            overhead by an estimated 22%.
          </p>
          <h3 className="mb-4 text-lg font-bold text-on-surface">
            1.2 Deployment Strategy
          </h3>
          <p className="mb-6 leading-relaxed text-on-surface-variant">
            Deployment will occur in three distinct phases: Baseline
            Integration, Scale Validation, and Global Synchronization. During
            Phase 1, we focus on establishing the primary data pipelines...
          </p>
          <div className="mb-6 flex h-24 w-full animate-pulse items-center justify-center rounded-lg bg-surface-container-low">
            <span className="text-xs font-medium text-outline">
              Continue writing...
            </span>
          </div>
        </div>
      </div>

      {/* Formatting Floating Bar */}
      <div className="sticky bottom-8 mx-auto flex items-center gap-2 rounded-full border border-on-primary/10 bg-primary-container/95 p-2 text-on-primary shadow-2xl backdrop-blur-xl">
        <button className="rounded-full p-2 transition-colors hover:bg-on-primary/10">
          <span className="material-symbols-outlined text-sm">format_bold</span>
        </button>
        <button className="rounded-full p-2 transition-colors hover:bg-on-primary/10">
          <span className="material-symbols-outlined text-sm">
            format_italic
          </span>
        </button>
        <button className="rounded-full p-2 transition-colors hover:bg-on-primary/10">
          <span className="material-symbols-outlined text-sm">
            format_list_bulleted
          </span>
        </button>
        <div className="mx-1 h-4 w-px bg-on-primary/20"></div>
        <button className="rounded-full p-2 transition-colors hover:bg-on-primary/10">
          <span className="material-symbols-outlined text-sm">link</span>
        </button>
        <button className="rounded-full p-2 transition-colors hover:bg-on-primary/10">
          <span className="material-symbols-outlined text-sm">image</span>
        </button>
        <div className="mx-1 h-4 w-px bg-on-primary/20"></div>
        <button className="rounded-full bg-tertiary-fixed px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-tertiary-container">
          Generate with AI
        </button>
      </div>
    </section>
  );
}
