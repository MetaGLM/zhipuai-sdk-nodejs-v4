import BaseApi from "../core/baseApi.js";
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from "../types/index.js";

export default class Files extends BaseApi {
    public async create(options: CreateFileOptions): Promise<FileResponse> {
        const formData = new FormData()
        formData.append("purpose", options.purpose);
        formData.append("file", options.file);
        return this.postForm("/files", formData, options)
    }

    public async findList(options: FindFileListOptions): Promise<FileListResponse> {
        return this.get("/files", {
            "purpose": options.purpose,
            "limit": options.limit,
            "after": options.after,
            "order": options.order,
        }, options)
    }
} 