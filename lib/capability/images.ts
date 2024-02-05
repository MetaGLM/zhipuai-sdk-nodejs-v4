import BaseApi from "../core/baseApi.js";
import { CreateImagesOptions, ImagesResponse } from "../types/index.js";

export default class Images extends BaseApi {
    public async create(options: CreateImagesOptions): Promise<ImagesResponse> {
        return this.post("/images/generations", {
            "prompt": options.prompt,
            "model": options.model,
            "n": options.n,
            "quality": options.quality,
            "response_format": options.responseFormat,
            "size": options.size,
            "style": options.style,
            "user": options.user,
        }, options)
    }
} 