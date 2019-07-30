import QuestionsController from "../controllers/questions.controller";

export class Questions {
    constructor(app) {
        app.route('/questions')
            .post(QuestionsController.create())
            .get(QuestionsController.getAll());
        app.route('/questions/:id')
            .get(QuestionsController.getById())
            .put(QuestionsController.updateById())
            .delete(QuestionsController.deleteById());
    }
}