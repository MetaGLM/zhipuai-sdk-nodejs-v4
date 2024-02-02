import { AxiosResponse } from "axios";
import ZhipuAI from "./zhipu-ai";

export type MessageOptions = {
    role: "system" | "user" | "assistant" | "function"
    content: string
}

export type CreateCompletionsOptions = {
    model: string,
    messages: Array<MessageOptions>,
    request_id?: string,
    do_sample?: boolean,
    stream?: boolean,
    temperature?: number,
    top_p?: number,
    max_tokens?: number,
    seed?: number,
    stop?: Array<string>,
    sensitive_word_check?: object,
    tools?: object,
    tool_choice?: string,
    extra_headers?: object,
    disable_strict_validation?: boolean,
    timeout?: number,
}

export type ResponseMessage = {
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

export default class Completions {
    constructor(private readonly app: ZhipuAI) {
    }

    public async create(options: CreateCompletionsOptions): Promise<AxiosResponse<ResponseMessage>> {
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
        })
    }
} 