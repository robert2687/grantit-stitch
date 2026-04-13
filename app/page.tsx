import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { HeroStats } from "@/components/dashboard/hero-stats";
import { AgentGrid } from "@/components/dashboard/agent-grid";
import { CriticalDeadlines } from "@/components/dashboard/critical-deadlines";

export default function DashboardPage() {
  return (
    <AppShell>
      <Header title="Grant Explorer" />
      <div className="p-8">
        {/* Hero Stats: Asymmetric Editorial Layout */}
        <HeroStats />

        {/* Agent Grid & Deadlines */}
        <section className="mt-12 grid grid-cols-12 gap-8">
          <AgentGrid />
          <CriticalDeadlines />
        </section>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-2xl transition-transform hover:scale-105">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </AppShell>
  );
}
