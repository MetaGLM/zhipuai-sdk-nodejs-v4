import BaseApi from "../core/baseApi.js";
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from "../types/index.js";

export default class Files extends BaseApi {
    public async create(options: CreateFileOptions): Promise<FileResponse> {
        const formData = new FormData()
        formData.append("purpose", options.purpose);
        formData.append("file", options.file);
        return this.request.postForm("/files", formData, options)
            .catch(this.processError)
    }

    public async findList(options: FindFileListOptions): Promise<FileListResponse> {
        return this.request.get("/files", {
            params: {
                "purpose": options.purpose,
                "limit": options.limit,
                "after": options.after,
                "order": options.order,
            },
            headers: options.extraHeaders,
            timeout: options.timeout,
            responseType: options.stream ? 'stream' : 'json'
        })
    }
} 