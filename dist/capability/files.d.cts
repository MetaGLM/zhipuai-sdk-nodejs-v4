import BaseApi from '../core/baseApi.cjs';
import { CreateFileOptions, FileResponse, FindFileListOptions, FileListResponse } from '../types/files.cjs';
import '../core/request.cjs';
import 'axios';
import '../types/baseApi.cjs';

declare class Files extends BaseApi {
    create(options: CreateFileOptions): Promise<FileResponse>;
    findList(options: FindFileListOptions): Promise<FileListResponse>;
}

export { Files as default };
