import { Link } from "react-router-dom";

import { StatePanel } from "../components/StatePanel";

export default function NotFoundPage() {
  return (
    <main className="route-page">
      <header className="route-heading">
        <h1 className="page-title">This route is not available</h1>
        <p className="page-description">
          The address does not match a route in the current application foundation.
        </p>
      </header>
      <StatePanel
        title="Nothing was found here"
        description="Return to the project list to continue."
        action={
          <Link className="secondary-action" to="/">
            Back to projects
          </Link>
        }
      />
    </main>
  );
}
