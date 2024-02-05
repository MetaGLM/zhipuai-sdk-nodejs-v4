import jsonwebtoken from "jsonwebtoken"

const API_TOKEN_TTL_SECONDS = 3 * 60
const CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30
const tokenCache: {
    [key: string]: {
        token: string,
        createAt: number
    }
} = {}

export const generateToken = (apiSecretKey: string, cache: boolean = true): string => {
    try {
        if (tokenCache[apiSecretKey] && Date.now() - tokenCache[apiSecretKey].createAt < (CACHE_TTL_SECONDS * 1000)) {
            return tokenCache[apiSecretKey].token
        }

        const [apiKey, secret] = apiSecretKey.split(".")
        const payload = {
            "api_key": apiKey,
            "exp": Math.round(Date.now() * 1000) + API_TOKEN_TTL_SECONDS * 1000,
            "timestamp": Math.round(Date.now() * 1000),
        }
        // algorithm = "HS256", headers = { "alg": "HS256", "sign_type": "SIGN" }
        //@ts-ignore 不用管
        const ret = jsonwebtoken.sign(payload, secret, {
            algorithm: "HS256",
            header: { alg: "HS256", sign_type: "SIGN" }
        })
        if (cache) {
            tokenCache[apiSecretKey] = {
                token: ret,
                createAt: Date.now()
            }
        }
        return ret
    } catch (e) {
        throw "invalid api_key"
    }
}
