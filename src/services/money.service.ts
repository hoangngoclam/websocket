import BaseService from "./base.service";
import MoneyRepository from "../database/repositories/money.repository";

const Repository = new MoneyRepository();

export default class MoneyService extends BaseService {
    constructor() {
        super(Repository)
    }
}