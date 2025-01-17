import { createHash } from "node:crypto";
import sortKeys from "sort-keys";

/**
 * JSON.stringify with the object keys deeply sorted
 *
 * @param input Object to stringify
 * @returns JSON String
 */
export function sortedJSONFor(input: Record<string, unknown>): string {
  return JSON.stringify(sortKeys(input, { deep: true }));
}

/**
 * Creates an id with the hash from a JSON object, with an optional prefix. The hash is based on the sorted JSON string.
 *
 * @param prefix Optional prefix for the id (e.g. "my-prefix--HASH"). If blank, then the id returned will be just the hash.
 * @param input Object to serialize and hash
 * @returns
 */
export function idFromComplex(prefix: string | null, input: Record<string, unknown>): string {
  const hash = hashFromString(sortedJSONFor(input));
  const pre = prefix ? `${prefix}--` : "";
  return `${pre}${hash}`;
}

/**
 * Makes a hash from a string, using SHA-512 in URL-safe base64 encoding.
 *
 * @param str
 * @returns
 */
export function hashFromString(str: string): string {
  const b64 = createHash("sha512").update(str).digest("base64");
  return b64.replace(REGEX_BASE64_URL, (x) => BASE64_URL_REPLACEMENT_MAP[x]);
}

const REGEX_BASE64_URL = /[=+\/]/g;
const BASE64_URL_REPLACEMENT_MAP: Record<string, string> = {
  "/": "_",
  "+": "-",
  "=": "",
};
