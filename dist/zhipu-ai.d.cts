import Request from './core/request.cjs';
import Completions from './capability/completions.cjs';
import Images from './capability/images.cjs';
import Embeddings from './capability/embeddings.cjs';
import { CreateCompletionsOptions, CompletionsResponseMessage } from './types/completions.cjs';
import { CreateImagesOptions, ImagesResponse } from './types/images.cjs';
import { CreateEmbeddingsOptions, EmbeddingsResponse } from './types/embeddings.cjs';
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from './types/files.cjs';
import Files from './capability/files.cjs';
import { IncomingMessage } from 'http';
import 'axios';
import './core/baseApi.cjs';
import './types/baseApi.cjs';

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
