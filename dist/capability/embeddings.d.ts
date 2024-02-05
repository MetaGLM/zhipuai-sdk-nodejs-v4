import BaseApi from '../core/baseApi.js';
import { CreateEmbeddingsOptions, EmbeddingsResponse } from '../types/embeddings.js';
import '../core/request.js';
import 'axios';
import '../types/baseApi.js';

declare class Embeddings extends BaseApi {
    create(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse>;
}

export { Embeddings as default };
