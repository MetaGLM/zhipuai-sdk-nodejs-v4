import BaseApi from "./baseApi";

export type MessageOptions = {
    role: "system" | "user" | "assistant" | "function"
    content: string
}

export type CreateCompletionsOptions = {
    model: string,
    messages: Array<MessageOptions>,
    requestId?: string,
    doSample?: boolean,
    stream?: boolean,
    temperature?: number,
    topP?: number,
    maxTokens?: number,
    seed?: number,
    stop?: Array<string>,
    sensitiveWordCheck?: object,
    tools?: object,
    toolChoice?: string,
    extraHeaders?: object,
    timeout?: number,
}

export type CompletionsResponseMessage = {
    id: string,
    created: number,
    model: string,
    choices: Array<{
        index: number,
        finish_reason: string,
        message: {
            role: string,
            content: string,
            tool_calls: Array<{
                id: string,
                type: string,
                function: {
                    name: string,
                    arguments: object,
                }
            }>
        },
        delta: {
            role: string,
            content: string,
            tool_calls: Array<{
                id: string,
                type: string,
                function: {
                    name: string,
                    arguments: object,
                }
            }>
        }
    }>,
    usage: {
        prompt_tokens: number,
        completion_tokens: number,
        total_tokens: number,
    },
}

export default class Completions extends BaseApi<CreateCompletionsOptions, CompletionsResponseMessage> {

    public async create(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage> {
        return this.post("/chat/completions", {
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
        }, options)
    }
} 