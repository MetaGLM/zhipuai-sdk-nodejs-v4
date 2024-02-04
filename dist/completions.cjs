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

// lib/completions.ts
var completions_exports = {};
__export(completions_exports, {
  default: () => Completions
});
module.exports = __toCommonJS(completions_exports);
var Completions = class {
  constructor(app) {
    this.app = app;
  }
  create(options) {
    return __async(this, null, function* () {
      return this.app.post("/chat/completions", {
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
        responseType: options.stream ? "stream" : "json"
      });
    });
  }
};
//# sourceMappingURL=completions.cjs.map