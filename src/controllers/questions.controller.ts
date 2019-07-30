import BaseController from "./base.controller";
import QuestionService from "../services/question.service";

const Service = new QuestionService();

let QuestionsController =  new class QuestionsController extends BaseController {
    constructor() {
        super(Service);
    }
};
export default QuestionsController