import BaseApi from "./baseApi";

export type CreateEmbeddingsOptions = {
    input: Array<any> | string,
    model: string,
    encodingFormat: string,
    user: string,
    sensitiveWordCheck: object,
    extraHeaders?: object,
    timeout?: number,
}

export type EmbeddingsResponse = {
    model: string,
    data: Array<{
        index: number,
        object: string,
        embedding: Array<any>
    }>,
    object: string,
    usage: {
        prompt_tokens: number,
        completion_tokens: number,
        total_tokens: number
    }
}

export default class Embeddings extends BaseApi<CreateEmbeddingsOptions, EmbeddingsResponse> {
    public async create(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse> {
        return this.post("/embeddings", {
            "input": options.input,
            "model": options.model,
            "encoding_format": options.encodingFormat,
            "user": options.user,
            "sensitive_word_check": options.sensitiveWordCheck,
        }, options)
    }
} 