import {BaseRepository} from "./base.repository";
import {LogMoneyModel} from "../models/logMoney.model";

export default class LogsMoneyRepository extends BaseRepository {

    constructor() {
        super(LogMoneyModel);
    }

}