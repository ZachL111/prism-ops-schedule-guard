import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 53, slack: 34, drag: 32, confidence: 57 };
assert.equal(domainReviewScore(item), 101);
assert.equal(domainReviewLane(item), "hold");
