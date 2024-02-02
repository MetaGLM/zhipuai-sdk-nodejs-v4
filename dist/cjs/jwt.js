"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const API_TOKEN_TTL_SECONDS = 3 * 60;
// const CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30
const generateToken = (apiKey) => {
    try {
        const [api_key, secret] = apiKey.split(".");
        const payload = {
            "api_key": api_key,
            "exp": Math.round(Date.now() * 1000) + API_TOKEN_TTL_SECONDS * 1000,
            "timestamp": Math.round(Date.now() * 1000),
        };
        // algorithm = "HS256", headers = { "alg": "HS256", "sign_type": "SIGN" }
        //@ts-ignore 不用管
        const ret = (0, jsonwebtoken_1.sign)(payload, secret, {
            algorithm: "HS256",
            header: { alg: "HS256", sign_type: "SIGN" }
        });
        return ret;
    }
    catch (e) {
        throw "invalid api_key";
    }
};
exports.generateToken = generateToken;
//# sourceMappingURL=jwt.js.map