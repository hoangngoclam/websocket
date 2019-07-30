import {BaseRepository} from "./base.repository";
import {QuestionModel} from "../models/question.model";

export default class QuestionRepository extends BaseRepository {

    constructor() {
        super(QuestionModel);
    }
}