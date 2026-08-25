# v1 Skeleton Architecture

This repository currently contains a Vite, React, and TypeScript application foundation. It establishes frontend routes, states, and domain contracts without selecting backend services, vendors, or data-processing approaches.

## Future workflow boundary

```text
Customer documentation + approved technical access
                    |
                    v
           source intake / connection setup
                    |
                    v
       evidence-backed technical interpretation
                    |
                    v
Integration map | API inventory | Auth model | Schema mapping | Data model | Risks
```

## Suggested domain areas

| Area        | Responsibility                                                   | Not implemented in v1                  |
| ----------- | ---------------------------------------------------------------- | -------------------------------------- |
| Projects    | Groups a customer engagement and its outputs.                    | Storage and access controls            |
| Sources     | Represents uploaded documents and connected knowledge bases.     | Uploads, Confluence access, sync       |
| Connections | Represents approved API or platform access.                      | OAuth, secrets, credential persistence |
| Evidence    | Keeps references between source material and technical findings. | Extraction and citations               |
| Analysis    | Produces and reviews the six technical output views.             | Parsing, generation, approval workflow |

## Non-negotiable future boundaries

- Keep credentials out of browser storage and source control.
- Separate customer-provided evidence from derived recommendations.
- Record the source and confidence of technical conclusions.
- Require explicit approval before using connected API access beyond validation.
