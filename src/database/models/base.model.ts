import {Schema, model} from "mongoose";

export function BaseModel(name: string, properties: object) {
    return model(name, new Schema(Object.assign(
        properties,
        {
            createdAt: {type: Date, default: Date.now},
            updatedAt: {type: Date, default: Date.now}
        }))
    )
}