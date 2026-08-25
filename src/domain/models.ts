export type IsoDateTime = string;

export type ProjectStatus = "draft" | "active" | "archived";

export interface Project {
  id: string;
  name: string;
  customerName: string;
  status: ProjectStatus;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
}

export type SourceKind = "file" | "confluence";
export type SourceStatus = "queued" | "processing" | "ready" | "failed" | "superseded";

export interface Source {
  id: string;
  projectId: string;
  kind: SourceKind;
  name: string;
  status: SourceStatus;
  version: string;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
}

export type ConnectionAuthType = "api-key" | "bearer" | "basic" | "oauth2-client";
export type ConnectionStatus = "untested" | "valid" | "invalid" | "expired" | "revoked";

export interface Connection {
  id: string;
  projectId: string;
  name: string;
  baseUrl: string;
  authType: ConnectionAuthType;
  status: ConnectionStatus;
  lastValidatedAt?: IsoDateTime;
}

export type AnalysisRunStatus = "queued" | "running" | "completed" | "failed" | "cancelled";

export interface AnalysisRun {
  id: string;
  projectId: string;
  status: AnalysisRunStatus;
  sourceIds: string[];
  startedAt?: IsoDateTime;
  completedAt?: IsoDateTime;
}

export interface EvidenceReference {
  sourceId: string;
  sourceVersion: string;
  locator: string;
  excerpt?: string;
}

export type FindingKind =
  "integration-map" | "api-inventory" | "auth-model" | "schema-mapping" | "data-model" | "risk";

export type FindingConfidence = "low" | "medium" | "high" | "unknown";
export type FindingReviewStatus = "draft" | "accepted" | "corrected" | "rejected";

export interface Finding<TDetails = Record<string, unknown>> {
  id: string;
  analysisRunId: string;
  kind: FindingKind;
  title: string;
  details: TDetails;
  confidence: FindingConfidence;
  reviewStatus: FindingReviewStatus;
  evidence: EvidenceReference[];
}
