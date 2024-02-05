import { BaseRequestOptions } from './baseApi.js';

type CreateFileOptions = {
    file: Blob;
    purpose: string;
} & BaseRequestOptions;
type FileResponse = {
    id: string;
    filename: string;
    purpose: string;
};
type FindFileListOrderTypes = "desc" | "asc";
type FindFileListOptions = {
    purpose?: string;
    limit?: number;
    after?: string;
    order?: FindFileListOrderTypes;
} & BaseRequestOptions;
type FileListResponse = {
    object: string;
    data: Array<{
        bytes: number;
        created_at: number;
        object: string;
    } & FileResponse>;
};

export type { CreateFileOptions, FileListResponse, FileResponse, FindFileListOptions, FindFileListOrderTypes };
