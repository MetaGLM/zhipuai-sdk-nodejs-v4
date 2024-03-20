import Request from './core/request.js';
import Completions from './capability/completions.js';
import Images from './capability/images.js';
import Embeddings from './capability/embeddings.js';
import { CreateCompletionsOptions, CompletionsResponseMessage } from './types/completions.js';
import { CreateImagesOptions, ImagesResponse } from './types/images.js';
import { CreateEmbeddingsOptions, EmbeddingsResponse } from './types/embeddings.js';
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from './types/files.js';
import Files from './capability/files.js';
import { IncomingMessage } from 'http';
import 'axios';
import './core/baseApi.js';
import './types/baseApi.js';

type ZhipuAIOptions = {
    apiKey?: string;
    baseUrl?: string;
    timeout?: number;
    maxRetries?: number;
    customHeaders?: object;
    cacheToken?: boolean;
};
declare class ZhipuAI {
    private readonly options;
    __esModule: boolean;
    request: Request;
    completions: Completions;
    images: Images;
    embeddings: Embeddings;
    files: Files;
    private apiKey;
    constructor(options?: ZhipuAIOptions);
    createCompletions(options: CreateCompletionsOptions): Promise<CompletionsResponseMessage | IncomingMessage>;
    createImages(options: CreateImagesOptions): Promise<ImagesResponse>;
    createEmbeddings(options: CreateEmbeddingsOptions): Promise<EmbeddingsResponse>;
    createFiles(options: CreateFileOptions): Promise<FileResponse>;
    findFiles(options?: FindFileListOptions): Promise<FileListResponse>;
    authHeaders(): {
        [key: string]: string;
    };
}

export { ZhipuAI, type ZhipuAIOptions, ZhipuAI as default };
