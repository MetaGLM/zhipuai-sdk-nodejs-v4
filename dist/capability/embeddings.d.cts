import BaseApi from '../core/baseApi.cjs';
import { CreateEmbeddingsOptions, EmbeddingsResponse } from '../types/embeddings.cjs';
import '../core/request.cjs';
import 'axios';
import '../types/baseApi.cjs';

declare class Embeddings extends BaseApi {
    create(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse>;
}

export { Embeddings as default };
