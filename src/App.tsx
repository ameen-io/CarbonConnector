import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { AppShell } from "./components/AppShell";
import { LoadingState } from "./components/LoadingState";

const ProjectListPage = lazy(() => import("./routes/ProjectListPage"));
const NewProjectPage = lazy(() => import("./routes/NewProjectPage"));
const ProjectWorkspacePage = lazy(() => import("./routes/ProjectWorkspacePage"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));

function ProjectOverviewRedirect() {
  const { projectId } = useParams<{ projectId: string }>();

  return <Navigate to={`/projects/${projectId ?? "unknown"}/overview`} replace />;
}

export function App() {
  return (
    <Suspense fallback={<LoadingState label="Preparing workspace" />}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<ProjectListPage />} />
          <Route path="projects/new" element={<NewProjectPage />} />
          <Route path="projects/:projectId" element={<ProjectOverviewRedirect />} />
          <Route path="projects/:projectId/:section" element={<ProjectWorkspacePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
