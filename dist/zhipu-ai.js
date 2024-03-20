var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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

// lib/zhipu-ai.ts
import assert from "assert";

// lib/core/jwt.ts
import jsonwebtoken from "jsonwebtoken";
var API_TOKEN_TTL_SECONDS = 3 * 60;
var CACHE_TTL_SECONDS = API_TOKEN_TTL_SECONDS - 30;
var tokenCache = {};
var generateToken = (apiSecretKey, cache = true) => {
  try {
    if (tokenCache[apiSecretKey] && Date.now() - tokenCache[apiSecretKey].createAt < CACHE_TTL_SECONDS * 1e3) {
      return tokenCache[apiSecretKey].token;
    }
    const [apiKey, secret] = apiSecretKey.split(".");
    const payload = {
      "api_key": apiKey,
      "exp": Math.round(Date.now() * 1e3) + API_TOKEN_TTL_SECONDS * 1e3,
      "timestamp": Math.round(Date.now() * 1e3)
    };
    const ret = jsonwebtoken.sign(payload, secret, {
      algorithm: "HS256",
      header: { alg: "HS256", sign_type: "SIGN" }
    });
    if (cache) {
      tokenCache[apiSecretKey] = {
        token: ret,
        createAt: Date.now()
      };
    }
    return ret;
  } catch (e) {
    throw "invalid api_key";
  }
};

// lib/core/request.ts
import Axios from "axios";
var Request = class {
  constructor(config, authHeaders) {
    __publicField(this, "request");
    this.request = Axios.create(config);
    this.request.interceptors.request.use((config2) => {
      config2.headers.set(authHeaders());
      return config2;
    });
  }
  post(url, data, config) {
    return __async(this, null, function* () {
      return this.request.post(url, data, config).then((res) => res.data);
    });
  }
  postForm(url, data, config) {
    return __async(this, null, function* () {
      return this.request.post(url, data, config).then((res) => res.data);
    });
  }
  get(url, config) {
    return __async(this, null, function* () {
      return this.request.get(url, config).then((res) => res.data);
    });
  }
  put(url, data, config) {
    return __async(this, null, function* () {
      return this.request.put(url, data, config).then((res) => res.data);
    });
  }
  delete(url, config) {
    return __async(this, null, function* () {
      return this.request.delete(url, config).then((res) => res.data);
    });
  }
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

// lib/zhipu-ai.ts
var ZhipuAI = class {
  constructor(options = {}) {
    this.options = options;
    __publicField(this, "__esModule", false);
    __publicField(this, "request");
    __publicField(this, "completions");
    __publicField(this, "images");
    __publicField(this, "embeddings");
    __publicField(this, "files");
    __publicField(this, "apiKey");
    var _a;
    this.apiKey = process.env["ZHIPUAI_API_KEY"] || "";
    if (options.apiKey) {
      this.apiKey = options.apiKey;
    }
    assert.ok(this.apiKey, "\u672A\u63D0\u4F9Bapi_key\uFF0C\u8BF7\u901A\u8FC7\u53C2\u6570\u6216\u73AF\u5883\u53D8\u91CF\u63D0\u4F9B");
    if (!options.baseUrl)
      options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || "";
    if (!options.baseUrl)
      options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
    options.cacheToken = (_a = options.cacheToken) != null ? _a : true;
    this.request = new Request({
      timeout: options.timeout,
      headers: options.customHeaders,
      baseURL: options.baseUrl
    }, this.authHeaders.bind(this));
    this.completions = new Completions(this.request);
    this.images = new Images(this.request);
    this.embeddings = new Embeddings(this.request);
    this.files = new Files(this.request);
  }
  createCompletions(options) {
    return __async(this, null, function* () {
      return this.completions.create(options);
    });
  }
  createImages(options) {
    return __async(this, null, function* () {
      return this.images.create(options);
    });
  }
  createEmbeddings(options) {
    return __async(this, null, function* () {
      return this.embeddings.create(options);
    });
  }
  createFiles(options) {
    return __async(this, null, function* () {
      return this.files.create(options);
    });
  }
  findFiles() {
    return __async(this, arguments, function* (options = {}) {
      return this.files.findList(options);
    });
  }
  authHeaders() {
    const token = generateToken(this.apiKey, this.options.cacheToken);
    return { "Authorization": token };
  }
};
var zhipu_ai_default = ZhipuAI;
export {
  ZhipuAI,
  zhipu_ai_default as default
};
//# sourceMappingURL=zhipu-ai.js.map