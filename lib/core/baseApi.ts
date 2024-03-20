import Request from "./request.js";
export default class BaseApi {
    constructor(protected readonly request: Request) {
    }

    protected processError(err: any) {
        const data = err?.response?.data ?? err
        return Promise.reject(data)
    }
} 