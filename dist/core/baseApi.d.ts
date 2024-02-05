import Request from './request.js';
import { BaseRequestOptions } from '../types/baseApi.js';
import 'axios';

declare class BaseApi {
    private readonly request;
    constructor(request: Request);
    private processError;
    get<Options extends BaseRequestOptions, Response>(url: string, params: object, options: Options): Promise<Response | any>;
    post<Options extends BaseRequestOptions, Response>(url: string, data: object, options: Options): Promise<Response | any>;
    postForm<Options extends BaseRequestOptions, Response>(url: string, data: FormData, options: Options): Promise<Response | any>;
}

export { BaseApi as default };
