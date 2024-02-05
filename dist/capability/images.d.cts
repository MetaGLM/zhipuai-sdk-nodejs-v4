import BaseApi from '../core/baseApi.cjs';
import { CreateImagesOptions, ImagesResponse } from '../types/images.cjs';
import '../core/request.cjs';
import 'axios';
import '../types/baseApi.cjs';

declare class Images extends BaseApi {
    create(options: CreateImagesOptions): Promise<ImagesResponse>;
}

export { Images as default };
