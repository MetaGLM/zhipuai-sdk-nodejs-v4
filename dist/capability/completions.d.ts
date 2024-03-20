import BaseApi from '../core/baseApi.js';
import { CreateCompletionsOptions, CompletionsResponseMessage } from '../types/completions.js';
import { IncomingMessage } from 'http';
import '../core/request.js';
import 'axios';
import '../types/baseApi.js';

declare class Completions extends BaseApi {
    create(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage | IncomingMessage>;
}

export { Completions as default };
