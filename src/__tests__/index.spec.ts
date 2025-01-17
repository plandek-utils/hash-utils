import { describe, expect, it } from "vitest";

import { hashFromString, idFromComplex, sortedJSONFor } from "..";

describe("sortedJSONFor", () => {
  it("should sort keys deeply", () => {
    const input = {
      b: 2,
      a: 1,
      c: {
        d: 4,
        e: 3,
      },
    };
    expect(sortedJSONFor(input)).toBe(
      JSON.stringify({
        a: 1,
        b: 2,
        c: {
          d: 4,
          e: 3,
        },
      }),
    );
  });
});

describe("idFromComplex", () => {
  it("should generate an id with prefix", () => {
    const input = { foo: "bar" };
    const hash = hashFromString(sortedJSONFor(input));
    expect(idFromComplex("prefix", input)).toBe(`prefix--${hash}`);
  });

  it("should generate an id without prefix", () => {
    const input = { foo: "bar" };
    const hash = hashFromString(sortedJSONFor(input));
    expect(idFromComplex(null, input)).toBe(hash);
  });

  it("should handle complex objects", () => {
    const input = {
      nested: {
        properties: ["are", "sorted"],
        deep: true,
      },
      simple: "value",
    };
    const hash = hashFromString(sortedJSONFor(input));
    expect(idFromComplex("complex", input)).toBe(`complex--${hash}`);
  });

  it("hash should be the same for the same input", () => {
    const a = { foo: "bar", stuff: 1, nested: { deep: true, whatever: "this is" } };
    const b = { stuff: 1, foo: "bar", nested: { whatever: "this is", deep: true } };
    expect(idFromComplex(null, a)).toBe(idFromComplex(null, b));
  });

  it("determines hash", () => {
    const a = { foo: "bar", stuff: 1, nested: { deep: true, whatever: "this is" } };
    const expected = "sAcSRiNpatI8ZY3K_EfpGQMmsBUcoM8KIAuRz24LbZctHCEiG_aVXikN_b2NsNAOkes-65cuYCG2zdi5nl6HRw";
    expect(idFromComplex(null, a)).toEqual(expected);
  });
});
