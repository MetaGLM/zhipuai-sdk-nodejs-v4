"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// lib/core/baseApi.ts
var baseApi_exports = {};
__export(baseApi_exports, {
  default: () => BaseApi
});
module.exports = __toCommonJS(baseApi_exports);
var BaseApi = class {
  constructor(request) {
    this.request = request;
  }
  processError(err) {
    var _a, _b;
    const data = (_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) != null ? _b : err;
    return Promise.reject(data);
  }
  get(url, params, options) {
    return __async(this, null, function* () {
      return this.request.get(url, {
        params,
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
  post(url, data, options) {
    return __async(this, null, function* () {
      return this.request.post(url, data, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
  postForm(url, data, options) {
    return __async(this, null, function* () {
      return this.request.postForm(url, data, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
};
//# sourceMappingURL=baseApi.cjs.map