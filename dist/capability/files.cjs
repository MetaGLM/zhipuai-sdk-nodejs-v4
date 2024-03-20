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

// lib/capability/files.ts
var files_exports = {};
__export(files_exports, {
  default: () => Files
});
module.exports = __toCommonJS(files_exports);

// lib/core/baseApi.ts
var BaseApi = class {
  constructor(request) {
    this.request = request;
  }
  processError(err) {
    var _a, _b;
    const data = (_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) != null ? _b : err;
    return Promise.reject(data);
  }
};

// lib/capability/files.ts
var Files = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      const formData = new FormData();
      formData.append("purpose", options.purpose);
      formData.append("file", options.file);
      return this.request.postForm("/files", formData, options).catch(this.processError);
    });
  }
  findList(options) {
    return __async(this, null, function* () {
      return this.request.get("/files", {
        params: {
          "purpose": options.purpose,
          "limit": options.limit,
          "after": options.after,
          "order": options.order
        },
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      });
    });
  }
};
//# sourceMappingURL=files.cjs.map