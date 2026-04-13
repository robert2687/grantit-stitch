'use client';

import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { HeroStats } from "@/components/dashboard/hero-stats";
import { AgentGrid } from "@/components/dashboard/agent-grid";
import { CriticalDeadlines } from "@/components/dashboard/critical-deadlines";
import { useEffect, useState } from "react";

interface DashboardStats {
  statistics: {
    totalFundingAvailable: number;
    totalGrantsUnderReview: number;
    activeProposals: number;
    averageFitScore: number;
  };
  orchestrationAgents: Array<{
    name: string;
    status: string;
    tasksCompleted: number;
    efficiency: number;
    lastUpdate: string;
  }>;
  criticalDeadlines: Array<{
    grantId: string;
    grantName: string;
    deadline: string;
    daysUntilDeadline: number;
    priority: string;
  }>;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/dashboard/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <AppShell>
      <Header title="Sovereign Architect" />
      <div className="p-8">
        {/* Hero Stats: Asymmetric Editorial Layout */}
        <HeroStats stats={stats?.statistics} loading={loading} />

        {/* Agent Grid & Deadlines */}
        <section className="mt-12 grid grid-cols-12 gap-8">
          <AgentGrid agents={stats?.orchestrationAgents} loading={loading} />
          <CriticalDeadlines deadlines={stats?.criticalDeadlines} loading={loading} />
        </section>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-2xl transition-transform hover:scale-105">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </AppShell>
  );
}
