// lib/jwt.ts
import jsonwebtoken from "jsonwebtoken";
var API_TOKEN_TTL_SECONDS = 3 * 60;
var generateToken = (apiKey) => {
  try {
    const [api_key, secret] = apiKey.split(".");
    const payload = {
      "api_key": api_key,
      "exp": Math.round(Date.now() * 1e3) + API_TOKEN_TTL_SECONDS * 1e3,
      "timestamp": Math.round(Date.now() * 1e3)
    };
    const ret = jsonwebtoken.sign(payload, secret, {
      algorithm: "HS256",
      header: { alg: "HS256", sign_type: "SIGN" }
    });
    return ret;
  } catch (e) {
    throw "invalid api_key";
  }
};
export {
  generateToken
};
//# sourceMappingURL=jwt.js.map