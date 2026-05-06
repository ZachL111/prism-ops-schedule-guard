# Prism Ops Schedule Guard Walkthrough

This note is the quickest way to read the extra review model in `prism-ops-schedule-guard`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 101 | hold |
| stress | rename risk | 86 | hold |
| edge | operator cost | 156 | ship |
| recovery | idempotence | 157 | ship |
| stale | dry-run spread | 229 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `dry-run spread` against `rename risk`, not the raw score alone.
