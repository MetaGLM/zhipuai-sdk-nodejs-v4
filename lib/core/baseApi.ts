import Request from "./request.js";
import { BaseRequestOptions } from "../types/index.js";

export default class BaseApi {
    constructor(private readonly request: Request) {
    }

    private processError(err: any) {
        const data = err?.response?.data ?? err
        return Promise.reject(data)
    }

    public async get<Options extends BaseRequestOptions, Response>(url: string, params: object, options: Options): Promise<Response | any> {
        return this.request.get(url, {
            params: params,
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(this.processError)
    }

    public async post<Options extends BaseRequestOptions, Response>(url: string, data: object, options: Options): Promise<Response | any> {
        return this.request.post(url, data, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(this.processError)
    }

    public async postForm<Options extends BaseRequestOptions, Response>(url: string, data: FormData, options: Options): Promise<Response | any> {
        return this.request.postForm(url, data, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(this.processError)
    }
} 