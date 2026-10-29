# Aperture

**A session inspector for understanding AI-assisted coding work.** Aperture brings a coding session's timeline, context, changes, test evidence, and recorded rationale together so a reviewer can trace what was captured and what remains unknown.

> **Early prototype:** the current app uses synthetic examples. Real session import, persistent storage, provider integrations, and export are planned, not implemented.

## Explore the prototype

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. No credentials or provider connections are needed.

1. Open **Refresh-token refactor** and select **Run authentication tests** in the timeline.
2. Switch between **Tests** and **Evidence** to inspect the recorded failure.
3. Open **Findings**, then follow the source link back to the event.
4. Explore the linked Codex follow-up and the incomplete capture to see how missing evidence is represented.

## What this demonstrates

- A searchable, filterable catalog of synthetic Claude Code and Codex sessions.
- A coordinated timeline and inspector, with session, event, and tab selection represented in the URL.
- Recorded context, rationale, changes, tests, and source evidence shown in the context of the selected event.
- Resource links back to related events and advisory findings linked to their supporting evidence.
- A responsive interface with light and preliminary dark appearance.

Aperture distinguishes captured observations from assumptions: missing historical context, test coverage, and production verification are not reconstructed from current files. Findings do not enforce permissions, approve code, or authorize deployment. The examples are synthetic and are not a comparison of provider performance.

## Development

Requires Node.js 22 and npm. The lockfile was generated with Node 22.22.0 and npm 10.9.4.

```sh
npm install
npm run dev        # local development server
npm run typecheck  # TypeScript validation
npm test           # fixture behavior tests
npm run build      # static production build in dist/
```

The browser app is built with React, TypeScript, and Vite. The [clickable design reference](docs/design/wireframe.html) illustrates the broader product direction; Studio is a separate application and is not a dependency.

## Status and roadmap

This repository is a work in progress. The next milestones are a versioned domain and repository interface, accessible and responsive inspection refinements, normalized capture import with local persistence, and a read-only Codex history adapter. Portable evidence export and measured large-session performance are planned later. See [project progress](memory-bank/progress.md) for the current verification and limitations.

Native provider behavior has not been verified. There is no real session discovery, local import, SQLite database, Studio connection, live control, or deployed demo in this version. Mobile layouts, keyboard-only inspection, and accessibility have not yet been comprehensively tested.

## Static hosting

`npm run build` produces a static site in `dist/`. Selection currently uses query parameters, so static hosting must preserve them. No deployment is configured.
