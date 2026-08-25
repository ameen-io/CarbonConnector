# Integration Discovery: End-to-End Roadmap

The current Vite application is the v1 skeleton. The next ten versions are v2 through v11. Each version is an independently reviewable branch created from an updated `dev`; after the user merges that version into `dev`, the following version may begin.

## Product destination

An FDE can create a customer project, add documentation and approved technical access, run an evidence-backed analysis, review the resulting integration understanding, and export an implementation-ready package containing:

- integration map;
- API inventory;
- authentication model;
- schema mapping;
- data model;
- potential risks and unresolved questions.

Every conclusion must retain its source, confidence, analysis-run version, and human review state. Missing information must appear as an unknown, never as an invented result.

## Proposed architecture direction

- **Web:** Vite, React, and TypeScript for the FDE workspace.
- **API and worker:** Node.js and TypeScript, separated so ingestion and analysis do not block user requests.
- **Persistence:** PostgreSQL for product data and job state; S3-compatible object storage for source files.
- **Integration boundaries:** provider-neutral adapters for knowledge sources, credentials, models, storage, and exports.
- **Evidence model:** every derived item links to stable source locations and the analysis run that produced it.

Exact vendors, deployment platform, identity provider, and model provider remain decisions for the version where they become necessary.

## Part 1 — v2: Application foundation

**Branch:** `feat/v2-application-foundation`

**Goal:** Turn the Vite shell into a maintainable typed application without adding fake product behavior.

**Deliverables:**

- Move the UI to Vite + React + TypeScript.
- Establish routes for project list, project creation, and project workspace sections.
- Add shared layout, navigation, error boundary, loading state, and honest empty states.
- Establish linting, formatting, unit tests, and build checks.
- Define frontend domain types for projects, sources, connections, analysis runs, findings, and evidence references.

**Completion gate:** The existing skeleton remains visually intact, all routes render intentional empty states, and lint, type-check, tests, and production build pass.

## Part 2 — v3: Projects and persistence

**Branch:** `feat/v3-project-persistence`

**Goal:** Give the application its first real persisted workflow: creating and managing an integration project.

**Deliverables:**

- Add the Node.js API and PostgreSQL development setup.
- Add migrations and repositories for projects and basic audit fields.
- Implement create, list, open, rename, and archive project operations.
- Validate API inputs and return consistent error responses.
- Connect the Vite project views to the real API.

**Completion gate:** An FDE can create, reopen, rename, and archive a project across browser sessions, with API integration tests covering the lifecycle.

## Part 3 — v4: Document intake

**Branch:** `feat/v4-document-intake`

**Goal:** Let an FDE add and manage customer-provided files as project sources.

**Deliverables:**

- Add secure file upload and S3-compatible storage abstraction.
- Support an agreed first set of document formats with explicit size and type validation.
- Persist source metadata, checksums, versions, upload status, and ownership.
- Add source list, upload progress, failure, retry, replacement, and removal states.
- Add malware-scanning and retention hooks, even if the first local adapter is minimal.

**Completion gate:** Valid files persist and appear as sources; invalid, duplicate, failed, and removed files have tested, truthful states. No analysis is generated yet.

## Part 4 — v5: Confluence connection and sync

**Branch:** `feat/v5-confluence-sync`

**Goal:** Bring customer knowledge-base content into the same source model as uploaded files.

**Deliverables:**

- Add a Confluence adapter with server-side credential handling.
- Let the FDE validate access and select spaces or pages within the approved scope.
- Import page content, hierarchy, attachments, URLs, authorship, and version metadata.
- Add initial sync, incremental resync, deletion handling, and sync-status visibility.
- Preserve page-level provenance so later evidence links can return to the source.

**Completion gate:** A connected project can sync selected Confluence content, detect a changed page, and update its source version without losing provenance.

## Part 5 — v6: Secure API connections

**Branch:** `feat/v6-secure-api-connections`

**Goal:** Capture approved technical access without exposing or casually exercising customer secrets.

**Deliverables:**

- Define a generic connection model for API key, bearer token, basic auth, and OAuth 2.0 client credentials.
- Encrypt secrets server-side and ensure APIs, UI, logs, and errors never return secret values.
- Add connection scope, consent note, owner, expiry, and last-validation metadata.
- Add an explicit test-connection action with timeout, egress, redirect, and SSRF safeguards.
- Add revoke, replace, expired, invalid, and untested states.

**Completion gate:** Secrets can be stored, validated, rotated, and revoked without appearing in client storage, responses, logs, or test snapshots.

## Part 6 — v7: Ingestion and evidence pipeline

**Branch:** `feat/v7-evidence-pipeline`

**Goal:** Convert sources into normalized, traceable evidence that downstream analysis can safely consume.

**Deliverables:**

- Add durable background jobs with retry, cancellation, idempotency, and progress reporting.
- Parse supported files and Confluence pages into normalized content blocks.
- Preserve source version, page or section locator, heading path, and content offsets.
- Add chunking and retrieval interfaces without binding the domain to one model vendor.
- Expose ingestion status and actionable failures in the workspace.

**Completion gate:** A source can move through queued, processing, ready, failed, retried, and superseded states, and every normalized block resolves back to its exact source location.

## Part 7 — v8: Evidence-backed analysis engine

**Branch:** `feat/v8-analysis-engine`

**Goal:** Produce structured technical findings from ready sources and approved connections.

**Deliverables:**

- Define versioned schemas for all six output areas.
- Add a provider-neutral model interface and versioned analysis instructions.
- Orchestrate analysis runs with selected sources and explicit connection permissions.
- Require evidence references, confidence, assumptions, and unknowns for every finding.
- Validate generated output against schemas and quarantine invalid results.
- Record run status, model/configuration metadata, duration, token or cost metrics, and failure reason.

**Completion gate:** An FDE can start a run and receive schema-valid, versioned findings whose citations resolve to source evidence; unsupported claims are surfaced as unknowns or validation failures.

## Part 8 — v9: Integration understanding workspace

**Branch:** `feat/v9-integration-workspace`

**Goal:** Make the generated understanding navigable and useful for implementation work.

**Deliverables:**

- Add the system and data-flow integration map.
- Add searchable API inventory with endpoints, methods, auth, schemas, dependencies, and rate limits.
- Add auth-model, schema-mapping, and entity-relationship views.
- Add a risk and open-question register with severity, likelihood, impact, and mitigation fields.
- Add evidence drawers, confidence indicators, unknown states, filters, and cross-links between outputs.

**Completion gate:** Every required MVP output is findable from one project workspace, and an FDE can move from any finding to its supporting evidence and related technical objects.

## Part 9 — v10: Human review and handoff

**Branch:** `feat/v10-review-and-handoff`

**Goal:** Let the FDE turn machine-derived findings into an accountable, implementation-ready package.

**Deliverables:**

- Add draft, accepted, corrected, rejected, and needs-validation review states.
- Preserve the original generated value alongside human corrections and rationale.
- Add run-to-run diffs, stale-finding indicators, reviewer notes, and unresolved-question tracking.
- Add a project readiness summary and review checklist.
- Export a versioned Markdown and JSON handoff with diagrams, inventories, evidence references, risks, and unknowns.

**Completion gate:** A reviewed project can be exported and reconstructed with its sources, run version, human decisions, unresolved questions, and evidence trail intact.

## Part 10 — v11: Security and production readiness

**Branch:** `feat/v11-production-readiness`

**Goal:** Harden the complete workflow for real customer use and repeatable deployment.

**Deliverables:**

- Add authentication, organization/project authorization, and least-privilege roles.
- Enforce tenant isolation, audit logging, retention, deletion, backup, and recovery policies.
- Integrate a production secret manager and deployment-specific object storage.
- Add rate limiting, content-security policy, dependency and container scanning, and abuse controls.
- Add structured logs, metrics, traces, alerts, job dashboards, and operational runbooks.
- Add production deployment configuration plus end-to-end, accessibility, performance, failure-recovery, and security tests.

**Completion gate:** A staging deployment passes the agreed security review and end-to-end acceptance suite, including tenant isolation, secret leakage, deletion, retry, rollback, and recovery scenarios.

## Rules shared by all ten parts

Each part must:

- begin on its named branch created directly from the latest `dev`;
- keep migrations, contracts, UI states, tests, and documentation in the same PR when they belong to that version;
- include loading, empty, error, permission, and retry states for the behavior it introduces;
- preserve evidence provenance and redact secrets by default;
- avoid placeholder success states or unsupported generated claims;
- update this roadmap only when scope is deliberately changed;
- finish with a concise handoff containing branch name, files changed, validations run, and known limitations;
- remain local: the user will push the branch and raise the PR manually.

## Release checkpoints

- **After v4:** Real project and file-intake workflow.
- **After v6:** MVP inputs are present: documentation, Confluence, and approved API access.
- **After v8:** Evidence-backed analysis exists end to end.
- **After v9:** All six required outputs are usable in the workspace.
- **After v10:** FDE review and implementation handoff are complete.
- **After v11:** The system is ready for controlled production rollout.
