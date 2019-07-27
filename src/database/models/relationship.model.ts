import {BaseModel} from "./base.model";
import {Schema} from "mongoose";

export const RelationshipModel = BaseModel('relationships', {
    userId: {type: Schema.Types.ObjectId, ref: "users", require: true},
    friendId: {type: Schema.Types.ObjectId, ref: "users", require: true},
    status: {type: String, default: "PENDING"}
});