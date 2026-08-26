import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { App } from "./App";

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe("application foundation", () => {
  it("preserves the v1 project-list empty state", async () => {
    renderRoute("/");

    expect(
      await screen.findByRole("heading", { name: /customer’s technical reality/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("No integration project yet")).toBeInTheDocument();
  });

  it("routes to the honest project-creation state", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    await user.click(await screen.findByRole("link", { name: "New project" }));

    expect(await screen.findByRole("heading", { name: "Create a project" })).toBeInTheDocument();
    expect(screen.getByText("Project creation is not connected yet")).toBeInTheDocument();
  });

  it("exposes typed workspace section routes without simulated data", async () => {
    renderRoute("/projects/customer-1/api-inventory");

    expect(await screen.findByRole("heading", { name: "API inventory" })).toBeInTheDocument();
    expect(screen.getByText("No project data available")).toBeInTheDocument();
    expect(screen.getByText(/intentionally deferred/i)).toBeInTheDocument();
  });

  it("renders an intentional state for unknown routes", async () => {
    renderRoute("/not-a-route");

    expect(
      await screen.findByRole("heading", { name: "This route is not available" }),
    ).toBeInTheDocument();
  });
});
