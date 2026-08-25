# Repository Working Agreement

## Version branches

Every implementation version after the current v1 skeleton must follow this workflow:

1. Start from the current local `dev` branch.
2. Confirm the working tree is clean and that the previous version has been merged back into `dev`.
3. Create a new branch named for exactly one roadmap version, using `feat/v<version>-<scope>`.
4. Implement only that version's agreed scope and completion gates.
5. Run the relevant lint, type-check, test, and production-build checks.
6. Leave the completed work checked out on its feature branch.
7. Do not push, open a pull request, or merge. The user owns those actions.

Do not stack a new version branch on an earlier feature branch. If `dev` has not received the previous version yet, stop and report that dependency instead of branching from unmerged work.

Documentation-only changes may use `docs/<scope>`, still branched directly from `dev`.

## Scope discipline

- Treat [ROADMAP.md](ROADMAP.md) as the version boundary.
- Preserve unrelated user changes.
- Do not simulate successful uploads, connectors, credentials, analyses, or generated findings.
- Derived technical findings must remain distinguishable from customer-provided evidence.
