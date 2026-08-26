import { Link } from "react-router-dom";

import { StatePanel } from "../components/StatePanel";

const workflowSteps = [
  {
    title: "Bring in documentation",
    description: "Customer docs, knowledge-base pages, specifications, and reference material.",
  },
  {
    title: "Connect approved access",
    description: "API credentials and technical access, with explicit customer consent and scope.",
  },
  {
    title: "Review the integration picture",
    description: "Evidence-backed technical outputs that an FDE can turn into executable work.",
  },
];

const deliverables = [
  ["Integration map", "Systems, actors, and paths"],
  ["API inventory", "Endpoints, methods, limits, and dependencies"],
  ["Auth model", "Identity, grants, scopes, and credential boundaries"],
  ["Schema mapping", "Payloads, fields, transformations, and gaps"],
  ["Data model", "Entities, ownership, lifecycle, and relationships"],
  ["Potential risks", "Unknowns, constraints, and validation needs"],
];

export default function ProjectListPage() {
  return (
    <main>
      <section className="workspace-heading" aria-labelledby="workspace-title">
        <div>
          <h1 id="workspace-title">Start with the customer&rsquo;s technical reality.</h1>
          <p>
            Bring together documentation and approved access before turning it into an
            implementation plan.
          </p>
        </div>
        <Link className="action-button" to="/projects/new">
          New project
        </Link>
      </section>

      <StatePanel
        title="No integration project yet"
        description="Project persistence arrives in Part 2. This foundation exposes the real route and product structure without pretending a project already exists."
      />

      <section className="workflow" aria-labelledby="workflow-title">
        <div className="section-heading">
          <h2 id="workflow-title">The intended workflow</h2>
          <p>
            Three deliberate stages, each designed to preserve the path from source material to
            technical decisions.
          </p>
        </div>
        <ol className="workflow-steps">
          {workflowSteps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="status">Not implemented</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="deliverables" aria-labelledby="deliverables-title">
        <div className="section-heading">
          <h2 id="deliverables-title">What a project will make clear</h2>
          <p>These are output areas, not generated findings.</p>
        </div>
        <ul className="deliverable-list">
          {deliverables.map(([title, description]) => (
            <li key={title}>
              <span>{title}</span>
              <small>{description}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
