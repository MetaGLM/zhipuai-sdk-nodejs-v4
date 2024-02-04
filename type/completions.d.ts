import { AxiosResponse } from "axios";
import ZhipuAI from "./zhipu-ai.js";
export type MessageOptions = {
    role: "system" | "user" | "assistant" | "function";
    content: string;
};
export type CreateCompletionsOptions = {
    model: string;
    messages: Array<MessageOptions>;
    request_id?: string;
    do_sample?: boolean;
    stream?: boolean;
    temperature?: number;
    top_p?: number;
    max_tokens?: number;
    seed?: number;
    stop?: Array<string>;
    sensitive_word_check?: object;
    tools?: object;
    tool_choice?: string;
    extra_headers?: object;
    disable_strict_validation?: boolean;
    timeout?: number;
};
export type ResponseMessage = {
    id: string;
    created: number;
    model: string;
    choices: Array<{
        index: number;
        finish_reason: string;
        message: {
            role: string;
            content: string;
            tool_calls: Array<{
                id: string;
                type: string;
                function: {
                    name: string;
                    arguments: object;
                };
            }>;
        };
        delta: {
            role: string;
            content: string;
            tool_calls: Array<{
                id: string;
                type: string;
                function: {
                    name: string;
                    arguments: object;
                };
            }>;
        };
    }>;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
};
export default class Completions {
    private readonly app;
    constructor(app: ZhipuAI);
    create(options: CreateCompletionsOptions): Promise<AxiosResponse<ResponseMessage>>;
}
