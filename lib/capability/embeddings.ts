import BaseApi from "../core/baseApi.js";
import { CreateEmbeddingsOptions, EmbeddingsResponse } from "../types/index.js";

export default class Embeddings extends BaseApi {
    public async create(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse> {
        return this.request.post("/embeddings", {
            "input": options.input,
            "model": options.model,
            "encoding_format": options.encodingFormat,
            "user": options.user,
            "sensitive_word_check": options.sensitiveWordCheck,
        }, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(this.processError)
    }
} 