import Axios, { AxiosInstance, CreateAxiosDefaults, AxiosResponse, AxiosRequestConfig } from "axios";
import ZhipuAI from "./zhipu-ai";

export default class Request {
    public request: AxiosInstance

    constructor(private readonly app: ZhipuAI, config: CreateAxiosDefaults) {
        this.request = Axios.create(config)

        this.request.interceptors.request.use((config) => {
            config.headers.set(this.app.authHeaders())
            return config;
        })
    }

    async post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request.post(url, data, config).then(res => res.data)
    }

    async get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request.get(url, config).then(res => res.data)
    }

    async put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request.put(url, data, config).then(res => res.data)
    }

    async delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request.delete(url, config).then(res => res.data)
    }
}