import {BaseModel} from "./base.model"

export const LogMoneyModel = BaseModel("logsmoney", {
    caption: {type: String, required: true},
    money: {type: String, required: true},
    type:{type:String, default:"IN_CREATE"} //IN_CREATE:Tăng, REDUCE:Giảm
});