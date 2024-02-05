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

// lib/core/jwt.ts
var jwt_exports = {};
__export(jwt_exports, {
  generateToken: () => generateToken
});
module.exports = __toCommonJS(jwt_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var API_TOKEN_TTL_SECONDS = 3 * 60;
var CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30;
var tokenCache = {};
var generateToken = (apiSecretKey, cache = true) => {
  try {
    if (tokenCache[apiSecretKey] && Date.now() - tokenCache[apiSecretKey].createAt < CACHE_TTL_SECONDS * 1e3) {
      return tokenCache[apiSecretKey].token;
    }
    const [apiKey, secret] = apiSecretKey.split(".");
    const payload = {
      "api_key": apiKey,
      "exp": Math.round(Date.now() * 1e3) + API_TOKEN_TTL_SECONDS * 1e3,
      "timestamp": Math.round(Date.now() * 1e3)
    };
    const ret = import_jsonwebtoken.default.sign(payload, secret, {
      algorithm: "HS256",
      header: { alg: "HS256", sign_type: "SIGN" }
    });
    if (cache) {
      tokenCache[apiSecretKey] = {
        token: ret,
        createAt: Date.now()
      };
    }
    return ret;
  } catch (e) {
    throw "invalid api_key";
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateToken
});
//# sourceMappingURL=jwt.cjs.map