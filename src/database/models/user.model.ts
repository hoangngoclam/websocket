import {BaseModel} from "./base.model"

export const UserModel = BaseModel("users", {
    user_name: {type: String, required: true},
    password: {type: String, required: true},
    type:{type:String, default:"CLIENT"}
});