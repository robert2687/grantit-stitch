// Grant types
export interface Grant {
  id: string;
  name: string;
  region: string;
  country?: string;
  fundingAmount: number;
  deadline: string;
  eligibility: string[];
  supportedThemes: string[];
  officialSourceLink: string;
  fitScore: number; // 0-100
  reasonForRelevance: string;
  submissionStatus?: 'not_started' | 'in_progress' | 'submitted' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

// Grant evaluation result
export interface GrantEvaluation {
  grantId: string;
  scores: {
    eligibilityMatch: number;
    thematicFit: number;
    innovationStrength: number;
    technicalReadiness: number;
    geographicFit: number;
    budgetFeasibility: number;
    competitionLevel: number;
  };
  overallSuccessProbability: number;
  justification: string;
  risks: string[];
  recommendations: string[];
  decision: 'GO' | 'NO-GO';
  evaluatedAt: string;
}

// 90-day calendar item
export interface DeadlineAlert {
  grantId: string;
  grantName: string;
  deadline: string;
  daysUntilDeadline: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

// Watchlist item
export interface WatchlistItem {
  grantId: string;
  grantName: string;
  reason: string;
  addedAt: string;
  priority: 'strategic' | 'backup';
}

// Scanning alert
export interface ScanningAlert {
  id: string;
  type: 'new_grant' | 'deadline_approaching' | 'evaluation_complete';
  grantName: string;
  message: string;
  createdAt: string;
  read: boolean;
}

// Project information
export interface ProjectProfile {
  name: string;
  description: string;
  focus: string[];
  technicalReadinessLevel: number; // TRL 1-9
  budget: number;
  regions: string[];
  sectors: string[];
}

// Response from grant search/evaluation APIs
export interface GrantScanResponse {
  opportunities: Grant[];
  deadlineCalendar: DeadlineAlert[];
  watchlist: WatchlistItem[];
  alerts: ScanningAlert[];
}

export interface EvaluationResponse {
  evaluation: GrantEvaluation;
  relatedOpportunities?: Grant[];
}
