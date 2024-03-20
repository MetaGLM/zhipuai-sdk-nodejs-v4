import BaseApi from '../core/baseApi.cjs';
import { CreateCompletionsOptions, CompletionsResponseMessage } from '../types/completions.cjs';
import { IncomingMessage } from 'http';
import '../core/request.cjs';
import 'axios';
import '../types/baseApi.cjs';

declare class Completions extends BaseApi {
    create(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage | IncomingMessage>;
}

export { Completions as default };
