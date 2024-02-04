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

type CreateImagesOptions = {
    model: string;
    prompt?: string;
    n?: number;
    quality?: string;
    responseFormat?: string;
    size?: string;
    style?: string;
    user?: string;
    extraHeaders?: object;
    timeout?: number;
};
type ImagesResponse = {
    created: number;
    data: Array<string>;
};
declare class Images {
    private readonly app;
    constructor(app: ZhipuAI);
    create(options: CreateImagesOptions): Promise<AxiosResponse<ImagesResponse>>;
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
    createCompletions(options: CreateCompletionsOptions): Promise<AxiosResponse<CompletionsResponseMessage>>;
    createImages(options: CreateImagesOptions): Promise<AxiosResponse<ImagesResponse>>;
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
    timeout?: number;
};
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
declare class Completions {
    private readonly app;
    constructor(app: ZhipuAI);
    create(options: CreateCompletionsOptions): Promise<AxiosResponse<CompletionsResponseMessage>>;
}

export { type CreateImagesOptions as C, Images as I, type MessageOptions as M, Request as R, ZhipuAI as Z, type ImagesResponse as a, type ZhipuAIOptions as b, Completions as c, type CreateCompletionsOptions as d, type CompletionsResponseMessage as e };
