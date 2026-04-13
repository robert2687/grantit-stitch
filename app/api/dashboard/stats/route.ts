import { NextResponse } from 'next/server';
import { mockGrants, mockDeadlines } from '@/lib/mock-data';

/**
 * GET /api/dashboard/stats
 * 
 * Returns dashboard overview statistics including:
 * - Total grants under management
 * - Active proposals count
 * - Average fit score
 * - Upcoming critical deadlines
 */
export async function GET() {
  try {
    const totalFundingAvailable = mockGrants.reduce((sum, g) => sum + g.fundingAmount, 0);
    const averageFitScore = Math.round(
      mockGrants.reduce((sum, g) => sum + g.fitScore, 0) / mockGrants.length
    );
    
    const activeProposals = mockGrants.filter(
      (g) => g.submissionStatus === 'in_progress' || g.submissionStatus === 'submitted'
    ).length;

    const criticalDeadlines = mockDeadlines
      .filter((d) => d.priority === 'critical')
      .slice(0, 3);

    return NextResponse.json({
      statistics: {
        totalFundingAvailable,
        totalGrantsUnderReview: mockGrants.length,
        activeProposals,
        averageFitScore,
      },
      orchestrationAgents: [
        {
          name: 'Global Grant Scanner',
          status: 'processing',
          tasksCompleted: 142,
          efficiency: 94,
          lastUpdate: new Date().toISOString(),
        },
        {
          name: 'Fit Evaluator Engine',
          status: 'processing',
          tasksCompleted: 89,
          efficiency: 91,
          lastUpdate: new Date().toISOString(),
        },
        {
          name: 'Proposal Composer',
          status: 'active',
          tasksCompleted: 34,
          efficiency: 87,
          lastUpdate: new Date().toISOString(),
        },
        {
          name: 'Compliance Monitor',
          status: 'active',
          tasksCompleted: 156,
          efficiency: 96,
          lastUpdate: new Date().toISOString(),
        },
      ],
      criticalDeadlines,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
