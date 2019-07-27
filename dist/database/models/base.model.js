"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function BaseModel(name, properties) {
    return mongoose_1.model(name, new mongoose_1.Schema(Object.assign(properties, {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    })));
}
exports.BaseModel = BaseModel;
