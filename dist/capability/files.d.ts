import BaseApi from '../core/baseApi.js';
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from '../types/files.js';
import '../core/request.js';
import 'axios';
import '../types/baseApi.js';

declare class Files extends BaseApi {
    create(options: CreateFileOptions): Promise<FileResponse>;
    findList(options: FindFileListOptions): Promise<FileListResponse>;
}

export { Files as default };
