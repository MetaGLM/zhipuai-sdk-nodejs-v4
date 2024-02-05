import { BaseRequestOptions } from './baseApi.js'

export type CreateFileOptions = {
    file: Blob,
    purpose: string,
} & BaseRequestOptions

export type FileResponse = {
    id: string,
    filename: string,
    purpose: string,
}

export type FindFileListOrderTypes = "desc" | "asc"

export type FindFileListOptions = {
    purpose?: string,
    limit?: number,
    after?: string,
    order?: FindFileListOrderTypes,
} & BaseRequestOptions

export type FileListResponse = {
    object: string,
    data: Array<{
        bytes: number,
        created_at: number,
        object: string
    } & FileResponse>
}
