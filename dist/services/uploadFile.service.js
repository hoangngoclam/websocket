"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const multer_1 = require("./../middlewares/multer");
const cloudinary = require("cloudinary");
class UploadFileService {
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
    uploadFile(fillFilename, request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.file) {
                const file = multer_1.default.dataUri(request).content;
                let urlImage = yield this.cloudUpLoadImage.uploader.upload(file);
                let imageUrl = urlImage.url;
                return {
                    message: 'Your image has been uploaded successfully to cloudinary',
                    data: {
                        imageUrl
                    }
                };
            }
        });
    }
}
exports.default = UploadFileService;
