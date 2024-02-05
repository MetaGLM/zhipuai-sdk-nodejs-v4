import BaseApi from '../core/baseApi.js';
import { CreateImagesOptions, ImagesResponse } from '../types/images.js';
import '../core/request.js';
import 'axios';
import '../types/baseApi.js';

declare class Images extends BaseApi {
    create(options: CreateImagesOptions): Promise<ImagesResponse>;
}

export { Images as default };
