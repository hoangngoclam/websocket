import * as multer from 'multer';
import * as Datauri from 'datauri';
import * as path from 'path';

class MulterMiddleware {
    constructor(){
    }

    multerUploads(fillFileName = "images"){
        const storage = multer.memoryStorage();
        return multer({ storage }).single(fillFileName);
    }

    dataUri(request){
        const dUri = new Datauri();
        const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
        return dataUri(request);
    }
}
export default new MulterMiddleware();