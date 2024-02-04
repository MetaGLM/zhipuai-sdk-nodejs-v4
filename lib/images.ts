import { AxiosResponse } from "axios";
import ZhipuAI from "./zhipu-ai.js";


export type CreateImagesOptions = {
    model: string,
    prompt?: string,
    n?: number,
    quality?: string,
    responseFormat?: string,
    size?: string,
    style?: string,
    user?: string,
    extraHeaders?: object,
    timeout?: number,
}

export type ImagesResponse = {
    created: number,
    data: Array<string>
}

export default class Images {
    constructor(private readonly app: ZhipuAI) { }

    public async create(options: CreateImagesOptions): Promise<AxiosResponse<ImagesResponse>> {
        return this.app.post("/images/generations", {
            "prompt": options.prompt,
            "model": options.model,
            "n": options.n,
            "quality": options.quality,
            "response_format": options.responseFormat,
            "size": options.size,
            "style": options.style,
            "user": options.user,
        }, {
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: 'json'
        })
    }
} 