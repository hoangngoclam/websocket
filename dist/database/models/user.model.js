"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base.model");
exports.UserModel = base_model_1.BaseModel("users", {
    username: { type: String, required: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true },
    avatar: { type: String },
    bags: { type: Array },
    email: { type: String },
    phoneNumber: { type: String },
    role: { type: String, default: "MEMBER" }
});
