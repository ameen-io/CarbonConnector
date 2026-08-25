import { Link, NavLink, useParams } from "react-router-dom";

import { StatePanel } from "../components/StatePanel";
import NotFoundPage from "./NotFoundPage";

const workspaceSections = [
  ["overview", "Overview"],
  ["sources", "Sources"],
  ["connections", "Connections"],
  ["analysis", "Analysis runs"],
  ["integration-map", "Integration map"],
  ["api-inventory", "API inventory"],
  ["auth-model", "Auth model"],
  ["schema-mapping", "Schema mapping"],
  ["data-model", "Data model"],
  ["risks", "Risks"],
] as const;

type WorkspaceSection = (typeof workspaceSections)[number][0];

const sectionDescriptions: Record<WorkspaceSection, string> = {
  overview: "Project readiness and analysis status will be summarized here.",
  sources: "Uploaded documents and connected knowledge sources will appear here.",
  connections: "Approved API access and its validation state will appear here.",
  analysis: "Evidence-backed analysis runs and their status will appear here.",
  "integration-map": "Systems, actors, dependencies, and data flows will appear here.",
  "api-inventory": "Endpoints, methods, schemas, authentication, and limits will appear here.",
  "auth-model": "Identity actors, grants, scopes, and credential boundaries will appear here.",
  "schema-mapping": "Source and target field mappings, transformations, and gaps will appear here.",
  "data-model": "Entities, ownership, lifecycle, and relationships will appear here.",
  risks: "Evidence-backed risks, unknowns, and validation needs will appear here.",
};

function isWorkspaceSection(value: string | undefined): value is WorkspaceSection {
  return workspaceSections.some(([slug]) => slug === value);
}

export default function ProjectWorkspacePage() {
  const { projectId, section } = useParams<{ projectId: string; section: string }>();

  if (!projectId || !isWorkspaceSection(section)) {
    return <NotFoundPage />;
  }

  const sectionLabel = workspaceSections.find(([slug]) => slug === section)?.[1] ?? "Workspace";

  return (
    <main className="route-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Projects</Link>
        <span aria-hidden="true">/</span>
        <span>Workspace</span>
      </nav>
      <header className="route-heading route-heading-compact">
        <h1 className="page-title">Project workspace</h1>
        <p className="page-description">
          The route structure is ready; project data will be loaded from the Part 2 API.
        </p>
      </header>

      <div className="workspace-layout">
        <nav className="workspace-nav" aria-label="Project workspace">
          {workspaceSections.map(([slug, label]) => (
            <NavLink key={slug} to={`/projects/${projectId}/${slug}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <section className="workspace-content" aria-labelledby="section-title">
          <h2 id="section-title">{sectionLabel}</h2>
          <StatePanel
            compact
            title="No project data available"
            description={`${sectionDescriptions[section]} Persistence and real project state are intentionally deferred to the next roadmap part.`}
          />
        </section>
      </div>
    </main>
  );
}
