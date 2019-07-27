import * as config from 'config';
import MulterMiddleware from './../middlewares/multer';
import * as cloudinary from 'cloudinary';

import app from "../app";
export default class UploadFileService {

    private cloudUpLoadImage;
    constructor() {
        this.cloudUpLoadImage = cloudinary.v2;
        this.cloudUpLoadImage.config(config.get('CLOUD_UPLOAD_IMAGES'));
    }

    /**
     *
     * @param {string} fillFilename : name of fill file you upload
     * @param {object} request have file upload
     * @returns {json} link public image
     */
    async uploadFile(fillFilename,request){
            if(request.file) {
                const file = MulterMiddleware.dataUri(request).content;
                let urlImage = await this.cloudUpLoadImage.uploader.upload(file);
                let imageUrl = urlImage.url;
                return {
                    message: 'Your image has been uploaded successfully to cloudinary',
                    data: {
                        imageUrl
                    }
                }
            }
    }
}