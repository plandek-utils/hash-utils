// src/index.ts
import { createHash } from "node:crypto";
import sortKeys from "sort-keys";
function sortedJSONFor(input) {
  return JSON.stringify(sortKeys(input, { deep: true }));
}
function idFromComplex(prefix, input) {
  const hash = hashFromString(sortedJSONFor(input));
  const pre = prefix ? `${prefix}--` : "";
  return `${pre}${hash}`;
}
function hashFromString(str) {
  const b64 = createHash("sha512").update(str).digest("base64");
  return b64.replace(REGEX_BASE64_URL, (x) => BASE64_URL_REPLACEMENT_MAP[x]);
}
var REGEX_BASE64_URL = /[=+\/]/g;
var BASE64_URL_REPLACEMENT_MAP = {
  "/": "_",
  "+": "-",
  "=": ""
};
export {
  hashFromString,
  idFromComplex,
  sortedJSONFor
};
//# sourceMappingURL=index.mjs.map