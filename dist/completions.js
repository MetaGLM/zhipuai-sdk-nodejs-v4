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

// lib/completions.ts
var Completions = class {
  constructor(app) {
    this.app = app;
  }
  create(options) {
    return __async(this, null, function* () {
      return this.app.post("/chat/completions", {
        "model": options.model,
        "request_id": options.request_id,
        "temperature": options.temperature,
        "top_p": options.top_p,
        "do_sample": options.do_sample,
        "max_tokens": options.max_tokens,
        "seed": options.seed,
        "messages": options.messages,
        "stop": options.stop,
        "sensitive_word_check": options.sensitive_word_check,
        "stream": options.stream,
        "tools": options.tools,
        "tool_choice": options.tool_choice
      }, {
        headers: options.extra_headers,
        responseType: options.stream ? "stream" : "json"
      });
    });
  }
};
export {
  Completions as default
};
//# sourceMappingURL=completions.js.map