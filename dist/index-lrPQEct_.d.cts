import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type ZhipuAIOptions = {
    apiKey: string;
    baseUrl?: string;
    timeout?: number;
    maxRetries?: number;
    customHeaders?: object;
};
declare class ZhipuAI {
    private readonly options;
    __esModule: boolean;
    request: AxiosInstance;
    constructor(options: ZhipuAIOptions);
    post(url: string, data?: object, config?: AxiosRequestConfig<object>): Promise<AxiosResponse<any>>;
    createCompletions(options: CreateCompletionsOptions): Promise<AxiosResponse<any>>;
    authHeaders(): {
        Authorization: never;
    };
}

type MessageOptions = {
    role: "system" | "user" | "assistant" | "function";
    content: string;
};
type CreateCompletionsOptions = {
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
type ResponseMessage = {
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
declare class Completions {
    private readonly app;
    constructor(app: ZhipuAI);
    create(options: CreateCompletionsOptions): Promise<AxiosResponse<ResponseMessage>>;
}

export { Completions as C, type MessageOptions as M, type ResponseMessage as R, ZhipuAI as Z, type ZhipuAIOptions as a, type CreateCompletionsOptions as b };
