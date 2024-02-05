import { BaseRequestOptions } from './baseApi.js';

type CreateEmbeddingsOptions = {
    input: Array<any> | string;
    model: string;
    encodingFormat: string;
    user: string;
    sensitiveWordCheck: object;
    extraHeaders?: object;
    timeout?: number;
} & BaseRequestOptions;
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

export type { CreateEmbeddingsOptions, EmbeddingsResponse };
