import { Link } from "react-router-dom";

import { StatePanel } from "../components/StatePanel";

export default function NewProjectPage() {
  return (
    <main className="route-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Projects</Link>
        <span aria-hidden="true">/</span>
        <span>New project</span>
      </nav>
      <header className="route-heading">
        <h1 className="page-title">Create a project</h1>
        <p className="page-description">
          This route is ready for the persisted project workflow planned for Part 2.
        </p>
      </header>
      <StatePanel
        title="Project creation is not connected yet"
        description="The next version will add the project model, API, validation, and persistence. No local-only project will be created in this foundation."
        action={
          <Link className="secondary-action" to="/">
            Back to projects
          </Link>
        }
      />
    </main>
  );
}
