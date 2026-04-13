import { AppShell } from "@/components/app-shell";
import { ProposalHeader } from "@/components/proposals/proposal-header";
import { SectionNav } from "@/components/proposals/section-nav";
import { ProposalEditor } from "@/components/proposals/proposal-editor";
import { AISuggestions } from "@/components/proposals/ai-suggestions";

export default function ProposalsPage() {
  return (
    <AppShell>
      <ProposalHeader />
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        <SectionNav />
        <ProposalEditor />
        <AISuggestions />
      </div>
    </AppShell>
  );
}
