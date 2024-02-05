// lib/core/jwt.ts
import jsonwebtoken from "jsonwebtoken";
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
    const ret = jsonwebtoken.sign(payload, secret, {
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
export {
  generateToken
};
//# sourceMappingURL=jwt.js.map