import BaseService from "./base.service";
import QuestionRepository from "../database/repositories/question.repository";

const Repository = new QuestionRepository();

export default class QuestionService extends BaseService {
    constructor() {
        super(Repository)
    }
}