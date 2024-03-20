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

// lib/capability/index.ts
var capability_exports = {};
__export(capability_exports, {
  Completions: () => Completions,
  Embeddings: () => Embeddings,
  Images: () => Images
});
module.exports = __toCommonJS(capability_exports);

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

// lib/capability/completions.ts
var Completions = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      return this.request.post("/chat/completions", {
        "model": options.model,
        "request_id": options.requestId,
        "temperature": options.temperature,
        "top_p": options.topP,
        "do_sample": options.doSample,
        "max_tokens": options.maxTokens,
        "seed": options.seed,
        "messages": options.messages,
        "stop": options.stop,
        "sensitive_word_check": options.sensitiveWordCheck,
        "stream": options.stream,
        "tools": options.tools,
        "tool_choice": options.toolChoice
      }, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
};

// lib/capability/images.ts
var Images = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      return this.request.post("/images/generations", {
        "prompt": options.prompt,
        "model": options.model,
        "n": options.n,
        "quality": options.quality,
        "response_format": options.responseFormat,
        "size": options.size,
        "style": options.style,
        "user": options.user
      }, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
};

// lib/capability/embeddings.ts
var Embeddings = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      return this.request.post("/embeddings", {
        "input": options.input,
        "model": options.model,
        "encoding_format": options.encodingFormat,
        "user": options.user,
        "sensitive_word_check": options.sensitiveWordCheck
      }, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Completions,
  Embeddings,
  Images
});
//# sourceMappingURL=index.cjs.map