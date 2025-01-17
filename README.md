# @plandek-utils/hash-utils

TypeScript utils for generating hashes and sorting JSON.

## Usage

### `sortedJSONFor(input: Record<string, unknown>): string`

```ts
import { sortedJSONFor } from "@plandek-utils/hash-utils";

const obj = { name: "John", age: 30, deep: { b: 2, a: 4 } };
console.log(sortedJSONFor(obj));
// OUTPUT: {"age":30,"deep":{"a":4,"b":2},"name":"John"}
```

### `idFromComplex(prefix: string | null, input: Record<string, unknown>): string`

Makes a hash, using `hashFromString()` of the serialised sorted json of the input object. Then it optionally prepends the given prefix.

```ts
import { idFromComplex } from "@plandek-utils/hash-utils";

const obj = { foo: "bar", stuff: 1, nested: { deep: true, whatever: "this is" } };
console.log(idFromComplex("my-pref", obj));
// OUTPUT: my-pref--sAcSRiNpatI8ZY3K_EfpGQMmsBUcoM8KIAuRz24LbZctHCEiG_aVXikN_b2NsNAOkes-65cuYCG2zdi5nl6HRw
```

### `hashFromString(prefix: string | null, input: Record<string, unknown>): string`

Makes a hash using SHA-512, in base64, replacing characters to be URL safe:

-  `/`: `_`
-  `+`: `-`
-  `=`: empty string


```ts
import { idFromComplex } from "@plandek-utils/hash-utils";

const str = '{"age":30,"deep":{"a":4,"b":2},"name":"John"}';
console.log(hashFromString(str));
// OUTPUT: sAcSRiNpatI8ZY3K_EfpGQMmsBUcoM8KIAuRz24LbZctHCEiG_aVXikN_b2NsNAOkes-65cuYCG2zdi5nl6HRw
```


## Development

This package is developed with deno 2. The production code is in `src/mod.ts` and its test in
`src/__tests__/mod.spec.ts`

- `deno fmt src`: format files
- `deno lint src`: lint files
- `deno dev`: run tests on each change in mod.ts
- `deno run test && deno run lcov && deno run html`: run the tests with coverage, then convert to lcov and prepare in
  `html_cov` an HTML export of the coverage info.
