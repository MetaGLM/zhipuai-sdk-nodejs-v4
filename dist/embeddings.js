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

// lib/baseApi.ts
var BaseApi = class {
  constructor(request) {
    this.request = request;
  }
  post(url, data, options) {
    return __async(this, null, function* () {
      return this.request.post(url, data, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch((err) => {
        const data2 = err.response.data;
        return Promise.reject(data2);
      });
    });
  }
};

// lib/embeddings.ts
var Embeddings = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      return this.post("/embeddings", {
        "input": options.input,
        "model": options.model,
        "encoding_format": options.encodingFormat,
        "user": options.user,
        "sensitive_word_check": options.sensitiveWordCheck
      }, options);
    });
  }
};
export {
  Embeddings as default
};
//# sourceMappingURL=embeddings.js.map