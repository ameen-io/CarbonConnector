# Integration Discovery — v1 skeleton

A deliberately small starting point for an FDE workflow that turns customer documentation and approved API access into an integration-ready technical understanding.

## What is here

- A minimal Vite workspace shell.
- A first-run empty state for the workflow: documentation, access, and analysis.
- Placeholders for the six intended outputs: integration map, API inventory, auth model, schema mapping, data model, and potential risks.
- Product and architecture notes so future work has a clear boundary.

## What is deliberately not here

- No file storage or Confluence connector.
- No credential persistence or OAuth flow.
- No document parsing, API discovery, AI analysis, or generated results.
- No mock success states.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Use `npm.cmd run build` to create the production bundle in `dist/`.

## Suggested next increments

1. Define the project and document-source data model.
2. Add a secure connector/credential boundary.
3. Build ingestion and extraction jobs.
4. Add reviewable evidence-backed analysis outputs.
