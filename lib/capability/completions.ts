import BaseApi from "../core/baseApi.js";
import { CreateCompletionsOptions, CompletionsResponseMessage } from "../types/index.js";
import { IncomingMessage } from "http";

export default class Completions extends BaseApi {
    public async create(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage | IncomingMessage> {
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
            "tool_choice": options.toolChoice,
        }, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(this.processError)
    }
} 