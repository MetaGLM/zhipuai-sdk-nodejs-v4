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
var zhipu_ai_exports = {};
__export(zhipu_ai_exports, {
  ZhipuAI: () => ZhipuAI,
  default: () => zhipu_ai_default
});
module.exports = __toCommonJS(zhipu_ai_exports);
var import_assert = __toESM(require("assert"), 1);
var import_jwt = require("./jwt.js");
var import_axios = __toESM(require("axios"), 1);
var import_completions = __toESM(require("./completions.js"), 1);
class ZhipuAI {
  constructor(options) {
    this.options = options;
    if (!options.apiKey)
      options.apiKey = process.env["ZHIPUAI_API_KEY"] || "";
    import_assert.default.ok(options.apiKey, "\u672A\u63D0\u4F9Bapi_key\uFF0C\u8BF7\u901A\u8FC7\u53C2\u6570\u6216\u73AF\u5883\u53D8\u91CF\u63D0\u4F9B");
    if (!options.baseUrl)
      options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || "";
    if (!options.baseUrl)
      options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
    this.request = import_axios.default.create({
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
    return new import_completions.default(this).create(options);
  }
  authHeaders() {
    const token = (0, import_jwt.generateToken)(this.options.apiKey);
    return { "Authorization": token };
  }
}
var zhipu_ai_default = ZhipuAI;
//# sourceMappingURL=zhipu-ai.js.map
