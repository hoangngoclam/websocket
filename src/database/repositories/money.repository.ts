import {BaseRepository} from "./base.repository";
import {MoneyModel} from "../models/money.model";

export default class MoneyRepository extends BaseRepository {

    constructor() {
        super(MoneyModel);
    }

}