import { BaseRequestOptions } from './baseApi.js';

type CreateImagesOptions = {
    model: string;
    prompt?: string;
    n?: number;
    quality?: string;
    responseFormat?: string;
    size?: string;
    style?: string;
    user?: string;
    extraHeaders?: object;
    timeout?: number;
} & BaseRequestOptions;
type ImagesResponse = {
    created: number;
    data: Array<string>;
};

export type { CreateImagesOptions, ImagesResponse };
