'use client';

import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { GrantFilters } from "@/components/explorer/grant-filters";
import { GrantStream } from "@/components/explorer/grant-stream";
import { ExplorerSidebar } from "@/components/explorer/explorer-sidebar";
import { useState, useEffect } from 'react';
import { Grant, GrantScanResponse } from '@/lib/types';

export default function ExplorerPage() {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchGrants = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (searchQuery) params.append('q', searchQuery);
        if (region) params.append('region', region);

        const response = await fetch(`/api/grants/search?${params.toString()}`);
        const data: GrantScanResponse = await response.json();
        setGrants(data.opportunities);
      } catch (error) {
        console.error('Error fetching grants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGrants();
  }, [searchQuery, region]);

  return (
    <AppShell>
      <Header title="Grant Explorer" />

      {/* Search & Filter Bar */}
      <GrantFilters onSearch={setSearchQuery} onRegionChange={setRegion} />

      {/* Stats & Bento Area */}
      <div className="grid grid-cols-12 gap-6 px-8 pb-8">
        <GrantStream grants={grants} loading={loading} />
        <ExplorerSidebar grants={grants} />
      </div>
    </AppShell>
  );
}
