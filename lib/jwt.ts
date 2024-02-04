import jsonwebtoken from "jsonwebtoken"


const API_TOKEN_TTL_SECONDS = 3 * 60

// const CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30

export const generateToken = (apiKey: string) => {
    try {
        const [api_key, secret] = apiKey.split(".")
        const payload = {
            "api_key": api_key,
            "exp": Math.round(Date.now() * 1000) + API_TOKEN_TTL_SECONDS * 1000,
            "timestamp": Math.round(Date.now() * 1000),
        }
        // algorithm = "HS256", headers = { "alg": "HS256", "sign_type": "SIGN" }
        //@ts-ignore 不用管
        const ret = jsonwebtoken.sign(payload, secret, {
            algorithm: "HS256",
            header: { alg: "HS256", sign_type: "SIGN" }
        })
        return ret
    } catch (e) {
        throw "invalid api_key"
    }
}