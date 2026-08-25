export const app = `
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="/" aria-label="Integration Discovery home">
        <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
        <span>Integration Discovery</span>
      </a>
      <span class="version">v1 skeleton</span>
    </header>

    <main>
      <section class="workspace-heading" aria-labelledby="workspace-title">
        <div>
          <h1 id="workspace-title">Start with the customer&rsquo;s technical reality.</h1>
          <p>Bring together documentation and approved access before turning it into an implementation plan.</p>
        </div>
        <button type="button" disabled title="Project creation is not implemented in this skeleton">New project</button>
      </section>

      <section class="empty-workspace" aria-labelledby="empty-title">
        <div class="empty-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M10 8.75h18l10 10v20.5A2.75 2.75 0 0 1 35.25 42h-22.5A2.75 2.75 0 0 1 10 39.25V8.75Z" />
            <path d="M28 8.75v10h10M17 27h14M17 33h10" />
          </svg>
        </div>
        <h2 id="empty-title">No integration project yet</h2>
        <p>Project creation will become available with the intake and connection workflows. This shell makes the eventual process and deliverables visible without pretending they exist.</p>
      </section>

      <section class="workflow" aria-labelledby="workflow-title">
        <div class="section-heading">
          <h2 id="workflow-title">The intended workflow</h2>
          <p>Three deliberate stages, each designed to preserve the path from source material to technical decisions.</p>
        </div>
        <ol class="workflow-steps">
          <li><span class="step-number">1</span><div><h3>Bring in documentation</h3><p>Customer docs, knowledge-base pages, specifications, and reference material.</p><span class="status">Not implemented</span></div></li>
          <li><span class="step-number">2</span><div><h3>Connect approved access</h3><p>API credentials and technical access, with explicit customer consent and scope.</p><span class="status">Not implemented</span></div></li>
          <li><span class="step-number">3</span><div><h3>Review the integration picture</h3><p>Evidence-backed technical outputs that an FDE can turn into executable work.</p><span class="status">Not implemented</span></div></li>
        </ol>
      </section>

      <section class="deliverables" aria-labelledby="deliverables-title">
        <div class="section-heading">
          <h2 id="deliverables-title">What a project will make clear</h2>
          <p>These are output areas, not generated findings.</p>
        </div>
        <ul class="deliverable-list">
          <li><span>Integration map</span><small>Systems, actors, and paths</small></li>
          <li><span>API inventory</span><small>Endpoints, methods, limits, and dependencies</small></li>
          <li><span>Auth model</span><small>Identity, grants, scopes, and credential boundaries</small></li>
          <li><span>Schema mapping</span><small>Payloads, fields, transformations, and gaps</small></li>
          <li><span>Data model</span><small>Entities, ownership, lifecycle, and relationships</small></li>
          <li><span>Potential risks</span><small>Unknowns, constraints, and validation needs</small></li>
        </ul>
      </section>
    </main>

    <footer>
      <span>Integration Discovery</span>
      <span>Foundation only &mdash; no customer data is processed here.</span>
    </footer>
  </div>
`;
