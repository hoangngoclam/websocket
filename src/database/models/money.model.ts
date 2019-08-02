import {BaseModel} from "./base.model"

export const MoneyModel = BaseModel("users", {
    total: {type: String, required: true, default: 0},
});