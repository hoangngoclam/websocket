"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base.model");
const mongoose_1 = require("mongoose");
exports.StoryModel = base_model_1.BaseModel("stories", {
    photo: { type: String },
    likes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "users" }],
    content: { type: String },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", required: true }
});
