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
export {
  Completions,
  Embeddings,
  Images
};
//# sourceMappingURL=index.js.map