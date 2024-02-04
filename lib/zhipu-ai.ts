import assert from "assert"
import { generateToken } from "./jwt.js"
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import Completions, { CreateCompletionsOptions } from "./completions.js"

export type ZhipuAIOptions = {
    apiKey: string,
    baseUrl?: string,
    timeout?: number,
    maxRetries?: number,
    customHeaders?: object
}

export class ZhipuAI {
    public __esModule = false
    public request: AxiosInstance

    constructor(private readonly options: ZhipuAIOptions) {
        if (!options.apiKey) options.apiKey = process.env['ZHIPUAI_API_KEY'] || ''
        assert.ok(options.apiKey, "未提供api_key，请通过参数或环境变量提供")
        if (!options.baseUrl) options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || ''
        if (!options.baseUrl) options.baseUrl = "https://open.bigmodel.cn/api/paas/v4"
        this.request = Axios.create({
            baseURL: options.baseUrl,
            timeout: options.timeout,
            headers: options.customHeaders
        })

        this.request.interceptors.request.use((config) => {
            config.headers.set(this.authHeaders())
            return config;
        })
    }

    public async post(url: string, data?: object, config?: AxiosRequestConfig<object>): Promise<AxiosResponse<any>> {
        return this.request.post(url, data, config)
    }

    public async createCompletions(options: CreateCompletionsOptions): Promise<AxiosResponse<any>> {
        return new Completions(this).create(options)
    }

    authHeaders() {
        const token = generateToken(this.options.apiKey)
        return { "Authorization": token }
    }
}

export default ZhipuAI