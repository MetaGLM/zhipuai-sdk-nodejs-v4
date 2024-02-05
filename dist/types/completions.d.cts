import { BaseRequestOptions } from './baseApi.cjs';

type MessageOptions = {
    role: "system" | "user" | "assistant" | "function";
    content: string;
};
type CreateCompletionsOptions = {
    model: string;
    messages: Array<MessageOptions>;
    requestId?: string;
    doSample?: boolean;
    stream?: boolean;
    temperature?: number;
    topP?: number;
    maxTokens?: number;
    seed?: number;
    stop?: Array<string>;
    sensitiveWordCheck?: object;
    tools?: object;
    toolChoice?: string;
} & BaseRequestOptions;
type CompletionsResponseMessage = {
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

export type { CompletionsResponseMessage, CreateCompletionsOptions, MessageOptions };
