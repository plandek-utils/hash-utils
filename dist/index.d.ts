/**
 * JSON.stringify with the object keys deeply sorted
 *
 * @param input Object to stringify
 * @returns JSON String
 */
export declare function sortedJSONFor(input: Record<string, unknown>): string;
/**
 * Creates an id with the hash from a JSON object, with an optional prefix. The hash is based on the sorted JSON string.
 *
 * @param prefix Optional prefix for the id (e.g. "my-prefix--HASH"). If blank, then the id returned will be just the hash.
 * @param input Object to serialize and hash
 * @returns
 */
export declare function idFromComplex(prefix: string | null, input: Record<string, unknown>): string;
/**
 * Makes a hash from a string, using SHA-512 in URL-safe base64 encoding.
 *
 * @param str
 * @returns
 */
export declare function hashFromString(str: string): string;
