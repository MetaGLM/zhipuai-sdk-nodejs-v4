"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
const jwt_1 = require("./jwt");
const axios_1 = tslib_1.__importDefault(require("axios"));
const completions_1 = tslib_1.__importDefault(require("./completions"));
class ZhipuAI {
    options;
    request;
    constructor(options) {
        this.options = options;
        if (!options.apiKey)
            options.apiKey = process.env['ZHIPUAI_API_KEY'] || '';
        assert_1.default.ok(options.apiKey, "未提供api_key，请通过参数或环境变量提供");
        if (!options.baseUrl)
            options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || '';
        if (!options.baseUrl)
            options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
        this.request = axios_1.default.create({
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
        return new completions_1.default(this).create(options);
    }
    authHeaders() {
        const token = (0, jwt_1.generateToken)(this.options.apiKey);
        console.log(token);
        return { "Authorization": token };
    }
}
exports.default = ZhipuAI;
//# sourceMappingURL=zhipu-ai.js.map