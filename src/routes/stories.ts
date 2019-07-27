import StoriesController from "../controllers/stories.controller";
import MulterMiddleware from './../middlewares/multer';
export class Stories {
    constructor(app) {
        app.route('/stories')
            .get(StoriesController.getAll())
            .post(MulterMiddleware.multerUploads("photo"),StoriesController.createNew());
        app.route('/stories/:id')
            .get(StoriesController.getById())
            .put(StoriesController.updateById())
            .delete(StoriesController.deleteById());
        app.route('/stories/likes/:id')
            .put(StoriesController.updateLike())
    }
}