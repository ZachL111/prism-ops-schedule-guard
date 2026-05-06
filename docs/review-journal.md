# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 101, lane `hold`
- `stress`: `rename risk`, score 86, lane `hold`
- `edge`: `operator cost`, score 156, lane `ship`
- `recovery`: `idempotence`, score 157, lane `ship`
- `stale`: `dry-run spread`, score 229, lane `ship`

## Note

The repository should be understandable without pretending it is larger than it is.
