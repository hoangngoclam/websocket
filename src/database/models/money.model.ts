import {BaseModel} from "./base.model"

export const MoneyModel = BaseModel("money", {
    total: {type: String, required: true, default: 0},
});