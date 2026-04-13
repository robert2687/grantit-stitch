import { NextRequest, NextResponse } from 'next/server';
import { mockGrants, mockDeadlines, mockWatchlist, mockAlerts } from '@/lib/mock-data';
import { GrantScanResponse } from '@/lib/types';

/**
 * GET /api/grants/search
 * 
 * Autonomous Global Grant-Search Agent
 * Continuously identifies, monitors, and updates all relevant grants worldwide
 * 
 * Returns:
 * - opportunities: Array of identified grants
 * - deadlineCalendar: 90-day deadline alerts
 * - watchlist: Strategic opportunities to monitor
 * - alerts: Real-time scanning alerts
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const region = searchParams.get('region');
    const minFitScore = parseInt(searchParams.get('minFitScore') || '0', 10);

    // Filter grants based on query parameters
    let filteredGrants = mockGrants;

    if (query) {
      const queryLower = query.toLowerCase();
      filteredGrants = filteredGrants.filter(
        (grant) =>
          grant.name.toLowerCase().includes(queryLower) ||
          grant.reasonForRelevance.toLowerCase().includes(queryLower) ||
          grant.supportedThemes.some((theme) => theme.toLowerCase().includes(queryLower))
      );
    }

    if (region) {
      filteredGrants = filteredGrants.filter(
        (grant) => grant.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (minFitScore > 0) {
      filteredGrants = filteredGrants.filter((grant) => grant.fitScore >= minFitScore);
    }

    // Sort by fit score descending
    filteredGrants.sort((a, b) => b.fitScore - a.fitScore);

    const response: GrantScanResponse = {
      opportunities: filteredGrants,
      deadlineCalendar: mockDeadlines.sort((a, b) => a.daysUntilDeadline - b.daysUntilDeadline),
      watchlist: mockWatchlist,
      alerts: mockAlerts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in grant search:', error);
    return NextResponse.json(
      { error: 'Failed to search grants' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/grants/search
 * 
 * Advanced search with filtering and sorting
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      query,
      regions,
      themes,
      minFitScore = 0,
      maxDeadlineDays = 365,
      sortBy = 'fitScore', // 'fitScore', 'deadline', 'fundingAmount'
    } = body;

    let filteredGrants = mockGrants;

    // Text search
    if (query) {
      const queryLower = query.toLowerCase();
      filteredGrants = filteredGrants.filter(
        (grant) =>
          grant.name.toLowerCase().includes(queryLower) ||
          grant.reasonForRelevance.toLowerCase().includes(queryLower) ||
          grant.supportedThemes.some((theme) => theme.toLowerCase().includes(queryLower))
      );
    }

    // Region filter
    if (regions && regions.length > 0) {
      filteredGrants = filteredGrants.filter((grant) =>
        regions.some((r: string) => grant.region.toLowerCase().includes(r.toLowerCase()))
      );
    }

    // Theme filter
    if (themes && themes.length > 0) {
      filteredGrants = filteredGrants.filter((grant) =>
        themes.some((t: string) =>
          grant.supportedThemes.some((theme) => theme.toLowerCase().includes(t.toLowerCase()))
        )
      );
    }

    // Fit score filter
    filteredGrants = filteredGrants.filter((grant) => grant.fitScore >= minFitScore);

    // Deadline filter (90 days by default)
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + maxDeadlineDays);
    filteredGrants = filteredGrants.filter((grant) => new Date(grant.deadline) <= deadlineDate);

    // Sorting
    switch (sortBy) {
      case 'deadline':
        filteredGrants.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
        break;
      case 'fundingAmount':
        filteredGrants.sort((a, b) => b.fundingAmount - a.fundingAmount);
        break;
      case 'fitScore':
      default:
        filteredGrants.sort((a, b) => b.fitScore - a.fitScore);
    }

    const response: GrantScanResponse = {
      opportunities: filteredGrants,
      deadlineCalendar: mockDeadlines
        .filter((d) => filteredGrants.some((g) => g.id === d.grantId))
        .sort((a, b) => a.daysUntilDeadline - b.daysUntilDeadline),
      watchlist: mockWatchlist.filter((w) => filteredGrants.some((g) => g.id === w.grantId)),
      alerts: mockAlerts,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in advanced grant search:', error);
    return NextResponse.json(
      { error: 'Failed to perform advanced search' },
      { status: 500 }
    );
  }
}
