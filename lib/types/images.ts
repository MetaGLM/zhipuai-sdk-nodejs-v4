import { BaseRequestOptions } from './baseApi.js'

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
} & BaseRequestOptions

export type ImagesResponse = {
    created: number,
    data: Array<string>
}