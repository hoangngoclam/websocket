"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base.model");
const mongoose_1 = require("mongoose");
exports.RelationshipModel = base_model_1.BaseModel('relationships', {
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", require: true },
    friendId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", require: true },
    status: { type: String, default: "PENDING" }
});
