import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { ReadinessHero } from "@/components/compliance/readiness-hero";
import { SubmissionGates } from "@/components/compliance/submission-gates";
import { DocumentsTable } from "@/components/compliance/documents-table";
import { CoordinationTimeline } from "@/components/compliance/coordination-timeline";

export default function CompliancePage() {
  return (
    <AppShell>
      <Header title="Grant Explorer" showSearch={false} />
      <div className="mx-auto max-w-7xl space-y-8 p-8">
        {/* Hero Stats / Bento Header */}
        <ReadinessHero />

        {/* Submission Gates Timeline */}
        <SubmissionGates />

        {/* Main Data Grid */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <DocumentsTable />
          <CoordinationTimeline />
        </section>
      </div>
    </AppShell>
  );
}
