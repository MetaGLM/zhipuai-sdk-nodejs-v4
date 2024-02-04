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
var completions_exports = {};
__export(completions_exports, {
  default: () => Completions
});
module.exports = __toCommonJS(completions_exports);
class Completions {
  constructor(app) {
    this.app = app;
  }
  async create(options) {
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
  }
}
//# sourceMappingURL=completions.js.map
