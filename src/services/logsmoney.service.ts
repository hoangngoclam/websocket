import BaseService from "./base.service";
import LogsMoneyRepository from "../database/repositories/logsMoney.repository";

const Repository = new LogsMoneyRepository();

export default class LogsMoneyService extends BaseService {
    constructor() {
        super(Repository)
    }
}