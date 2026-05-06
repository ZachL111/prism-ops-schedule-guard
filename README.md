# prism-ops-schedule-guard

`prism-ops-schedule-guard` is a focused JavaScript codebase around develop a JavaScript command-oriented project for schedule scenarios with log and snapshot fixtures, replay consistency checks, and single-node deterministic mode. It is meant to be easy to inspect, run, and extend without a hosted service.

## Prism Ops Schedule Guard Walkthrough

I would read the project from the outside in: command, fixture, model, then roadmap. That keeps the automation idea grounded in files that can be checked locally.

## Reason For The Project

This project keeps the domain idea close to the tests. That makes it useful as a reference implementation, a small experiment, or a starting point for a more specialized tool.

## Data Notes

`examples/extended_cases.csv` adds six named cases. I kept the names plain so failures are easy to read in a terminal: baseline, pressure, surge, degraded, recovery, and boundary.

## How It Is Put Together

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 167, with risk penalty 6, latency penalty 4, and weight bonus 4. The JavaScript version uses native modules and a small Node test path.

## Capabilities

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `recovery` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Command Examples

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Check The Work

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Where Things Live

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Possible Extensions

- Add malformed input fixtures so the failure path is as visible as the happy path.
- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Tradeoffs

The repository favors determinism over breadth. It does not pull live data, keep secrets, or depend on network access for verification.

## Getting It Running

Clone the repository, enter the directory, and run the verifier. No database server, cloud account, or token is required.
