import { AxiosInstance, CreateAxiosDefaults, AxiosResponse, AxiosRequestConfig } from 'axios';

declare class Request {
    private readonly app;
    request: AxiosInstance;
    constructor(app: ZhipuAI, config: CreateAxiosDefaults);
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
}

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
    request: Request;
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
    extraHeaders?: object;
    disableStrictValidation?: boolean;
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

export { Completions as C, type MessageOptions as M, Request as R, ZhipuAI as Z, type ZhipuAIOptions as a, type CreateCompletionsOptions as b, type ResponseMessage as c };
