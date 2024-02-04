import assert from "assert"
import { generateToken } from "./jwt.js"
import Completions, { CompletionsResponseMessage, CreateCompletionsOptions } from "./completions.js"
import Request from "./request.js"
import Images, { CreateImagesOptions, ImagesResponse } from "./images.js"
import Embeddings, { CreateEmbeddingsOptions, EmbeddingsResponse } from "./embeddings.js"

export type ZhipuAIOptions = {
    apiKey: string,
    baseUrl?: string,
    timeout?: number,
    maxRetries?: number,
    customHeaders?: object
}

export class ZhipuAI {
    public __esModule = false
    public request: Request

    constructor(private readonly options: ZhipuAIOptions) {
        if (!options.apiKey) options.apiKey = process.env['ZHIPUAI_API_KEY'] || ''
        assert.ok(options.apiKey, "未提供api_key，请通过参数或环境变量提供")
        if (!options.baseUrl) options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || ''
        if (!options.baseUrl) options.baseUrl = "https://open.bigmodel.cn/api/paas/v4"
        this.request = new Request(this, {
            timeout: options.timeout,
            headers: options.customHeaders,
            baseURL: options.baseUrl
        });
    }

    public async createCompletions(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage> {
        return new Completions(this.request).create(options)
    }

    public async createImages(options: CreateImagesOptions): Promise<ImagesResponse> {
        return new Images(this.request).create(options)
    }

    public async createEmbeddings(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse> {
        return new Embeddings(this.request).create(options)
    }

    public authHeaders() {
        const token = generateToken(this.options.apiKey)
        return { "Authorization": token }
    }
}

export default ZhipuAI