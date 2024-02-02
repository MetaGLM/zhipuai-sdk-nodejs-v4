"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Completions {
    app;
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
            "tool_choice": options.tool_choice,
        }, {
            headers: options.extra_headers,
            responseType: options.stream ? 'stream' : 'json'
        });
    }
}
exports.default = Completions;
//# sourceMappingURL=completions.js.map