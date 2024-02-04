"use strict";
import assert from "assert";
import { generateToken } from "./jwt.js";
import Axios from "axios";
import Completions from "./completions.js";
export class ZhipuAI {
  constructor(options) {
    this.options = options;
    if (!options.apiKey)
      options.apiKey = process.env["ZHIPUAI_API_KEY"] || "";
    assert.ok(options.apiKey, "\u672A\u63D0\u4F9Bapi_key\uFF0C\u8BF7\u901A\u8FC7\u53C2\u6570\u6216\u73AF\u5883\u53D8\u91CF\u63D0\u4F9B");
    if (!options.baseUrl)
      options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || "";
    if (!options.baseUrl)
      options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
    this.request = Axios.create({
      baseURL: options.baseUrl,
      timeout: options.timeout,
      headers: options.customHeaders
    });
    this.request.interceptors.request.use((config) => {
      config.headers.set(this.authHeaders());
      return config;
    });
  }
  __esModule = false;
  request;
  async post(url, data, config) {
    return this.request.post(url, data, config);
  }
  async createCompletions(options) {
    return new Completions(this).create(options);
  }
  authHeaders() {
    const token = generateToken(this.options.apiKey);
    return { "Authorization": token };
  }
}
export default ZhipuAI;
//# sourceMappingURL=zhipu-ai.js.map
