import { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { CreateCompletionsOptions } from "./completions";
export type ZhipuAIOptions = {
    apiKey: string;
    baseUrl?: string;
    timeout?: number;
    maxRetries?: number;
    customHeaders?: object;
};
export default class ZhipuAI {
    private readonly options;
    request: Axios;
    constructor(options: ZhipuAIOptions);
    post(url: string, data?: object, config?: AxiosRequestConfig<object>): Promise<AxiosResponse<any>>;
    createCompletions(options: CreateCompletionsOptions): Promise<AxiosResponse<any>>;
    authHeaders(): {
        Authorization: never;
    };
}
