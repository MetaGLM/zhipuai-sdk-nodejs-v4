import { AxiosInstance, CreateAxiosDefaults, AxiosResponse, AxiosRequestConfig } from 'axios';

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
declare class Completions extends BaseApi<CreateCompletionsOptions, CompletionsResponseMessage> {
    create(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage>;
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
declare class Images extends BaseApi<CreateImagesOptions, ImagesResponse> {
    create(options: CreateImagesOptions): Promise<ImagesResponse>;
}

type CreateEmbeddingsOptions = {
    input: Array<any> | string;
    model: string;
    encodingFormat: string;
    user: string;
    sensitiveWordCheck: object;
    extraHeaders?: object;
    timeout?: number;
};
type EmbeddingsResponse = {
    model: string;
    data: Array<{
        index: number;
        object: string;
        embedding: Array<any>;
    }>;
    object: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
};
declare class Embeddings extends BaseApi<CreateEmbeddingsOptions, EmbeddingsResponse> {
    create(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse>;
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
    createCompletions(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage>;
    createImages(options: CreateImagesOptions): Promise<ImagesResponse>;
    createEmbeddings(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse>;
    authHeaders(): {
        Authorization: never;
    };
}

declare class Request {
    private readonly app;
    request: AxiosInstance;
    constructor(app: ZhipuAI, config: CreateAxiosDefaults);
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
}

type moreRequestOptions = {
    extraHeaders?: object;
    timeout?: number;
    stream?: boolean;
};
declare class BaseApi<Options, Response> {
    private readonly request;
    constructor(request: Request);
    post(url: string, data: object, options: Options & moreRequestOptions): Promise<Response | any>;
}

export { BaseApi as B, Completions as C, Embeddings as E, Images as I, type MessageOptions as M, Request as R, ZhipuAI as Z, type CreateCompletionsOptions as a, type CompletionsResponseMessage as b, type CreateImagesOptions as c, type ImagesResponse as d, type CreateEmbeddingsOptions as e, type EmbeddingsResponse as f, type ZhipuAIOptions as g, type moreRequestOptions as m };
