import {BaseModel} from "./base.model"
import {Schema} from "mongoose";

export const QuestionModel = BaseModel("questions", {
    content: {type: String,request: true},
    matrix:{type:Array,request:true},
    answer:{type:String,request:true},
    score:{type:Number, request:true},
    level:{type:Number, default:1},
    time:{type:Number,default: 20}
});