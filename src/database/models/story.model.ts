import {BaseModel} from "./base.model"
import {Schema} from "mongoose";

export const StoryModel = BaseModel("stories", {
    photo: {type: String},
    likes: [{type: Schema.Types.ObjectId, ref: "users"}],
    content: {type: String},
    author: {type: Schema.Types.ObjectId, ref: "users", required: true}
});