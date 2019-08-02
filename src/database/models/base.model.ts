import {Schema, model} from "mongoose";

export function BaseModel(name: string, properties: object) {
    return model(name, new Schema(Object.assign(
        properties,
        {
            created_at: {type: Date, default: Date.now},
            updated_at: {type: Date, default: Date.now}
        }))
    )
}