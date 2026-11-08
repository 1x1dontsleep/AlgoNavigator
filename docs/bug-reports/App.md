# src/App.test.tsx

## Scenarios covered

- Homepage displays the imported panoramic map, exactly four enabled gem
  buttons, and no card containers or availability/replay labels.
- Clicking the three reserved modules leaves the route unchanged without alerts.
- Clicking Stack triggers real hash navigation to the lesson.
- Entering and leaving Stack preserves the existing lesson playback UI and
  requires neither Python initialization nor a tutor connection.
- Entering alone awards no gem. Completing Trial of Stones awards one;
  replaying does not duplicate it, and remounting restores saved progress.
- Direct `/#/stack` entry and navigation back to the map work.
- Unknown routes and malformed saved data safely show the map.
- Blocked/full storage does not break completion; a warning explains that
  progress cannot survive refresh, and the current session retains its gem.

## Why this test exists

The navigation layer changes the application entrypoint without replacing
the existing game. Integration tests ensure the map and game are connected,
completion is earned rather than awarded on entry, and browser persistence
cannot crash the learning flow.

## Known gaps

- DOM assertions do not prove browser layout, illustration quality, or real
  browser back/forward timing. Navigation tests explicitly dispatch hash events.
- Persistence is verified by remounting with retained localStorage; these are
  not browser-driven refresh tests.
- The gem milestone currently means Trial of Stones completion, not completion
  of the future Stairway Repair and Forked Path rooms.

## Status

Last verified: 2026-11-07 — 6/6 passing (`npm run test:report`); see
[`docs/TEST-RESULTS.md`](../TEST-RESULTS.md) for the per-case record.
