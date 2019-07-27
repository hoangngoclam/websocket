import {BaseModel} from "./base.model"

export const UserModel = BaseModel("users", {
    username: {type: String, required: true},
    password: {type: String, required: true},
    displayName: {type: String, required: true},
    avatar: {type: String},
    bags: {type: Array},
    email: {type: String},
    phoneNumber: {type: String},
    role: {type: String, default: "MEMBER"}
});