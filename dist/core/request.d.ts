import { AxiosInstance, CreateAxiosDefaults, AxiosHeaderValue, AxiosResponse, AxiosRequestConfig } from 'axios';

declare class Request {
    request: AxiosInstance;
    constructor(config: CreateAxiosDefaults, authHeaders: () => {
        [key: string]: AxiosHeaderValue;
    });
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    postForm<T = any, R = AxiosResponse<T>, D = object>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
}

export { Request as default };
