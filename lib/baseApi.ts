import { AxiosResponse } from "axios";
import Request from "./request";


export type moreRequestOptions = {
    extraHeaders?: object,
    timeout?: number,
    stream?: boolean
}

export default class BaseApi<Options, Response> {
    constructor(private readonly request: Request) {
    }

    public async post(url: string, data: object, options: Options & moreRequestOptions): Promise<Response | any> {
        return this.request.post(url, data, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
            .catch(err => {
                const data = err.response.data as Response
                return Promise.reject(data)
            })
    }
} 