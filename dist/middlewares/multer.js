"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const Datauri = require("datauri");
const path = require("path");
class MulterMiddleware {
    constructor() {
    }
    multerUploads(fillFileName = "images") {
        const storage = multer.memoryStorage();
        return multer({ storage }).single(fillFileName);
    }
    dataUri(request) {
        const dUri = new Datauri();
        const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
        return dataUri(request);
    }
}
exports.default = new MulterMiddleware();
