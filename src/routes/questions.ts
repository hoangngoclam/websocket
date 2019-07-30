
import auth from "../middlewares/auth";
import QuestionsController from "../controllers/questions.controller";

export class Questions {
    constructor(app) {
        app.route('/questions')
            .post(QuestionsController.create())
            .get(QuestionsController.getAll());
        app.route('/questions/:id')
            .get(auth, QuestionsController.getById())
            .put(auth, QuestionsController.updateById())
            .delete(auth, QuestionsController.deleteById());
    }
}