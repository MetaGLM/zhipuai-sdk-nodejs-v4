import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CreateCompletionsOptions } from "./completions.js";
export type ZhipuAIOptions = {
    apiKey: string;
    baseUrl?: string;
    timeout?: number;
    maxRetries?: number;
    customHeaders?: object;
};
export declare class ZhipuAI {
    private readonly options;
    __esModule: boolean;
    request: AxiosInstance;
    constructor(options: ZhipuAIOptions);
    post(url: string, data?: object, config?: AxiosRequestConfig<object>): Promise<AxiosResponse<any>>;
    createCompletions(options: CreateCompletionsOptions): Promise<AxiosResponse<any>>;
    authHeaders(): {
        Authorization: never;
    };
}
export default ZhipuAI;
