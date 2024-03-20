import Request from './request.js';
import 'axios';

declare class BaseApi {
    protected readonly request: Request;
    constructor(request: Request);
    protected processError(err: any): Promise<never>;
}

export { BaseApi as default };
