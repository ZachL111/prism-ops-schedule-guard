import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 54,
    "capacity": 94,
    "latency": 26,
    "risk": 13,
    "weight": 8,
    "score": 52,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 74,
    "capacity": 75,
    "latency": 16,
    "risk": 15,
    "weight": 13,
    "score": 121,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 83,
    "capacity": 80,
    "latency": 19,
    "risk": 11,
    "weight": 9,
    "score": 140,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
