"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var API_TOKEN_TTL_SECONDS = 3 * 60;
// const CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30
var generateToken = function (apiKey) {
    try {
        var _a = apiKey.split("."), api_key = _a[0], secret = _a[1];
        var payload = {
            "api_key": api_key,
            "exp": Math.round(Date.now() * 1000) + API_TOKEN_TTL_SECONDS * 1000,
            "timestamp": Math.round(Date.now() * 1000),
        };
        // algorithm = "HS256", headers = { "alg": "HS256", "sign_type": "SIGN" }
        var ret = (0, jsonwebtoken_1.sign)(payload, secret, {
            algorithm: "HS256",
            header: { alg: "HS256", typ: "SIGN" }
        });
        return ret;
    }
    catch (e) {
        throw "invalid api_key";
    }
};
exports.generateToken = generateToken;
