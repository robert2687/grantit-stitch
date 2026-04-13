import { NextRequest, NextResponse } from 'next/server';
import { mockGrants } from '@/lib/mock-data';
import { GrantEvaluation, EvaluationResponse } from '@/lib/types';

/**
 * POST /api/grants/evaluate
 * 
 * Grant Evaluation & Success Probability Agent
 * Evaluates how well the project fits each funding opportunity
 * 
 * Request body:
 * {
 *   "grantId": "grant_001",
 *   "projectProfile": {...}
 * }
 * 
 * Returns:
 * {
 *   "evaluation": {...},
 *   "relatedOpportunities": [...]
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { grantId, projectProfile } = body;

    if (!grantId) {
      return NextResponse.json(
        { error: 'grantId is required' },
        { status: 400 }
      );
    }

    const grant = mockGrants.find((g) => g.id === grantId);
    if (!grant) {
      return NextResponse.json(
        { error: 'Grant not found' },
        { status: 404 }
      );
    }

    // Calculate evaluation scores
    const evaluation = calculateGrantEvaluation(grant, projectProfile);

    // Find related opportunities
    const relatedOpportunities = mockGrants
      .filter((g) => g.id !== grantId && g.fitScore > 70)
      .slice(0, 3);

    const response: EvaluationResponse = {
      evaluation,
      relatedOpportunities,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in grant evaluation:', error);
    return NextResponse.json(
      { error: 'Failed to evaluate grant' },
      { status: 500 }
    );
  }
}

/**
 * Calculate detailed grant evaluation scores
 */
function calculateGrantEvaluation(grant: any, projectProfile: any): GrantEvaluation {
  // Evaluate based on grant characteristics and project profile
  const now = new Date();
  const deadline = new Date(grant.deadline);
  const daysToDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  // Base scores from fit score
  const baseScore = grant.fitScore / 100;

  // Eligibility match (simulated)
  const eligibilityMatch = grant.region === 'EU' ? 95 : grant.region === 'US' ? 90 : 80;

  // Thematic fit
  const thematicFit = Math.round(grant.fitScore);

  // Innovation strength (based on supported themes)
  const hasAI = grant.supportedThemes.some((t) => t.toLowerCase().includes('ai'));
  const hasCloud = grant.supportedThemes.some((t) => t.toLowerCase().includes('cloud'));
  const innovationStrength = hasAI ? 92 : hasCloud ? 85 : 75;

  // Technical readiness (based on project profile if provided)
  const technicalReadiness = projectProfile?.technicalReadinessLevel
    ? Math.min(projectProfile.technicalReadinessLevel * 11, 100)
    : 85;

  // Geographic fit
  const geographicFit = projectProfile?.regions?.includes(grant.region) ? 95 : 75;

  // Budget feasibility
  const budgetFeasibility =
    projectProfile && projectProfile.budget
      ? projectProfile.budget >= grant.fundingAmount
        ? 90
        : projectProfile.budget >= grant.fundingAmount * 0.5
          ? 75
          : 60
      : 80;

  // Competition level (inverse: fewer days = higher competition)
  const competitionLevel = daysToDeadline < 30 ? 40 : daysToDeadline < 60 ? 55 : 70;

  // Calculate overall success probability (weighted average)
  const weights = {
    eligibility: 0.15,
    thematic: 0.25,
    innovation: 0.15,
    technical: 0.15,
    geographic: 0.1,
    budget: 0.1,
    competition: 0.1, // Lower is better, so we invert for the calculation
  };

  const overallSuccessProbability = Math.round(
    eligibilityMatch * weights.eligibility +
      thematicFit * weights.thematic +
      innovationStrength * weights.innovation +
      technicalReadiness * weights.technical +
      geographicFit * weights.geographic +
      budgetFeasibility * weights.budget +
      competitionLevel * weights.competition
  );

  // Determine decision
  const decision = overallSuccessProbability >= 75 ? 'GO' : 'NO-GO';

  // Generate narrative
  const justification = generateJustification(grant, {
    eligibilityMatch,
    thematicFit,
    innovationStrength,
    technicalReadiness,
    geographicFit,
    budgetFeasibility,
    competitionLevel,
  });

  // Identify risks
  const risks = identifyRisks(grant, {
    eligibilityMatch,
    competitionLevel,
    daysToDeadline,
  });

  // Generate recommendations
  const recommendations = generateRecommendations(grant, decision, daysToDeadline);

  return {
    grantId: grant.id,
    scores: {
      eligibilityMatch,
      thematicFit,
      innovationStrength,
      technicalReadiness,
      geographicFit,
      budgetFeasibility,
      competitionLevel,
    },
    overallSuccessProbability,
    justification,
    risks,
    recommendations,
    decision,
    evaluatedAt: new Date().toISOString(),
  };
}

function generateJustification(grant: any, scores: any): string {
  const parts = [];

  if (scores.thematicFit > 85) {
    parts.push(`Excellent thematic alignment with supported themes: ${grant.supportedThemes.join(', ')}`);
  }

  if (scores.eligibilityMatch > 90) {
    parts.push('Strong eligibility match for the grant requirements');
  }

  if (scores.innovationStrength > 85) {
    parts.push('Project demonstrates strong innovation potential in AI and autonomous systems');
  }

  if (scores.budgetFeasibility > 80) {
    parts.push('Funding amount aligns well with project budget requirements');
  }

  return parts.join('. ') || 'Grant presents a reasonable opportunity for project success';
}

function identifyRisks(grant: any, scores: any): string[] {
  const risks: string[] = [];

  if (scores.competitionLevel < 60) {
    risks.push('Tight deadline may increase competition and reduce success probability');
  }

  if (scores.eligibilityMatch < 90) {
    risks.push('Some eligibility criteria may require additional documentation or clarification');
  }

  if (grant.region === 'EU' && !grant.country) {
    risks.push('Multi-country coordination may add administrative complexity');
  }

  if (risks.length === 0) {
    risks.push('Standard compliance and documentation risks apply');
  }

  return risks;
}

function generateRecommendations(grant: any, decision: string, daysToDeadline: number): string[] {
  const recommendations: string[] = [];

  if (decision === 'GO') {
    if (daysToDeadline < 30) {
      recommendations.push('Start proposal drafting immediately - critical deadline approaching');
    } else if (daysToDeadline < 60) {
      recommendations.push('Begin planning and resource allocation within the next week');
    } else {
      recommendations.push('Schedule kickoff meeting to discuss project fit and approach');
    }

    recommendations.push('Prepare detailed responses to all eligibility and thematic requirements');
    recommendations.push('Engage with grant manager or official program contact for clarification');
  } else {
    recommendations.push('Consider monitoring future calls from this funding program');
    recommendations.push('Evaluate alternative funding opportunities with better fit');
  }

  return recommendations;
}
