"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  hashFromString: () => hashFromString,
  idFromComplex: () => idFromComplex,
  sortedJSONFor: () => sortedJSONFor
});
module.exports = __toCommonJS(index_exports);
var import_node_crypto = require("crypto");
var import_sort_keys = __toESM(require("sort-keys"));
function sortedJSONFor(input) {
  return JSON.stringify((0, import_sort_keys.default)(input, { deep: true }));
}
function idFromComplex(prefix, input) {
  const hash = hashFromString(sortedJSONFor(input));
  const pre = prefix ? `${prefix}--` : "";
  return `${pre}${hash}`;
}
function hashFromString(str) {
  const b64 = (0, import_node_crypto.createHash)("sha512").update(str).digest("base64");
  return b64.replace(REGEX_BASE64_URL, (x) => BASE64_URL_REPLACEMENT_MAP[x]);
}
var REGEX_BASE64_URL = /[=+\/]/g;
var BASE64_URL_REPLACEMENT_MAP = {
  "/": "_",
  "+": "-",
  "=": ""
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hashFromString,
  idFromComplex,
  sortedJSONFor
});
//# sourceMappingURL=index.js.map