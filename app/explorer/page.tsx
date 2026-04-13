import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { GrantFilters } from "@/components/explorer/grant-filters";
import { GrantStream } from "@/components/explorer/grant-stream";
import { ExplorerSidebar } from "@/components/explorer/explorer-sidebar";

export default function ExplorerPage() {
  return (
    <AppShell>
      <Header title="Grant Explorer" />

      {/* Search & Filter Bar */}
      <GrantFilters />

      {/* Stats & Bento Area */}
      <div className="grid grid-cols-12 gap-6 px-8 pb-8">
        <GrantStream />
        <ExplorerSidebar />
      </div>
    </AppShell>
  );
}
