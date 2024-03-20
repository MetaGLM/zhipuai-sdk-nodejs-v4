import assert from "assert"
import { generateToken } from "./core/jwt.js"
import Request from "./core/request.js"
import { Completions, Images, Embeddings } from "./capability"
import {
    CompletionsResponseMessage, CreateCompletionsOptions,
    CreateImagesOptions, ImagesResponse,
    CreateEmbeddingsOptions, EmbeddingsResponse,
    CreateFileOptions, FileResponse, FileListResponse, FindFileListOptions,
} from "./types"
import Files from "./capability/files.js"
import { IncomingMessage } from "http"

export type ZhipuAIOptions = {
    apiKey?: string,
    baseUrl?: string,
    timeout?: number,
    maxRetries?: number,
    customHeaders?: object,
    cacheToken?: boolean
}

export class ZhipuAI {
    public __esModule = false
    public request: Request
    public completions: Completions
    public images: Images
    public embeddings: Embeddings
    public files: Files
    private apiKey: string


    constructor(private readonly options: ZhipuAIOptions = {}) {
        this.apiKey = process.env['ZHIPUAI_API_KEY'] || ''
        if (options.apiKey) {
            this.apiKey = options.apiKey
        }

        assert.ok(this.apiKey, "未提供api_key，请通过参数或环境变量提供")
        if (!options.baseUrl) options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || ''
        if (!options.baseUrl) options.baseUrl = "https://open.bigmodel.cn/api/paas/v4"
        options.cacheToken = options.cacheToken ?? true
        this.request = new Request({
            timeout: options.timeout,
            headers: options.customHeaders,
            baseURL: options.baseUrl
        }, this.authHeaders.bind(this));

        this.completions = new Completions(this.request)
        this.images = new Images(this.request)
        this.embeddings = new Embeddings(this.request)
        this.files = new Files(this.request)
    }

    public async createCompletions(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage | IncomingMessage> {
        return this.completions.create(options);
    }

    public async createImages(options: CreateImagesOptions): Promise<ImagesResponse> {
        return this.images.create(options)
    }

    public async createEmbeddings(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse> {
        return this.embeddings.create(options)
    }

    public async createFiles(options: CreateFileOptions): Promise<FileResponse> {
        return this.files.create(options)
    }

    public async findFiles(options: FindFileListOptions = {}): Promise<FileListResponse> {
        return this.files.findList(options)
    }

    public authHeaders(): { [key: string]: string } {
        const token = generateToken(this.apiKey, this.options.cacheToken)
        return { "Authorization": token }
    }
}

export default ZhipuAI