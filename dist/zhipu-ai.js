import assert from "assert";
import { generateToken } from "./jwt";
import axios from "axios";
import Completions from "./completions";
export default class ZhipuAI {
    options;
    request;
    constructor(options) {
        this.options = options;
        if (!options.apiKey)
            options.apiKey = process.env['ZHIPUAI_API_KEY'] || '';
        assert.ok(options.apiKey, "未提供api_key，请通过参数或环境变量提供");
        if (!options.baseUrl)
            options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || '';
        if (!options.baseUrl)
            options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
        this.request = axios.create({
            baseURL: options.baseUrl,
            timeout: options.timeout,
            headers: options.customHeaders
        });
        this.request.interceptors.request.use((config) => {
            config.headers.set(this.authHeaders());
            return config;
        });
    }
    async post(url, data, config) {
        return this.request.post(url, data, config);
    }
    async createCompletions(options) {
        return new Completions(this).create(options);
    }
    authHeaders() {
        const token = generateToken(this.options.apiKey);
        console.log(token);
        return { "Authorization": token };
    }
}
//# sourceMappingURL=zhipu-ai.js.map