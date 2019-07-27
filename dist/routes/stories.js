"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stories_controller_1 = require("../controllers/stories.controller");
const multer_1 = require("./../middlewares/multer");
class Stories {
    constructor(app) {
        app.route('/stories')
            .get(stories_controller_1.default.getAll())
            .post(multer_1.default.multerUploads("photo"), stories_controller_1.default.createNew());
        app.route('/stories/:id')
            .get(stories_controller_1.default.getById())
            .put(stories_controller_1.default.updateById())
            .delete(stories_controller_1.default.deleteById());
        app.route('/stories/likes/:id')
            .put(stories_controller_1.default.updateLike());
    }
}
exports.Stories = Stories;
